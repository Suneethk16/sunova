function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Us and Our Work</h2>
            <p className="mt-4 text-gray-600 text-lg">
              We are dedicated software developers with a passion for turning innovative ideas into robust, functional software. With a vast experience in Software development, We've worked on a wide range of projects, from small business applications to large-scale enterprise systems.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              Our approach is simple: We listen to your needs, understand your goals, and work with you to create a tailored solution that not only meets your requirements but exceeds your expectations. we believe in clear communication and transparent processes to ensure you're always in the loop.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center scroll-animate">
            <img 
              src="/logo.png" 
              alt="Sunova Logo" 
              className="rounded-full shadow-lg w-64 h-64 sm:w-80 sm:h-80 object-cover hover:shadow-xl transition-all duration-300 animate-pulse-slow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About