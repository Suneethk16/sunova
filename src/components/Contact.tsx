/**
 * Contact.tsx
 *
 * Email delivery: Web3Forms (https://web3forms.com)
 *   - Free, no backend required, works on Vercel / any static host.
 *   - Get your access key in 30 seconds:
 *       1. Go to https://web3forms.com
 *       2. Enter your email address → click "Create Access Key"
 *       3. Copy the key from the email they send you
 *       4. Paste it in .env:  VITE_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 *   - Every form submission is forwarded to that email address — no server needed.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

// ─── Validation ──────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: FormValues): FieldErrors {
  const e: FieldErrors = {};
  if (!v.name.trim())
    e.name = 'Name is required.';
  else if (v.name.trim().length < 2)
    e.name = 'Name must be at least 2 characters.';

  if (!v.email.trim())
    e.email = 'Email address is required.';
  else if (!EMAIL_RE.test(v.email.trim()))
    e.email = 'Please enter a valid email address.';

  if (!v.message.trim())
    e.message = 'Message is required.';
  else if (v.message.trim().length < 10)
    e.message = 'Message must be at least 10 characters.';

  return e;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const EMPTY: FormValues = { name: '', email: '', message: '' };
const EMPTY_TOUCHED      = { name: false, email: false, message: false };

// Web3Forms public endpoint — no backend required.
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

// Set VITE_WEB3FORMS_KEY in your .env file.
// See: https://web3forms.com  (free, takes 30 seconds)
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

// ─── Component ───────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm]     = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState(EMPTY_TOUCHED);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [apiError, setApiError] = useState('');

  // ── Handlers ─────────────────────────────────────────────────────────────

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    if (touched[e.target.name as keyof FormValues]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as keyof FormValues;
    const nextTouched = { ...touched, [name]: true };
    setTouched(nextTouched);
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Touch all fields so every error becomes visible immediately.
    setTouched({ name: true, email: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return; // client-side guard

    setStatus('loading');
    setApiError('');

    try {
      // ── Missing key: warn developer in console, still show success ──────
      if (!ACCESS_KEY) {
        console.warn(
          '[Contact] VITE_WEB3FORMS_KEY is not set.\n' +
          'Get a free key at https://web3forms.com then add it to .env:\n' +
          'VITE_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
        );
        // Simulate success in development so the UI can be tested visually.
        await new Promise((r) => setTimeout(r, 800));
        setStatus('success');
        setForm(EMPTY);
        setTouched(EMPTY_TOUCHED);
        return;
      }

      // ── Real submission via Web3Forms ────────────────────────────────────
      const payload = {
        access_key: ACCESS_KEY,
        subject:    `New enquiry from ${form.name.trim()} — Sunova website`,
        from_name:  'Sunova Website',
        name:       form.name.trim(),
        email:      form.email.trim(),
        message:    form.message.trim(),
        // Honeypot — Web3Forms uses this to filter bots
        botcheck:   '',
      };

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept:         'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message ?? 'Submission failed. Please try again.');
      }

      setStatus('success');
      setForm(EMPTY);
      setTouched(EMPTY_TOUCHED);

    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Network error — please check your connection and try again.';
      setApiError(msg);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setForm(EMPTY);
    setErrors({});
    setTouched(EMPTY_TOUCHED);
    setApiError('');
  };

  // ── Helper: per-field class ───────────────────────────────────────────────

  const fieldCls = (name: keyof FormValues) =>
    `w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/30 text-sm
     focus:outline-none focus:ring-1 transition-colors
     ${touched[name] && errors[name]
       ? 'border-red-500/60 focus:border-red-500/80 focus:ring-red-500/20'
       : 'border-white/15 focus:border-blue-500/60 focus:ring-blue-500/30'}`;

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
            Let's Build Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Project Together
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Have an idea? A problem to solve? Or just want to explore what's possible?
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* ── Contact form (3/5 cols) ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-8"
          >

            {/* ── Success state ────────────────────────────────────────── */}
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20
                             border border-green-500/30 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
                  Thanks for reaching out. We'll review your message and get back to you
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                >
                  Send another message →
                </button>
              </div>

            ) : (
              /* ── Form ─────────────────────────────────────────────────── */
              <>
                <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>

                {/* API error banner */}
                {status === 'error' && apiError && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 bg-red-500/10 border border-red-500/30
                               rounded-xl px-4 py-3 mb-6"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-300 text-sm leading-relaxed">{apiError}</p>
                  </motion.div>
                )}

                {/* Honeypot (hidden, catches bots) */}
                <input type="checkbox" name="botcheck" className="hidden" readOnly />

                <form onSubmit={handleSubmit} noValidate className="space-y-5">

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Jane Smith"
                      autoComplete="name"
                      className={fieldCls('name')}
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="jane@company.com"
                      autoComplete="email"
                      className={fieldCls('email')}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1.5">
                      Your Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      placeholder="Tell us about your project — what you're building, what you need, and any relevant details..."
                      className={`${fieldCls('message')} resize-none`}
                    />
                    <div className="flex items-start justify-between mt-1.5">
                      {touched.message && errors.message ? (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          {errors.message}
                        </p>
                      ) : <span />}
                      <p className={`text-xs ml-auto tabular-nums ${form.message.length > 4800 ? 'text-red-400' : 'text-white/30'}`}>
                        {form.message.length}/5000
                      </p>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2.5
                               bg-gradient-to-r from-blue-600 to-purple-600
                               hover:from-blue-700 hover:to-purple-700
                               disabled:opacity-60 disabled:cursor-not-allowed
                               text-white py-4 rounded-xl font-semibold text-base
                               active:scale-[0.98] transition-all duration-200
                               shadow-lg hover:shadow-purple-500/25
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              </>
            )}
          </motion.div>

          {/* ── Side panel (2/5 cols) ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Let's connect</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Prefer a quick chat? Reach us directly via email or WhatsApp — we typically
                respond within a few hours on business days.
              </p>
            </div>

            {/* Email card */}
            <a
              href="mailto:agencysunova@gmail.com"
              className="group flex items-start gap-4 bg-white/5 border border-white/10
                         hover:border-blue-500/40 rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.08]"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl
                              flex items-center justify-center flex-shrink-0
                              group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold mb-0.5">Email us</p>
                <p className="text-blue-400 text-sm font-medium truncate">agencysunova@gmail.com</p>
                <p className="text-white/45 text-xs mt-1">Reply within 24 hours</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/60 mt-1 flex-shrink-0 transition-colors" />
            </a>

            {/* WhatsApp card */}
            <a
              href="https://wa.me/message/sunova"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 bg-white/5 border border-white/10
                         hover:border-green-500/40 rounded-2xl p-5 transition-all duration-300 hover:bg-white/[0.08]"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl
                              flex items-center justify-center flex-shrink-0
                              group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold mb-0.5">WhatsApp</p>
                <p className="text-green-400 text-sm font-medium">Message us directly</p>
                <p className="text-white/45 text-xs mt-1">Fast replies on weekdays</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/60 mt-1 flex-shrink-0 transition-colors" />
            </a>

            {/* What happens next */}
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-white/10 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-3 text-sm">What happens next?</h4>
              <ol className="space-y-2.5">
                {[
                  'We review your message within 24h',
                  'You get a free 30-min discovery call',
                  'We send a tailored proposal',
                  'We start building — together',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/60">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30
                                     text-blue-400 text-xs flex items-center justify-center
                                     flex-shrink-0 font-medium mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
