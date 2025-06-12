// src/components/Assignments.tsx
import { FiPlus } from 'react-icons/fi'

type Assignment = {
  title: string
  due: string
  status: 'In progress' | 'Completed' | 'Upcoming'
  iconBg: string
  icon: React.ReactNode
}

const assignments: Assignment[] = [
  {
    title: 'Methods of data',
    due: '02 July, 10:30 AM',
    status: 'In progress',
    iconBg: 'bg-orange-50',
    icon: <span className="text-lg">🧬</span>,
  },
  {
    title: 'Market Research',
    due: '14 June, 12:45 AM',
    status: 'Completed',
    iconBg: 'bg-lime-100',
    icon: <span className="text-lg">🧠</span>,
  },
  {
    title: 'Data Collection',
    due: '12 May, 11:00 AM',
    status: 'Upcoming',
    iconBg: 'bg-orange-100',
    icon: <span className="text-lg">📊</span>,
  },
]

export default function Assignments() {
  return (
    <div className=" p-4 rounded-2xl  w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Assignments</h2>
        <button className="p-1 rounded-full bg-lime-200 text-gray-800">
          <FiPlus />
        </button>
      </div>

      {/* Assignment List */}
      <div className="space-y-3 ">
        {assignments.map((a, idx) => {
          const statusColor =
            a.status === 'In progress'
              ? 'bg-indigo-100 '
              : a.status === 'Completed'
              ? 'bg-lime-100 '
              : 'bg-orange-100 '

          return (
            <div
              key={idx}
              className="flex items-center justify-between bg-white shadow-md px-3 py-2 rounded-xl h-20"
            >
              <div className="flex items-center gap-3">
                <div className={`h-15 w-15 rounded-xl flex items-center justify-center ${a.iconBg}`}>
                  {a.icon}
                </div>
                <div className='flex flex-col gap-3'>
                  <h3 className="text-sm font-semibold">{a.title}</h3>
                  <p className="text-xs text-gray-500">{a.due}</p>
                </div>
              </div>
              <span className={`text-xs px-3 py-2 rounded-full font-medium ${statusColor}`}>
                {a.status}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
