function Hero({ onBookingClick }) {
  return (
    <section id="hero" className="bg-indigo-600 text-white py-24 sm:py-32 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight animate-fadeInUp">
          Crafting Your Digital Future
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          Specialized consultations for all your software development needs. Let's build something great together.
        </p>
        <button 
          onClick={onBookingClick}
          className="mt-8 sm:mt-10 inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-fadeInUp" 
          style={{animationDelay: '0.4s'}}
        >
          Book Your Free Consultation
        </button>
      </div>
    </section>
  )
}

export default Hero