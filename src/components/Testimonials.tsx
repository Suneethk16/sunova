import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Co-Founder & CEO',
    company: 'NovaPay',
    avatar: 'SM',
    avatarColor: 'from-blue-500 to-cyan-500',
    rating: 5,
    text: "Sunova transformed our fintech platform from a rough prototype into a polished, production-ready product in under 10 weeks. Their engineers genuinely understood our business goals — not just the technical spec. The code quality, communication, and design sensibility were all outstanding. We raised our seed round with confidence because of the product they helped us build.",
  },
  {
    name: 'James Okonkwo',
    role: 'Head of Engineering',
    company: 'Clover Analytics',
    avatar: 'JO',
    avatarColor: 'from-purple-500 to-pink-500',
    rating: 5,
    text: "We brought Sunova in to build our AI-powered data pipeline and analytics dashboard. What impressed me most was how quickly they ramped up on our domain — healthcare data is complex — and still delivered clean, well-tested code on schedule. They flagged edge cases we hadn't even considered. Easily the best technical partner we've worked with.",
  },
  {
    name: 'Priya Nair',
    role: 'Founder',
    company: 'Shopscape',
    avatar: 'PN',
    avatarColor: 'from-emerald-500 to-teal-500',
    rating: 5,
    text: "I was a non-technical founder building my first e-commerce app and honestly felt overwhelmed. Sunova made the entire process easy — they explained every decision in plain English, kept me in the loop with weekly demos, and delivered a beautiful mobile app that our users love. Six months post-launch we're at 4.8 stars on the App Store. Couldn't recommend them more.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-80 h-80 bg-amber-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-amber-400" />
            Client Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Founders & Teams
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it — here's what our clients say about working with Sunova.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white/5 border border-white/10 hover:border-white/25 rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/8"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-white/15" />

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Text */}
              <p className="text-white/65 leading-relaxed text-sm flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${t.avatarColor} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <span className="text-white font-bold text-sm">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm"
        >
          {[
            '⭐ 5.0 average rating',
            '✓ 50+ successful projects',
            '✓ 100% on-time delivery',
            '✓ Clients across 10+ countries',
          ].map((item) => (
            <span key={item} className="font-medium">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
