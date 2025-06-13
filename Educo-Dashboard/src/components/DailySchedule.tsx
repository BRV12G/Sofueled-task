
import { IoIosArrowForward } from 'react-icons/io'
import { RxDashboard } from "react-icons/rx";
import { FaRegCircleStop } from "react-icons/fa6";
import { IoIosColorFilter } from "react-icons/io";
import { IoColorPaletteOutline } from "react-icons/io5";


type ScheduleItem = {
  title: string
  subtitle: string
  icon: JSX.Element
  iconBg: string
}

const schedule: ScheduleItem[] = [
  {
    title: 'Design System',
    subtitle: 'Lecture - Class',
    icon: <RxDashboard className="text-xl" size={30} />,
    iconBg: 'bg-orange-100 ',
  },
  {
    title: 'Typography',
    subtitle: 'Group - Test',
    icon: <FaRegCircleStop className="text-xl" size={30}/>,
    iconBg: 'bg-purple-100 ',
  },
  {
    title: 'Color Style',
    subtitle: 'Group - Test',
    icon: <IoColorPaletteOutline  className="text-xl" size={30}/>,
    iconBg: 'bg-lime-100 ',
  },
  {
    title: 'Visual Design',
    subtitle: 'Lecture - Test',
    icon: <IoIosColorFilter className="text-xl" size={30} />,
    iconBg: 'bg-yellow-100 ',
  },
]

export default function DailySchedule() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-semibold mb-2">Daily Schedule</h2>

      <div className="flex flex-col gap-1">
        {schedule.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-3 py-3 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div className={`p-4 rounded-xl ${item.iconBg}`}>
                {item.icon}
              </div>

              <div className="flex flex-col ">
                <div className="font-semibold text-lg">{item.title}</div>
                <div className="text-md text-gray-800">{item.subtitle}</div>
              </div>
            </div>

            <div className="p-2   rounded-md bg-gray-100">
              <IoIosArrowForward className="text-gray-900" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
