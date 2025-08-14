import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
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
      alert('Please sign in to book an appointment.')
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
      alert('Signed in successfully!')
    }
  }

  const handleSignOut = () => {
    setIsSignedIn(false)
    setShowBooking(false)
    alert('Signed out successfully!')
  }

  useEffect(() => {
    // Scroll animations
    const animateElements = document.querySelectorAll('.scroll-animate')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })
    
    animateElements.forEach(element => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="text-gray-800">
      <Header 
        isSignedIn={isSignedIn} 
        onSignIn={() => setShowAuthModal(true)}
        onSignOut={handleSignOut}
      />
      
      <Hero onBookingClick={handleBookingClick} />
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