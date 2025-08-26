import React from 'react';
import Footer from './ui/animated-footer';

export default function SunovaFooter() {
  const leftLinks = [
    { href: "#work", label: "Our Work" },
    { href: "#compare", label: "Compare" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact-cta", label: "Contact" }
  ];

  const rightLinks = [
    { href: "https://x.com/SunovaDev", label: "Twitter" },
    { href: "mailto:hello@sunova.design", label: "Email" }
  ];

  return (
    <Footer
      leftLinks={leftLinks}
      rightLinks={rightLinks}
      copyrightText="© 2025 Sunova. All rights reserved."
      barCount={23}
    />
  );
}
