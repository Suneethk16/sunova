function Contact({ onBookingClick }) {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 scroll-animate">Get in Touch</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 scroll-animate">
            <h3 className="text-xl font-semibold text-gray-900">Email</h3>
            <p className="mt-2 text-indigo-600 font-medium">sunovasolutions@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 scroll-animate">
            <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
            <p className="mt-2 text-indigo-600 font-medium">+49 17631698921</p>
          </div>
        </div>
        <div className="mt-8 text-center scroll-animate">
          <button 
            onClick={onBookingClick}
            className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Or Book an Appointment Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact