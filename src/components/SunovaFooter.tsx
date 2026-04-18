import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const navSections = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'How We Work', href: '#how-we-work' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'AI Solutions', href: '#services' },
      { label: 'Data Science', href: '#services' },
      { label: 'App Development', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'sunovasolutions@gmail.com', href: 'mailto:sunovasolutions@gmail.com', external: true },
      { label: 'WhatsApp', href: 'https://wa.me/message/sunova', external: true },
    ],
  },
];

const socials = [
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/Sunova229835' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:sunovasolutions@gmail.com' },
];

export default function SunovaFooter() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">Sunova</span>
              </div>
              <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
                We build reliable, scalable digital products that help businesses grow — from MVP to enterprise.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Nav sections */}
          {navSections.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
            >
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                {section.heading}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-1 text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                      {link.external && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm">
            © {new Date().getFullYear()} Sunova. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/35 hover:text-white/60 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
