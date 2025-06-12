import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export default function Calendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate()

  const totalCells = 42 // 6 rows of 7
  const calendar = []

  for (let i = 0; i < totalCells; i++) {
    const dayNumber = i - firstDay + 1
    if (i < firstDay) {
      calendar.push({
        date: prevMonthDays - firstDay + i + 1,
        current: false,
      })
    } else if (dayNumber > daysInMonth) {
      calendar.push({
        date: dayNumber - daysInMonth,
        current: false,
      })
    } else {
      calendar.push({
        date: dayNumber,
        current: true,
      })
    }
  }

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-sm">
      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={goToPrevMonth} className="p-1 text-gray-600  rounded-full">
          <FiChevronLeft size={25} className='bg-gray-200 rounded-md cursor-pointer'/>
        </button>
        <div className="text-base font-semibold">
          {months[currentMonth]}, {currentYear}
        </div>
        <button onClick={goToNextMonth} className="p-1 text-gray-600  rounded-full">
          <FiChevronRight size={25} className='bg-gray-200 rounded-md cursor-pointer'/>
        </button>
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-900 font-medium mb-2 bg-gray-100 p-2 rounded-lg">
        {days.map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-sm text-center">
        {calendar.map((item, idx) => {
          const isToday =
            item.current &&
            item.date === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()

          return (
            <div
              key={idx}
              className={`h-8 w-8 flex items-center justify-center rounded-full ${
                isToday
                  ? 'bg-lime-400  font-semibold'
                  : item.current
                  ? 'text-black hover:bg-gray-100'
                  : 'text-gray-400'
              }`}
            >
              {item.date}
            </div>
          )
        })}
      </div>
    </div>
  )
}
