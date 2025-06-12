

import { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";


type Activity = {
  day: string
  hours: number
  date: string
}

const activityData: Activity[] = [
  { day: 'Su', hours: 4, date: '1 Jan 2023' },
  { day: 'Mo', hours: 6, date: '2 Jan 2023' },
  { day: 'Tu', hours: 3, date: '3 Jan 2023' },
  { day: 'We', hours: 6.75, date: '5 Jan 2023' }, // highlight
  { day: 'Th', hours: 4.5, date: '6 Jan 2023' },
  { day: 'Fr', hours: 5, date: '7 Jan 2023' },
  { day: 'Sa', hours: 3, date: '8 Jan 2023' },
]

export default function HoursActivity() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const maxHours = 8

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full h-full font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Hours Activity</h2>
          <div className="text-xs text-green-600 mt-1 gap-2 flex items-center">
              <MdArrowOutward size={20} className="inline-block text-black bg-gray-200  rounded-sm p-0.5" />

            +3% Increase than last week</div>
        </div>
        <select className="text-xs border border-gray-300 rounded-full px-2 py-1 text-gray-600">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      {/* Graph area */}
      <div className="relative flex gap-3 mt-4">
        {/* Y-Axis */}
        <div className="flex flex-col justify-between h-70 text-xs text-gray-400 pr-2">
          {[8, 6, 4, 2, 0].map((h) => (
            <div key={h} className="h-[20%] flex items-center justify-end">
              {h}h
            </div>
          ))}
        </div>

        {/* Chart grid + bars */}
        <div className="relative w-full">
          {/* CHANGED: Grid lines */}
          <div className="absolute top-0 left-0 w-full h-70 flex flex-col justify-between z-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-full border-t border-gray-200"
                style={{ height: i === 4 ? '0' : '20%' }}
              />
            ))}
          </div>

          {/* Bars */}
          <div className="relative flex items-end justify-between h-70 z-10">
            {activityData.map((day, idx) => {
              const isHighlight = idx === 3
              const heightPercent = (day.hours / maxHours) * 100

              return (
                <div
                  key={day.day}
                  className="flex flex-col items-end justify-end w-2 relative group"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ height: '100%' }}
                >

                    

            
                  {/* Tooltip */}
                  {/* {hoveredIndex === idx && (
                    <div className="absolute -top-16 z-20 bg-black text-white text-xs px-2 py-1 rounded-md shadow text-center">
                      😍 {day.hours}h<br />{day.date}
                    </div>
                  )} */}

                  {/* Bar */}
                  {/* <div
                    style={{ height: `${heightPercent}%`,
                    minHeight: '8px', 
                    }}
                    className={`w-full rounded-full transition-all duration-300 ${
                      isHighlight ? 'bg-[#D1FA00]' : 'bg-gray-800'
                    }`}
                  />
                  <span className="mt-2 text-xs text-gray-500">{day.day}</span>
                </div> */}
                {/* Bar */}
                <div
                  style={{
                    height: `${heightPercent}%`,
                    minHeight: '8px',
                  }}
                  className={`w-full rounded-full transition-all duration-300 ${
                    isHighlight ? 'bg-lime-400' : 'bg-gray-800'
                  }`}
                />
                {/* Label absolutely positioned below the grid */}
                <span
                  className="text-xs text-gray-500 absolute left-1/2 -translate-x-1/2"
                  style={{ bottom: -24 }}
                >
                  {day.day}
                </span>
                {/* Tooltip */}
                {hoveredIndex === idx && (
                  <div className="absolute   left-1/2 -translate-x-1/2 z-20 bg-black text-white text-xs px-2 py-1 rounded-md shadow text-center min-w-[100px] max-w-[160px]"
                  style={{
                      bottom: `calc(${heightPercent}% + 8px)`, // 8px matches minHeight
                    }}
                    >
                    😍 {day.hours}hrs<br />{day.date}
                  </div>
                )}
              </div>
            )

              
            })}
          </div>
        </div>
      </div>
    </div>
  )
}


