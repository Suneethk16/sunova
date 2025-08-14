import { useState } from 'react'

function Booking() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [projectDetails, setProjectDetails] = useState('')
  
  const availableTimes = ['10:00 AM', '12:00 PM']

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const days = []

    // Empty cells for days before the 1st
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      const isSaturday = dayDate.getDay() === 6

      if (isSaturday && dayDate >= today) {
        days.push(
          <button
            key={day}
            onClick={() => {
              const dateStr = dayDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })
              setSelectedDate(dateStr)
              setSelectedTime('') // Reset time when new date is selected
              setShowForm(true)
            }}
            className="p-2 rounded-md font-medium text-center transition-colors bg-indigo-100 text-indigo-800 cursor-pointer hover:bg-indigo-200"
          >
            {day}
          </button>
        )
      } else {
        days.push(
          <div key={day} className="p-2 rounded-md font-medium text-center bg-gray-100 text-gray-400 cursor-not-allowed">
            {day}
          </div>
        )
      }
    }

    return days
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedTime) {
      alert('Please select a time slot.')
      return
    }
    alert(`Appointment booked for ${selectedDate} at ${selectedTime}!\nProject: ${projectDetails}`)
    setProjectDetails('')
    setSelectedTime('')
    setShowForm(false)
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  return (
    <section id="booking" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">Book Your Appointment</h2>
        <div className="mt-8 bg-white p-6 sm:p-10 rounded-2xl shadow-lg max-w-4xl mx-auto">
          
          <div className="flex flex-col items-center">
            {/* Month Navigation */}
            <div className="flex justify-between items-center w-full px-4 mb-4">
              <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                &lt;
              </button>
              <h3 className="text-xl font-semibold text-gray-900">
                {currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
              </h3>
              <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                &gt;
              </button>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-7 text-center font-semibold text-sm text-gray-500 w-full mb-2">
              <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2 w-full">
              {renderCalendar()}
            </div>
          </div>

          {/* Booking Form */}
          {showForm && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900">Appointment Details</h3>
              <p className="mt-2 text-lg text-gray-600">
                You have selected <span className="font-bold text-indigo-600">{selectedDate}</span>. 
                Please select a time slot and fill out the form below to confirm your appointment.
              </p>
              
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Time</label>
                  <div className="grid grid-cols-2 gap-4">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          console.log('Time selected:', time)
                          setSelectedTime(time)
                        }}
                        className={`p-4 rounded-lg border-2 font-medium text-center transition-all duration-200 ${
                          selectedTime === time
                            ? 'border-indigo-600 bg-indigo-100 text-indigo-800 shadow-md'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-indigo-400 hover:bg-indigo-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {selectedTime && (
                    <p className="mt-2 text-sm text-green-600 font-medium">
                      ✓ Selected: {selectedTime}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Project Details</label>
                  <textarea
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    rows="4"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                  />
                  <p className="mt-1 text-sm text-gray-500">Briefly describe your project or the questions you have.</p>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
                >
                  Confirm Appointment
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Booking