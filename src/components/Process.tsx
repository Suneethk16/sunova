import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, HeartHandshake } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Understand Your Requirements',
    description:
      'We start with a deep-dive discovery session — listening carefully to your goals, challenges, and vision. No assumptions, just honest conversation to make sure we build exactly what you need.',
    color: 'from-blue-500 to-cyan-500',
    highlight: 'text-blue-400',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Planning & Design',
    description:
      'We map out architecture, user flows, and wireframes. Every decision is deliberate — we plan for scalability and maintainability before a single line of code is written.',
    color: 'from-purple-500 to-pink-500',
    highlight: 'text-purple-400',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Development & Implementation',
    description:
      'Our engineers build with clean, tested, production-ready code. You get regular updates, live previews, and can provide feedback at every sprint — full transparency throughout.',
    color: 'from-emerald-500 to-teal-500',
    highlight: 'text-emerald-400',
  },
  {
    number: '04',
    icon: HeartHandshake,
    title: 'Delivery & Ongoing Support',
    description:
      "We launch your product smoothly and stand behind our work. Post-launch monitoring, bug fixes, and iterative improvements \u2014 we're your long-term technical partner, not a one-and-done agency.",
    color: 'from-orange-500 to-red-500',
    highlight: 'text-orange-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/**
 * Scroll to the contact section.
 *
 * Why window.scrollTo instead of scrollIntoView:
 *   scrollIntoView scrolls the nearest scrollable ancestor; on this page the
 *   HeroGeometric fixed-position background shifts the stacking context so that
 *   call can silently do nothing. window.scrollTo always targets the actual
 *   window scroll position, which is what we want.
 */
function scrollToContact() {
  const el = document.getElementById('contact');
  if (!el) return;

  const rect = el.getBoundingClientRect();
  // window.scrollY is the current vertical scroll position of the document.
  // rect.top is the distance from the viewport top to the element top.
  const targetY = window.scrollY + rect.top - 24; // 24 px breathing room

  window.scrollTo({ top: targetY, behavior: 'smooth' });
}

export default function Process() {
  return (
    <section id="how-we-work" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-blue-600/[0.08] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/[0.08] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
            How We{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Work With You
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            A proven four-step process that turns your idea into a polished product — with you
            involved at every stage.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="group relative bg-white/5 border border-white/10 hover:border-white/25 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-1"
            >
              {/* Large decorative number */}
              <span className="absolute top-6 right-8 text-6xl font-black text-white/[0.05] select-none">
                {step.number}
              </span>

              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Step label */}
              <p className={`text-sm font-semibold ${step.highlight} mb-2 uppercase tracking-widest`}>
                Step {step.number}
              </p>

              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">{step.description}</p>

              {/* Desktop connector line */}
              {index % 2 === 0 && (
                <div className="hidden md:block absolute top-[4.5rem] -right-4 w-8 h-0.5 bg-gradient-to-r from-white/15 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600/15 to-purple-600/15 border border-white/10 rounded-2xl px-8 py-10"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Ready to get started?</h3>
          <p className="text-white/60 mb-7 max-w-xl mx-auto">
            It all begins with a free 30-minute consultation. No pressure, no commitment — just an
            honest conversation about what you're building.
          </p>

          {/*
           * ── FIXED BUTTON ──────────────────────────────────────────────────
           * Uses window.scrollTo (not scrollIntoView) so the scroll always
           * targets the true window position regardless of stacking context.
           * type="button" prevents accidental form submission if ever wrapped.
           */}
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600
                       text-white px-8 py-3.5 rounded-full font-semibold
                       hover:from-blue-700 hover:to-purple-700
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent
                       active:scale-95 transition-all duration-200
                       shadow-lg hover:shadow-purple-500/25 cursor-pointer"
          >
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
