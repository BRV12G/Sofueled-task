// src/components/NewCourses.tsx
import { FaStar, FaPenNib } from 'react-icons/fa'
import { LuFlaskConical } from 'react-icons/lu'
import { PiCamera } from 'react-icons/pi'

type Course = {
  title: string
  lessons: number
  rating: number
  type: string
  icon: JSX.Element
bgColor: string 

}

const courses: Course[] = [
  {
    title: 'Content Writing',
    lessons: 12,
    rating: 4.8,
    type: 'Data Research',
    icon: <FaPenNib className="text-2xl" />,
    bgColor: 'bg-orange-100', 
  },
  {
    title: 'Usability Testing',
    lessons: 15,
    rating: 5.0,
    type: 'UI/UX Design',
    icon: <LuFlaskConical className="text-2xl" />,
    bgColor: 'bg-green-100',

  },
  {
    title: 'Photography',
    lessons: 8,
    rating: 4.6,
    type: 'Art and Design',
    icon: <PiCamera className="text-2xl" />,
    bgColor: 'bg-purple-100',

  },
]

export default function NewCourses() {
  return (
    <div className=" w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
        <h2 className="text-2xl font-semibold">New Courses</h2>
        <a href="#" className="text-sm text-gray-500 underline">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 flex flex-col gap-1 shadow-sm"
          >
             <div className="flex items-center gap-3">
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${course.bgColor}`}>
              {course.icon}
            </div>
            <div>
            <h3 className="font-medium text-lg text-gray-900 mt-2">{course.title}</h3>
            <p className="text-xs text-gray-500 font-semibold">{course.lessons} Lessons</p>
            </div>
            </div>

            <div className="flex  text-xs text-gray-800  justify-between mt-4">
              <p>Rate</p>
              <p className='text-left w-1/2 pl-5' >Type</p>
            </div>

            <div className="flex justify-between items-center text-sm  text-gray-700">
                <div className="flex items-center">
              <FaStar className="text-yellow-500 mr-1 text-lg" />
              <span className="text-lg font-bold">{course.rating}</span>
            </div>

            <p className="text-xs text-gray-800 font-bold">{course.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
