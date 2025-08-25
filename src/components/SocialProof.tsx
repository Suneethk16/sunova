import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, DollarSign, Star } from 'lucide-react';

export default function SocialProof() {
  const stats = [
    {
      icon: Users,
      value: '95+',
      label: 'Brands Served',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Clock,
      value: '8+',
      label: 'Years of Experience',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: DollarSign,
      value: '$100K+',
      label: 'Saved for Brands',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Client Rating',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join hundreds of successful companies who've transformed their brand with our design subscription service.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-8 h-8 text-white/80`} />
                </div>
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <p className="text-center text-white/60 mb-8 font-medium">Trusted by companies like:</p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
              {/* Placeholder logos - you can replace with actual client logos */}
              {['TechCorp', 'InnovateLab', 'FutureFlow', 'DataViz', 'CloudSync', 'SmartScale'].map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-white/70 font-semibold text-lg"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
