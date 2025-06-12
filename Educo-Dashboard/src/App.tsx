import Sidebar from './components/sidebar'
import Header from './components/Header'
import NewCourses from './components/NewCourses'
import  HoursActivity  from './components/HoursActivity'
// import DailySchedule from './components/DailySchedule'
// import CoursesTaking from './components/CoursesTaking'
// import Calendar from './components/Calendar'
// import Assignments from './components/Assignments'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
      <Router>

    <div className="flex min-h-screen bg-light font-sans text-dark border-purple-400 border-l-10 border-r-10 border-t-15 border-b-15 border-rounded-3xl shadow-lg">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto ">
        <Header /> 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
             <NewCourses />
            <HoursActivity />
            {/* <DailySchedule /> */}
            {/* <CoursesTaking />  */}
          </div>
          <div className="flex flex-col gap-6">
            {/* <Calendar />
            <Assignments /> */}
          </div>
        </div>
      </main>
    </div>
        </Router>

  )
}
