import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Code, Globe, Rocket, CheckCircle, X } from 'lucide-react'

export default function Booking() {
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const [showForm, setShowForm] = useState(false)
  const [projectDetails, setProjectDetails] = useState('')
  
  const availableTimes = ['10:00 AM', '12:00 PM']

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Full-stack web applications and websites',
      icon: Code,
      color: 'from-neon-blue to-neon-purple'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Apps',
      description: 'iOS and Android mobile applications',
      icon: Globe,
      color: 'from-neon-purple to-neon-pink'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'AWS, Azure, and Google Cloud services',
      icon: Rocket,
      color: 'from-neon-pink to-neon-green'
    }
  ]



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

  }

  const getMinDate = () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  if (isSubmitted) {
    return (
      <motion.section
        id="booking"
        className="py-24 bg-dark-950 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto text-center px-4">
          <motion.div
            className="glass-card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CheckCircle className="w-20 h-20 text-neon-green mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h2>
            <p className="text-white/80 text-lg mb-6">
              Thank you for scheduling a consultation. We've sent a confirmation email with all the details.
            </p>
            <p className="text-white/60">
              Our team will reach out to you within 24 hours to discuss your project requirements.
            </p>
          </motion.div>
        </div>
      </motion.section>
    )
  }

  return (
    <section id="booking" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Schedule Your </span>
            <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Let's discuss your project requirements and explore how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Service Selection & Scheduling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Service Selection */}
            <div className="glass-card">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-neon-blue" />
                Select Service
              </h3>
              <div className="space-y-4">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                      selectedService === service.id
                        ? 'border-neon-blue bg-neon-blue/10'
                        : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{service.title}</h4>
                        <p className="text-white/60 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Date & Time Selection */}
            <div className="glass-card">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-neon-blue" />
                Select Date & Time
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={getMinDate()}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <motion.button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-lg text-sm transition-all duration-300 ${
                          selectedTime === time
                            ? 'bg-neon-blue text-white'
                            : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


              
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                      placeholder="Your full name"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                

                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Scheduling Consultation...</span>
                    </div>
                  ) : (
                    <span>Schedule Consultation</span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}