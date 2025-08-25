import React, { useState } from 'react';
import { GlowCard } from '@/components/ui/spotlight-card';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Code, 
  Instagram, 
  Palette, 
  Presentation, 
  Package, 
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function ServicesShowcase() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 'website',
      icon: Globe,
      title: 'Website Design',
      description: 'Modern, conversion-focused websites that drive results.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      examples: 'View Examples'
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile App Design',
      description: 'Intuitive mobile experiences that users love.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      examples: 'View Examples'
    },
    {
      id: 'framer',
      icon: Code,
      title: 'Framer & Webflow Dev',
      description: 'Custom development for no-code platforms.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      examples: 'View Examples'
    },
    {
      id: 'social',
      icon: Instagram,
      title: 'Social Media Graphics',
      description: 'Engaging visuals that boost your social presence.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      examples: 'View Examples'
    },
    {
      id: 'branding',
      icon: Palette,
      title: 'Branding',
      description: 'Complete brand identity systems that stand out.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      examples: 'View Examples'
    },
    {
      id: 'pitch',
      icon: Presentation,
      title: 'Pitch Decks',
      description: 'Compelling presentations that win investors.',
      color: 'from-teal-500 to-blue-500',
      bgColor: 'from-teal-50 to-blue-50',
      examples: 'View Examples'
    },
    {
      id: 'packaging',
      icon: Package,
      title: 'Packaging',
      description: 'Eye-catching packaging that sells products.',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
      examples: 'View Examples'
    },
    {
      id: 'logos',
      icon: Sparkles,
      title: 'Logos & Icons',
      description: 'Memorable logos and icon systems.',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'from-rose-50 to-pink-50',
      examples: 'View Examples'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const serviceVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
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
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
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
              Our Design Services
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              From websites to branding, we handle all your design needs with professional quality and fast turnaround.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={serviceVariants}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative"
              >
                <GlowCard customSize className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/15 hover:border-white/30 h-full cursor-pointer group-hover:-translate-y-2 overflow-hidden text-white`}>
                  <div className={`absolute inset-0 pointer-events-none`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA - Removed */}
        </div>
      </div>
    </section>
  );
}
