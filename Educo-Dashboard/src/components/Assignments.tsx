import { FiPlus } from "react-icons/fi";
import logo1 from "../assets/assign_1.png";
import logo2 from "../assets/assign_2.png";
import logo3 from "../assets/assign_3.png";

type Assignment = {
  title: string;
  due: string;
  status: "In progress" | "Completed" | "Upcoming";
  iconBg: string;
  icon: React.ReactNode;
};

const assignments: Assignment[] = [
  {
    title: "Methods of data",
    due: "02 July, 10:30 AM",
    status: "In progress",
    iconBg: "bg-orange-50",
    icon: (
      <span className="text-lg sm:text-xl">
        <img src={logo1} alt="Icon 1" />
      </span>
    ),
  },
  {
    title: "Market Research",
    due: "14 June, 12:45 AM",
    status: "Completed",
    iconBg: "bg-lime-100",
    icon: (
      <span className="text-lg sm:text-xl">
        <img src={logo2} alt="Icon 2" />
      </span>
    ),
  },
  {
    title: "Data Collection",
    due: "12 May, 11:00 AM",
    status: "Upcoming",
    iconBg: "bg-orange-100",
    icon: (
      <span className="text-lg sm:text-xl">
        <img src={logo3} alt="Icon 3" />
      </span>
    ),
  },
];

export default function Assignments() {
  return (
    <div className="p-3 sm:p-4 rounded-2xl w-full max-w-full sm:max-w-md">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h2 className="text-xl sm:text-2xl font-semibold">Assignments</h2>
        <button className="p-1 sm:p-2 rounded-full bg-lime-200 text-gray-800">
          <FiPlus className="text-base sm:text-lg" />
        </button>
      </div>

      {/* Assignment List */}
      <div className="space-y-3">
        {assignments.map((a, idx) => {
          const statusColor =
            a.status === "In progress"
              ? "bg-indigo-100"
              : a.status === "Completed"
              ? "bg-lime-100"
              : "bg-orange-100";

          return (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white shadow-md px-2 sm:px-3 py-2 rounded-xl min-h-[72px] sm:h-20 gap-2 sm:gap-0"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className={`h-10 w-10 sm:h-14 sm:w-14 rounded-xl flex items-center justify-center ${a.iconBg}`}
                >
                  {a.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm sm:text-base font-semibold">
                    {a.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">{a.due}</p>
                </div>
              </div>
              <span
                className={`text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full font-medium ${statusColor}`}
              >
                {a.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
