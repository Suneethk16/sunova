import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star } from 'lucide-react';

export default function Comparison() {
  const comparisonData = [
    {
      feature: 'Project Type',
      sunova: 'One-time Design & Dev',
      fullTime: 'Ongoing Work',
      agencies: 'Project-based'
    },
    {
      feature: 'Cost',
      sunova: '$399 - $1,299',
      fullTime: '$60K - $120K/year',
      agencies: '$15K - $50K/project'
    },
    {
      feature: 'Turnaround Time',
      sunova: '2-4 weeks',
      fullTime: 'Ongoing',
      agencies: '8-12 weeks'
    },
    {
      feature: 'Revisions',
      sunova: '3-5 rounds included',
      fullTime: 'Unlimited',
      agencies: '2-3 rounds'
    },
    {
      feature: 'Support',
      sunova: '30-90 days',
      fullTime: 'Ongoing',
      agencies: 'Limited'
    },
    {
      feature: 'Scalability',
      sunova: 'Project-based',
      fullTime: 'Fixed capacity',
      agencies: 'Team-dependent'
    },
    {
      feature: 'Expertise',
      sunova: 'Design + Development',
      fullTime: 'Single skill set',
      agencies: 'Design only'
    },
    {
      feature: 'Flexibility',
      sunova: 'High',
      fullTime: 'Low',
      agencies: 'Medium'
    }
  ];

  return (
    <section id="compare" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
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
              Why Choose Sunova?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              See how our one-time pricing compares to hiring full-time designers or working with agencies.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/15 overflow-hidden text-white">
            {/* Desktop Table */}
            <div className="hidden md:block">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-white/5 border-b border-white/10">
                <div className="p-6 font-semibold text-white">Features</div>
                <div className="p-6 text-center">
                  <div className="bg-gradient-to-r from-cyan-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Sunova
                  </div>
                </div>
                <div className="p-6 text-center font-semibold text-white">Full-Time Designer</div>
                <div className="p-6 text-center font-semibold text-white">Other Agencies</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-white/10">
                {comparisonData.map((row, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid grid-cols-4 hover:bg-white/5 transition-colors duration-200"
                  >
                    <div className="p-6 font-medium text-white/80 border-r border-white/10">
                      {row.feature}
                    </div>
                    <div className="p-6 text-center text-white font-medium">
                      {row.sunova}
                    </div>
                    <div className="p-6 text-center text-white/70">
                      {row.fullTime}
                    </div>
                    <div className="p-6 text-center text-white/70">
                      {row.agencies}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Table with Horizontal Scroll */}
            <div className="md:hidden">
              <div className="overflow-x-auto">
                <div className="min-w-[600px]">
                  {/* Table Header */}
                  <div className="grid grid-cols-4 bg-white/5 border-b border-white/10">
                    <div className="p-4 font-semibold text-white text-sm">Features</div>
                    <div className="p-4 text-center">
                      <div className="bg-gradient-to-r from-cyan-600 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-medium inline-flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Sunova
                      </div>
                    </div>
                    <div className="p-4 text-center font-semibold text-white text-sm">Full-Time Designer</div>
                    <div className="p-4 text-center font-semibold text-white text-sm">Other Agencies</div>
                  </div>

                  {/* Table Body */}
                  <div className="divide-y divide-white/10">
                    {comparisonData.map((row, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="grid grid-cols-4 hover:bg-white/5 transition-colors duration-200"
                      >
                        <div className="p-4 font-medium text-white/80 border-r border-white/10 text-sm">
                          {row.feature}
                        </div>
                        <div className="p-4 text-center text-white font-medium text-sm">
                          {row.sunova}
                        </div>
                        <div className="p-4 text-center text-white/70 text-sm">
                          {row.fullTime}
                        </div>
                        <div className="p-4 text-center text-white/70 text-sm">
                          {row.agencies}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA - Removed */}
        </div>
      </div>
    </section>
  );
}
