import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  DollarSign, 
  Lightbulb, 
  Lock, 
  Users,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';

export default function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: 'Conversion-Focused Design',
      description: 'Every design decision is optimized to drive conversions and improve your bottom line.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      accent: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Turnaround',
      description: 'Get your designs back in 48 hours or less, keeping your projects moving forward.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      accent: 'text-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Affordable Excellence',
      description: 'Premium design quality at a fraction of the cost of hiring full-time designers.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      accent: 'text-green-600'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'We don\'t just make things look good - we solve your design challenges strategically.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      accent: 'text-orange-600'
    },
    {
      icon: Lock,
      title: 'Private Design Portal',
      description: 'Secure, organized workspace to manage all your design assets and requests.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      accent: 'text-indigo-600'
    },
    {
      icon: Users,
      title: 'Access to Senior Designers',
      description: 'Work directly with experienced designers who understand your industry and goals.',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'from-rose-50 to-pink-50',
      accent: 'text-rose-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const benefitVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 mb-4"
            >
              <Sparkles className="w-3 h-3 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium text-xs">Why Choose Us</span>
            </motion.div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Sunova?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our subscription model gives you access to professional design services without the overhead of a full-time team.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={benefitVariants}
                className="group relative"
              >
                <GlowCard customSize className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/15 hover:border-white/30 h-full group-hover:-translate-y-2 overflow-hidden text-white">
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className={`text-lg font-bold text-white mb-3 transition-colors duration-300`}>
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                  
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA removed per request */}
        </div>
      </div>
    </section>
  );
}
