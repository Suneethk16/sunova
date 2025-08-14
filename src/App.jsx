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
  )
}

export default App