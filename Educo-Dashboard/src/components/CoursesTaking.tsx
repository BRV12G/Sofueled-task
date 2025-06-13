import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import Courses1 from "../assets/courses_1.png";
import Courses2 from "../assets/courses_2.png";

type Course = {
  title: string;
  instructor: string;
  remaining: string;
  progress: number;
  bgColor: string;
  icon: string;
  instructorAvatar: string;
};

const courses: Course[] = [
  {
    title: "3D Design Course",
    instructor: "Micheal Andrew",
    remaining: "8h 45 min",
    progress: 45,
    bgColor: "#dcd7ff",
    icon: Courses1,
    instructorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "Development Basics",
    instructor: "Natalia Varnan",
    remaining: "18h 12 min",
    progress: 75,
    bgColor: "#ffd4dc",
    icon: Courses2,
    instructorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function CoursesTaking() {
  return (
    <div className="rounded-2xl w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Course You're Taking
        </h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center text-xs sm:text-sm bg-white px-2 sm:px-3 py-1.5 rounded-full">
            Active <IoIosArrowDown className="ml-1 text-base sm:text-lg" />
          </button>
          <button className="p-1.5 bg-lime-400 text-black rounded-full">
            <AiOutlinePlus className="text-base sm:text-lg" />
          </button>
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-4 ">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl px-3 sm:px-4 py-3 shadow gap-3 sm:gap-0 sm:h-45"
          >
            {/* LEFT: Course info */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-1/3">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: course.bgColor }}
              >
                <img
                  src={course.icon}
                  alt={course.title}
                  className="w-15 h-15 sm:w-25 sm:h-20"
                />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">
                  {course.title}
                </h3>
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

            {/*  CENTER: Remaining time */}
            <div className="w-full sm:w-1/3 text-center mt-2 sm:mt-0">
              <div className="text-xs sm:text-sm text-gray-400">Remaining</div>
              <div className="text-sm sm:text-base font-semibold">
                {course.remaining}
              </div>
            </div>

            {/* RIGHT: Circular progress */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 mt-2 sm:mt-0">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 36 36"
              >
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
  );
}
