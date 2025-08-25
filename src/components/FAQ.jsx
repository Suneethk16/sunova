import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, User, Phone, FileText } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Who's behind Sunova?",
      answer: "Sunova is led by a passionate team of experienced designers and developers. Together, we built Sunova to deliver innovative design solutions tailored to each client's unique needs. Our vision is to help brands unlock their full potential through strategic, impactful, and visually stunning designs, while fostering long-lasting relationships built on trust and creativity."
    },
    {
      question: "How does the delivery process work?",
      answer: "Once you submit a design request through our platform, our team begins by reviewing your brief to fully understand your needs. Depending on the complexity of the project, we assign the most suitable designer to bring your vision to life. You'll receive an initial draft within 48 hours, and from there, we work closely with you, incorporating your feedback until you're satisfied with the final result. Our process is designed to be seamless, efficient, and transparent to ensure high-quality designs every time."
    },
    {
      question: "Is there a limit to how many design requests I can have?",
      answer: "No, there's no limit to the number of design requests you can submit. However, we work on one request at a time, ensuring each project receives our full attention and quality. Once a design is completed and approved, we move on to the next one in your queue. This allows us to maintain the highest standards while keeping the workflow efficient."
    },
    {
      question: "How fast will I receive my designs?",
      answer: "For most requests, you can expect an initial draft within 48 hours. The turnaround time may vary depending on the complexity of the project. Larger or more detailed projects may take a bit longer, but we always prioritize clear communication and timely updates to keep you informed of progress."
    },
    {
      question: "What if I don't like the design?",
      answer: "Your satisfaction is our priority. If you're not happy with the initial design, you can request revisions, and we'll make the necessary adjustments based on your feedback. We work collaboratively with you, refining the design until it aligns with your vision and meets your expectations. Our process includes multiple rounds of revisions to ensure you're completely satisfied with the final outcome."
    },
    {
      question: "Do you make Shopify websites?",
      answer: "Unfortunately, we don't develop Shopify websites, but we can still help you with designing the UI for your Shopify website :)"
    },
    {
      question: "What does it mean to pause a subscription?",
      answer: "You can pause your subscription at any time. Pausing allows you to temporarily stop the service without losing your spot in the queue. While your subscription is paused, you won't be billed, and once you're ready to continue, you can easily resume where you left off. This flexibility helps you manage your design needs without unnecessary costs when there are fewer projects."
    },
    {
      question: "Why wouldn't I just hire a full-time designer?",
      answer: "Hiring a full-time designer can be costly, especially when you consider salaries, benefits, and overhead. With our service, you get access to a team of experienced designers at a fraction of the cost. You also have the flexibility to scale up or down based on your needs, without the commitment of full-time employment. Plus, you benefit from a broader range of expertise since each project is handled by a specialist, ensuring high-quality, diverse design solutions."
    },
    {
      question: "Can I get refund?",
      answer: "Although we are unable to provide refunds as we allocate dedicated time and resources to each client, we value flexibility. You have the option to pause your service at any time and resume it later, ensuring that you can fully benefit from our collaboration."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            We Get It—Curiosity Leads to Success! Got questions? That's a great sign. Here are some answers to help you get started.
          </motion.p>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 mr-3 text-blue-600" />
            Quick Answers
          </h3>
          
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/15 shadow-sm hover:shadow-md transition-all duration-300 text-white"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <span className="font-medium text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-white/60 transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-white/70 mb-3 leading-relaxed">
                        {faq.answer}
                      </p>
                      <div className="flex items-center text-sm text-blue-300 font-medium">
                        <User className="w-4 h-4 mr-2" />
                        {faq.author}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA Section */}
        <motion.div id="contact-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-12 text-white max-w-4xl mx-auto border border-white/15">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
              <span className="relative mr-2 inline-flex items-center justify-center">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="text-sm text-white/80 tracking-wide">Available for New Projects</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Our team is here to help you choose the right plan for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.dispatchEvent(new Event('open-cal'))}
                className="bg-gradient-to-r from-cyan-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Book a Call</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('pricing');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <FileText className="w-5 h-5 inline mr-2" />
                View All Plans
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
