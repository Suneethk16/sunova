"""
Sunova Contact API — FastAPI backend
Run:  uvicorn main:app --reload --port 8000
"""

import os
import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, validator
from dotenv import load_dotenv

load_dotenv()

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  %(levelname)s  %(message)s",
)
logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# App
# ---------------------------------------------------------------------------

app = FastAPI(title="Sunova Contact API", version="1.0.0")

# Allow requests from the Vite dev server and the production domain.
# Add your production domain to ALLOWED_ORIGINS in .env if needed.
_raw_origins = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:5173,http://localhost:3000",
)
origins = [o.strip() for o in _raw_origins.split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str

    @validator("name", pre=True)
    def name_valid(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 2:
            raise ValueError("Name must be at least 2 characters.")
        if len(v) > 100:
            raise ValueError("Name must be 100 characters or fewer.")
        return v

    @validator("message", pre=True)
    def message_valid(cls, v: str) -> str:
        v = v.strip()
        if len(v) < 10:
            raise ValueError("Message must be at least 10 characters.")
        if len(v) > 5000:
            raise ValueError("Message must be 5 000 characters or fewer.")
        return v


class ContactResponse(BaseModel):
    success: bool
    message: str


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------

@app.get("/health", tags=["Health"])
def health_check():
    """Liveness probe — used by load balancers / monitoring."""
    return {"status": "ok"}


@app.post("/contact", response_model=ContactResponse, tags=["Contact"])
async def submit_contact(payload: ContactRequest, request: Request):
    """
    Receive a contact-form submission.

    1. Validates input via Pydantic (400 on bad data).
    2. Attempts to send a notification email if SMTP env vars are set.
       If email sending fails the endpoint still returns 200 so the
       visitor is never shown a false error.
    3. Returns a success message.
    """
    logger.info("Contact submission | name=%s email=%s", payload.name, payload.email)

    # Optional email notification
    if os.getenv("SMTP_HOST"):
        try:
            _send_notification_email(payload)
            logger.info("Notification email sent to %s", os.getenv("RECIPIENT_EMAIL"))
        except Exception as exc:
            # Log but do NOT surface SMTP errors to the visitor
            logger.error("Email send failed: %s", exc)

    return ContactResponse(
        success=True,
        message="Thanks for reaching out! We'll get back to you within 24 hours.",
    )


# ---------------------------------------------------------------------------
# Email helper
# ---------------------------------------------------------------------------

def _send_notification_email(payload: ContactRequest) -> None:
    smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER", "")
    smtp_password = os.getenv("SMTP_PASSWORD", "")
    from_email = os.getenv("SMTP_FROM_EMAIL", smtp_user)
    to_email = os.getenv("RECIPIENT_EMAIL", "sunovasolutions@gmail.com")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"[Sunova] New enquiry from {payload.name}"
    msg["From"] = from_email
    msg["To"] = to_email
    msg["Reply-To"] = payload.email

    plain = (
        f"New contact-form submission\n"
        f"===========================\n\n"
        f"Name:    {payload.name}\n"
        f"Email:   {payload.email}\n\n"
        f"Message:\n{payload.message}\n"
    )

    html = f"""
<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:auto;padding:24px">
  <h2 style="color:#4f46e5;border-bottom:2px solid #e5e7eb;padding-bottom:8px">
    New enquiry — Sunova website
  </h2>
  <table style="width:100%;border-collapse:collapse;margin-top:16px">
    <tr>
      <td style="padding:8px 12px;font-weight:600;width:90px">Name</td>
      <td style="padding:8px 12px">{payload.name}</td>
    </tr>
    <tr style="background:#f9fafb">
      <td style="padding:8px 12px;font-weight:600">Email</td>
      <td style="padding:8px 12px">
        <a href="mailto:{payload.email}" style="color:#4f46e5">{payload.email}</a>
      </td>
    </tr>
  </table>
  <p style="margin-top:20px;font-weight:600">Message</p>
  <div style="background:#f3f4f6;border-radius:8px;padding:16px;white-space:pre-wrap">{payload.message}</div>
  <p style="margin-top:24px;color:#9ca3af;font-size:12px">
    Sent via the Sunova website contact form.
  </p>
</body>
</html>
"""

    msg.attach(MIMEText(plain, "plain"))
    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP(smtp_host, smtp_port, timeout=10) as server:
        server.ehlo()
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())
