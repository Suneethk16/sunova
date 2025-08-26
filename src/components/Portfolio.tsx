import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlareCard } from './ui/glare-card';
import { ExternalLink, Eye } from 'lucide-react';

export default function Portfolio() {
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});
  const projects = [
    {
      title: 'TechCorp Dashboard',
      category: 'Web Design',
      image: '/project_aerothon.jpg',
      description: 'Modern SaaS dashboard with conversion-optimized design.',
      tags: ['React', 'Dashboard', 'SaaS']
    },
    {
      title: 'InnovateLab Mobile App',
      category: 'Mobile Design',
      image: '/project_edutrack.jpg',
      description: 'Intuitive mobile experience for innovative product discovery.',
      tags: ['iOS', 'Android', 'UX/UI']
    },
    {
      title: 'FutureFlow Branding',
      category: 'Brand Identity',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&h=900&q=80',
      description: 'Complete brand system for a forward-thinking fintech company.',
      tags: ['Logo', 'Branding', 'Fintech']
    },
    {
      title: 'DataViz Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=1200&h=900&q=80',
      description: 'Interactive data visualization platform built with Framer.',
      tags: ['Framer', 'Data', 'Interactive']
    },
    {
      title: 'CloudSync Landing',
      category: 'Landing Page',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=900&q=80',
      description: 'High-converting landing page for cloud storage service.',
      tags: ['Landing Page', 'Conversion', 'Cloud']
    },
    {
      title: 'SmartScale Packaging',
      category: 'Product Design',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&h=900&q=80',
      description: 'Eye-catching packaging design for smart scale product.',
      tags: ['Packaging', 'Product', 'IoT']
    }
  ];

  return (
    <section id="work" className="py-20">
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
              Our Work
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Explore our portfolio of successful design projects that have helped brands achieve their goals.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <GlareCard className="relative overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    {!imageLoaded[index] && (
                      <div className="absolute inset-0 bg-white/10 animate-pulse" />
                    )}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      onLoad={() => setImageLoaded(prev => ({ ...prev, [index]: true }))}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-cyan-600 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    
                  </div>
                </GlareCard>
              </motion.div>
            ))}
          </div>

          {/* CTA Section - Removed */}
        </div>
      </div>
    </section>
  );
}
