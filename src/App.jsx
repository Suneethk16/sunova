
import React from 'react';
import SunovaHero from './components/SunovaHero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import ServicesShowcase from './components/ServicesShowcase';
import Portfolio from './components/Portfolio';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import SunovaFooter from './components/SunovaFooter';
import { HeroGeometric } from './components/ui/shape-landing-hero';
import CalModal from './components/CalModal';

function App() {
  return (
    <div className="App">
      {/* Global geometric animated background */}
      <HeroGeometric mode="background" />
      <CalModal />
      <SunovaHero />
      <Benefits />
      <Process />
      <ServicesShowcase />
      <Portfolio />
      <Comparison />
      <Pricing />
      <FAQ />
      <SunovaFooter />

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Booking from './components/Booking'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showBooking, setShowBooking] = useState(false)

  const handleBookingClick = () => {
    if (!isSignedIn) {
      setShowAuthModal(true)
    } else {
      setShowBooking(true)
      setTimeout(() => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  const handleSignIn = (email, password) => {
    if (email && password) {
      setIsSignedIn(true)
      setShowAuthModal(false)
    }
  }

  const handleSignOut = () => {
    setIsSignedIn(false)
    setShowBooking(false)
  }

  return (
    <div className="bg-dark-950 text-white">
      <Header 
        isSignedIn={isSignedIn} 
        onSignIn={() => setShowAuthModal(true)}
        onSignOut={handleSignOut}
      />
      
      <Hero onBookingClick={handleBookingClick} />
      <Projects />
      <About />
      <Contact onBookingClick={handleBookingClick} />
      
      {showBooking && <Booking />}
      
      <Footer />
      
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)}
          onSignIn={handleSignIn}
        />
      )}

    </div>
  );
}

export default App;