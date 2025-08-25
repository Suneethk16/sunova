import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@sunova.design',
      description: 'We\'ll get back to you within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Available for in-person meetings'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-12 shadow-xl border border-white/15 text-white"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Thank You!
              </h2>
              <p className="text-lg text-white/70 mb-6">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-cyan-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-700 hover:to-orange-700 transition-all duration-300"
              >
                Send Another Message
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20">
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
              Let's Start Your Project
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Ready to transform your brand with professional design? Get in touch and let's discuss how we can help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/15 text-white"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-white/80 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-month">1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-white/20 bg-white/10 text-white placeholder-white/50 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                <p className="text-lg text-white/70 mb-8">
                  Ready to start your design project? We'd love to hear from you. Fill out the form or use one of the contact methods below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-white/80 font-medium mb-1">{info.details}</p>
                      <p className="text-white/70 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-cyan-50 to-orange-50 rounded-2xl p-6 border border-cyan-200/50"
              >
                <h4 className="text-lg font-semibold text-white mb-3">Why choose Sunova?</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>48-hour turnaround guarantee</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Unlimited revisions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Dedicated design team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>No long-term contracts</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
