import { FaRegLightbulb } from 'react-icons/fa'
import { HiOutlineBeaker } from 'react-icons/hi'
import { LuPaintBucket } from 'react-icons/lu'
import { PiMagicWandLight } from 'react-icons/pi'
import { IoIosArrowForward } from 'react-icons/io'

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
    icon: <HiOutlineBeaker className="text-xl" />,
    iconBg: 'bg-orange-100 ',
  },
  {
    title: 'Typography',
    subtitle: 'Group - Test',
    icon: <FaRegLightbulb className="text-xl" />,
    iconBg: 'bg-purple-100 ',
  },
  {
    title: 'Color Style',
    subtitle: 'Group - Test',
    icon: <LuPaintBucket className="text-xl" />,
    iconBg: 'bg-lime-100 ',
  },
  {
    title: 'Visual Design',
    subtitle: 'Lecture - Test',
    icon: <PiMagicWandLight className="text-xl" />,
    iconBg: 'bg-yellow-100 ',
  },
]

export default function DailySchedule() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-semibold mb-2">Daily Schedule</h2>

      <div className="flex flex-col gap-1">
        {schedule.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-3 py-3 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl ${item.iconBg}`}>
                {item.icon}
              </div>

              <div>
                <div className="font-semibold text-sm">{item.title}</div>
                <div className="text-xs text-gray-800">{item.subtitle}</div>
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
