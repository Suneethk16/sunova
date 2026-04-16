import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle, Sparkles } from 'lucide-react';

const reasons = [
  'End-to-end delivery — from idea to production',
  'Senior engineers with startup & enterprise experience',
  'Agile process with transparent communication',
  'Scalable architecture built for long-term growth',
  'On-time delivery with quality assurance',
  'Post-launch support and iterative improvement',
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            About Sunova
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Your Trusted Technology Partner
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            We're a team of passionate engineers and designers helping businesses build exceptional digital experiences that matter.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — intro + why choose us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Sunova was founded with one goal: to bridge the gap between great ideas and great software. We combine deep technical expertise with a business-first mindset to deliver solutions that actually move the needle.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Whether you're a startup launching your MVP or an established company modernising your stack, we bring the skills, speed, and strategic thinking to make it happen.
            </p>

            <h3 className="text-xl font-bold text-white mb-5">Why clients choose us</h3>
            <ul className="space-y-3">
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 text-white/70"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — mission & vision cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Mission */}
            <div className="group bg-white/5 border border-white/10 hover:border-blue-500/40 rounded-2xl p-8 transition-all duration-300 hover:bg-white/8">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-white/60 leading-relaxed">
                To empower businesses of all sizes with technology that is reliable, beautiful, and built to scale — making world-class software accessible to every ambitious team.
              </p>
            </div>

            {/* Vision */}
            <div className="group bg-white/5 border border-white/10 hover:border-purple-500/40 rounded-2xl p-8 transition-all duration-300 hover:bg-white/8">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-white/60 leading-relaxed">
                A world where every great idea gets the technical foundation it deserves — and where partnering with a development studio feels like having a brilliant in-house team that truly cares.
              </p>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {[
                { value: '50+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '4+', label: 'Years of Experience' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {value}
                  </p>
                  <p className="text-white/50 text-xs leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
