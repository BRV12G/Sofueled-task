// import { IoIosArrowDown } from 'react-icons/io'
// import { AiOutlinePlus } from 'react-icons/ai'





// type Course = {
//   title: string
//   instructor: string
//   remaining: string
//   progress: number
//   bgColor: string
//   icon: string
//   instructorAvatar: string
// }

// const courses: Course[] = [
//   {
//     title: '3D Design Course',
//     instructor: 'Micheal Andrew',
//     remaining: '8h 45 min',
//     progress: 45,
//     bgColor: '#dcd7ff',
//     icon: 'https://cdn-icons-png.flaticon.com/512/2721/2721320.png', // 3D design icon
//     instructorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//   },
//   {
//     title: 'Development Basics',
//     instructor: 'Natalia Varnan',
//     remaining: '18h 12 min',
//     progress: 75,
//     bgColor: '#ffd4dc',
//     icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png', // code/dev icon
//     instructorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//   },
// ]


// export default function CoursesTaking() {
//   return (
//     <div className=" rounded-2xl  w-full">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Course You're Taking</h2>
//         <div className="flex items-center gap-2">
//           <button className="flex items-center text-sm bg-gray-100 px-3 py-1.5 rounded-full">
//             Active <IoIosArrowDown className="ml-1" />
//           </button>
//           <button className="p-1.5 bg-lime-400 text-white rounded-full">
//             <AiOutlinePlus />
//           </button>
//         </div>
//       </div>

//       {/* Courses List */}
//      <div className="space-y-4">
//         {courses.map((course, idx) => (
//           <div
//             key={idx}
//             className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow"
//           >
//             {/* 🟡 LEFT: Course info */}
//             <div className="flex items-center gap-3 w-1/3">
//               <div
//                 className="w-12 h-12 rounded-xl flex items-center justify-center"
//                 style={{ backgroundColor: course.bgColor }}
//               >
//                 <img src={course.icon} alt={course.title} className="w-6 h-6" />
//               </div>
//               <div>
//                 <h3 className="text-sm font-semibold">{course.title}</h3>
//                 <div className="text-xs text-gray-500 flex items-center gap-1">
//                   <img
//                     src={course.instructorAvatar}
//                     alt={course.instructor}
//                     className="w-4 h-4 rounded-full"
//                   />
//                   {course.instructor}
//                 </div>
//               </div>
//             </div>

//             {/* 🟢 CENTER: Remaining time */}
//             <div className="w-1/3 text-center">
//               <div className="text-xs text-gray-400">Remaining</div>
//               <div className="text-sm font-semibold">{course.remaining}</div>
//             </div>

//             {/* 🔵 RIGHT: Circular progress */}
//             <div className="relative w-10 h-10">
//               <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
//                 <path
//                   className="text-gray-200"
//                   stroke="currentColor"
//                   strokeWidth="3"
//                   fill="none"
//                   d="M18 2.0845
//                      a 15.9155 15.9155 0 0 1 0 31.831
//                      a 15.9155 15.9155 0 0 1 0 -31.831"
//                 />
//                 <path
//                   className="text-green-400"
//                   stroke="currentColor"
//                   strokeWidth="3"
//                   fill="none"
//                   strokeDasharray={`${course.progress}, 100`}
//                   d="M18 2.0845
//                      a 15.9155 15.9155 0 0 1 0 31.831
//                      a 15.9155 15.9155 0 0 1 0 -31.831"
//                 />
//               </svg>
//               <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
//                 {course.progress}%
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }


import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlinePlus } from 'react-icons/ai'

type Course = {
  title: string
  instructor: string
  remaining: string
  progress: number
  bgColor: string
  icon: string
  instructorAvatar: string
}

const courses: Course[] = [
  {
    title: '3D Design Course',
    instructor: 'Micheal Andrew',
    remaining: '8h 45 min',
    progress: 45,
    bgColor: '#dcd7ff',
    icon: 'https://cdn-icons-png.flaticon.com/512/2721/2721320.png',
    instructorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    title: 'Development Basics',
    instructor: 'Natalia Varnan',
    remaining: '18h 12 min',
    progress: 75,
    bgColor: '#ffd4dc',
    icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    instructorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
]

export default function CoursesTaking() {
  return (
    <div className="rounded-2xl w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <h2 className="text-xl sm:text-2xl font-semibold">Course You're Taking</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center text-xs sm:text-sm bg-gray-100 px-2 sm:px-3 py-1.5 rounded-full">
            Active <IoIosArrowDown className="ml-1 text-base sm:text-lg" />
          </button>
          <button className="p-1.5 bg-lime-400 text-white rounded-full">
            <AiOutlinePlus className="text-base sm:text-lg" />
          </button>
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-4">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl px-3 sm:px-4 py-3 shadow gap-3 sm:gap-0"
          >
            {/* 🟡 LEFT: Course info */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-1/3">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: course.bgColor }}
              >
                <img src={course.icon} alt={course.title} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">{course.title}</h3>
                <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                  <img
                    src={course.instructorAvatar}
                    alt={course.instructor}
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                  />
                  {course.instructor}
                </div>
              </div>
            </div>

            {/* 🟢 CENTER: Remaining time */}
            <div className="w-full sm:w-1/3 text-center mt-2 sm:mt-0">
              <div className="text-xs sm:text-sm text-gray-400">Remaining</div>
              <div className="text-sm sm:text-base font-semibold">{course.remaining}</div>
            </div>

            {/* 🔵 RIGHT: Circular progress */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 mt-2 sm:mt-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-green-400"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${course.progress}, 100`}
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-semibold">
                {course.progress}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
