import React from 'react';
import { motion } from 'framer-motion';
import { FlipWords } from './ui/flip-words';
import { ArrowRight, Clock, Infinity as InfinityIcon, Shield } from 'lucide-react';

export default function SunovaHero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 75% 75%, #f97316 0%, transparent 50%)`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 lg:p-8 bg-gradient-to-b from-black/40 to-transparent">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-orange-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold text-white">
            Sunova
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center space-x-8"
        >
          <a href="#work" className="text-white/70 hover:text-white transition-colors">Our Work</a>
          <a href="#compare" className="text-white/70 hover:text-white transition-colors">Compare</a>
          <a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
          <a href="#contact-cta" className="text-white/70 hover:text-white transition-colors">Contact</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="transition-colors"
        >
          <button
            onClick={() => {
              const el = document.getElementById('pricing');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-cyan-600 to-orange-600 text-white px-5 py-2 rounded-full font-semibold text-sm lg:text-base hover:from-cyan-700 hover:to-orange-700 shadow-lg"
          >
            Pricing
          </button>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 text-white"
          >
            <span className="relative flex items-center font-medium">
              <span className="relative mr-2 inline-flex items-center justify-center">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Available for New Projects
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Development & Design Team for{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-orange-600 bg-clip-text text-transparent">
              <FlipWords 
                words={["Startups", "Enterprises", "Innovators"]} 
                duration={3000}
                className="text-cyan-600"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl lg:text-2xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Beyond design: turning challenges into opportunities for your brand
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button className="bg-gradient-to-r from-cyan-600 to-orange-600 text-white px-10 py-5 rounded-full font-semibold text-xl hover:from-cyan-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3"
            onClick={() => {
              const el = document.getElementById('pricing');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            >
              <span>View Plans & Pricing</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <Clock className="w-6 h-6 text-cyan-600" />
              <span className="font-semibold text-white">48 Hours Delivery</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <InfinityIcon className="w-6 h-6 text-orange-600" />
              <span className="font-semibold text-white">Unlimited Requests</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <Shield className="w-6 h-6 text-green-600" />
              <span className="font-semibold text-white">Private Design Portal</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-orange-400/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-cyan-400/20 rounded-full blur-xl"
      />
    </section>
  );
}
