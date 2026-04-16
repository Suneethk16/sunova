import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Cpu,
  BarChart3,
  Smartphone,
  ShoppingCart,
  Shield,
  Layers,
  Cloud,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Full-stack web applications built with modern frameworks. From landing pages to complex SaaS platforms — fast, responsive, and SEO-optimised.',
    color: 'from-blue-500 to-cyan-500',
    tags: ['React', 'Next.js', 'Node.js'],
  },
  {
    icon: Cpu,
    title: 'AI Solutions',
    description:
      'Intelligent systems powered by the latest LLMs and ML models. Chatbots, recommendation engines, document processing, and custom AI integrations.',
    color: 'from-purple-500 to-pink-500',
    tags: ['LLM Integration', 'NLP', 'Automation'],
  },
  {
    icon: BarChart3,
    title: 'Data Science',
    description:
      'Turn raw data into business insights. We build pipelines, dashboards, predictive models, and analytics solutions that help you make smarter decisions.',
    color: 'from-emerald-500 to-teal-500',
    tags: ['Python', 'ML Models', 'Dashboards'],
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description:
      'Cross-platform mobile apps for iOS and Android. Native performance, beautiful UI, and seamless backend integration for the best user experience.',
    color: 'from-orange-500 to-red-500',
    tags: ['React Native', 'Flutter', 'iOS/Android'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description:
      'Custom online stores and marketplaces with secure payment gateways, inventory management, and conversion-optimised checkout flows.',
    color: 'from-amber-500 to-orange-500',
    tags: ['Shopify', 'Custom Build', 'Payments'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Scalable cloud infrastructure, CI/CD pipelines, Docker, Kubernetes, and automated deployments that keep your product always-on and performant.',
    color: 'from-sky-500 to-blue-600',
    tags: ['AWS', 'GCP', 'Docker', 'CI/CD'],
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description:
      'Penetration testing, security audits, GDPR compliance, and secure architecture reviews to protect your users and your business.',
    color: 'from-rose-500 to-pink-500',
    tags: ['Pen Testing', 'GDPR', 'Auth'],
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description:
      'Research-driven design that converts. We craft user journeys, wireframes, and polished interfaces that look great and feel effortless to use.',
    color: 'from-indigo-500 to-purple-500',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ServicesShowcase() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            What We Build
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
            Services Built for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            We offer end-to-end digital services — from design and development to AI and data — helping businesses grow faster and smarter.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group bg-white/5 border border-white/10 hover:border-white/25 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/8 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-white/8 border border-white/10 rounded-full text-white/50 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-white/50 mb-5 text-sm">
            Don't see what you need? We're flexible — let's talk.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
