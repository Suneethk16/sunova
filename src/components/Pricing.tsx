import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
// import { Button } from './ui/button';

export default function Pricing() {
  const [planToggles, setPlanToggles] = useState<Record<number, boolean>>({
    0: false,
    1: false,
    2: false
  });

  const togglePlan = (planIndex: number) => {
    setPlanToggles(prev => ({
      ...prev,
      [planIndex]: !prev[planIndex]
    }));
  };

  const plans = [
    {
      name: 'Redesign',
      description: 'Transform your existing website with modern design',
      price: {
        oneTime: 399,
        yearly: 599
      },
      features: [
        'Complete website redesign',
        'Mobile-first responsive design',
        'SEO optimization',
        'Content migration',
        '3 rounds of revisions',
        'Launch support',
        '30 days of support'
      ],
      highlight: false,
      cta: 'Get Started',
      dev: false
    },
    {
      name: 'From Scratch Design',
      description: 'Create a stunning website from the ground up',
      price: {
        oneTime: 799,
        yearly: 1199
      },
      features: [
        'Custom website design',
        'Mobile-first responsive design',
        'SEO optimization',
        'Content creation',
        '5 rounds of revisions',
        'Launch support',
        '60 days of support',
        'Custom animations'
      ],
      highlight: true,
      cta: 'Get Started',
      dev: false
    },
    {
      name: 'Full Stack Site',
      description: 'Complete website with advanced functionality',
      price: {
        oneTime: 1299,
        yearly: 1899
      },
      features: [
        'Custom website design',
        'Advanced functionality',
        'Database integration',
        'User authentication',
        'Admin dashboard',
        'API development',
        'Unlimited revisions',
        '90 days of support',
        'Performance optimization'
      ],
      highlight: false,
      cta: 'Get Started',
      dev: true
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
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
              Choose Your Project Type
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              One-time pricing for your design and development needs. No subscriptions, just quality work.
            </p>
          </motion.div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${
                  plan.highlight ? 'lg:-mt-4 lg:mb-4' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-cyan-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 h-full relative text-white flex flex-col ${
                  plan.highlight 
                    ? 'border-cyan-300/30 hover:border-cyan-300/50' 
                    : 'border-white/15 hover:border-white/30'
                }`}>
                  {/* Toggle in Right Corner */}
                  <div className="absolute top-6 right-6">
                    <button
                      onClick={() => togglePlan(index)}
                      className={`relative inline-flex h-8 w-20 items-center rounded-full transition-colors duration-300 ${
                        planToggles[index] 
                          ? 'bg-gradient-to-r from-cyan-500 to-orange-500' 
                          : 'bg-slate-200'
                      }`}
                    >
                      <span
                        className={`z-10 inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
                          planToggles[index] ? 'translate-x-12' : 'translate-x-1'
                        }`}
                      />
                      <span
                        className={`absolute text-[11px] font-semibold pointer-events-none ${
                          planToggles[index]
                            ? 'left-2 text-white'
                            : 'right-2 text-slate-700'
                        }`}
                      >
                        {planToggles[index] ? 'Dev' : 'Design'}
                      </span>
                    </button>
                  </div>

                  {/* Plan Header */}
                  <div className="text-center mt-5 mb-8 pt-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                      {planToggles[index] && (
                        <span className="text-cyan-600 ml-2">+ Dev</span>
                      )}
                    </h3>
                    <p className="text-white/70 mb-6">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">
                        ${planToggles[index] ? plan.price.yearly : plan.price.oneTime}
                      </span>
                      {planToggles[index] && (
                        <span className="text-white/60 text-lg line-through ml-2">
                          ${plan.price.oneTime}
                        </span>
                      )}
                    </div>
                    <div className="text-white/70">one-time payment</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="mt-auto pt-2 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => {
                        window.dispatchEvent(new Event('open-cal'))
                      }}
                      className={`w-full sm:flex-1 inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-orange-600 hover:from-cyan-700 hover:to-orange-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl h-12 sm:h-14 px-5 sm:px-7 text-sm sm:text-base leading-none`}
                    >
                      Book a Call
                    </button>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 h-12 sm:h-14 px-5 sm:px-7 text-sm sm:text-base leading-none"
                    >
                      Connect on Twitter
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
