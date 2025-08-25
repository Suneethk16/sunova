import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does delivery work?",
      answer: "We deliver all designs within 48 hours of your request. You'll receive the final files in your preferred format (Figma, Sketch, or export formats) along with any source files. Our team ensures quality before delivery, but we're happy to make revisions if needed."
    },
    {
      question: "Can I pause my subscription?",
      answer: "Yes! You can pause your subscription at any time with no penalties. Simply let us know and we'll put your account on hold. You can resume whenever you're ready to continue. This flexibility is one of the key benefits of our subscription model."
    },
    {
      question: "What if I don't like the design?",
      answer: "We offer unlimited revisions until you're 100% satisfied. If you're still not happy after multiple rounds, we'll work with you to understand your vision better or assign a different designer from our team. Your satisfaction is our priority."
    },
    {
      question: "How many design requests can I make?",
      answer: "It depends on your plan. Our Starter plan allows up to 10 requests per month, while Professional and Enterprise plans include unlimited requests. Each request can include multiple design elements, so you get maximum value from your subscription."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Absolutely! All plans include ongoing support. Starter plans get email support, while Professional and Enterprise plans include priority support and dedicated account managers. We're here to help you succeed with your design projects."
    },
    {
      question: "Can I work with the same designer?",
      answer: "Yes! Professional and Enterprise plans include a dedicated designer who will learn your brand and preferences over time. This ensures consistency and faster turnaround as they become familiar with your style and requirements."
    },
    {
      question: "What design services are included?",
      answer: "We cover everything from web design and mobile apps to branding, social media graphics, and more. Our team specializes in conversion-focused design that drives results. Check our services page for a complete list of what we offer."
    },
    {
      question: "Is there a minimum contract length?",
      answer: "No! We believe in earning your business every month. There are no long-term contracts or hidden fees. You can cancel anytime, though most clients find our service so valuable they stay with us long-term."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Got questions? We've got answers. Here are the most common questions about our design subscription service.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-slate-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-600" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
