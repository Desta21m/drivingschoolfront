import { useState } from 'react'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";
import './App.css'
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Home from './views/Home';
import Students from './views/Students/Students';
import CarRents from './views/Rents/CarRents';
import Vehicles from './views/Vehicles/Vehicles';
import Courses from './views/Courser/Courses';
import Instructors from './views/Instructors/Instructors';
import Todaylesson from './views/Students/Todaylesson';
import StudentsWhoStartedInYear from './views/Students/StudentsWhoStartedInYear';
import Assigned from './views/Vehicles/Assigned';
import Maintenance from './views/Vehicles/Maintenance';
import CoursesMaxLesson from './views/Courser/CoursesMaxLesson';
import CourseTodayLesson from './views/Courser/CourseTodayLesson';
import InstructorsBirthday from './views/Instructors/InstructorsBirthday';
import InstructorsMaxLesson from './views/Instructors/InstructorsMaxLesson';
import Lesson from './views/Lessons/Lessons';
import LessonsUpcoming from './views/Lessons/LessonsUpcoming';
import LessonsToday from './views/Lessons/LessonsToday';
import Tests from './views/Tests/tests';
import Passed from './views/Tests/passed';
import AvrageTest from './views/Tests/AvrageTest';
import Active from './views/vechicleAssignment/Active';
import Assigment from './views/vechicleAssignment/Assigment';
import Inactive from './views/vechicleAssignment/Inactive';
import UserSelectionPage from './Formy/UserSelectionPage';
import RentCar from './Formy/RentCar';
import Customers from './views/custmer/Customers';
import Rented from './views/Vehicles/Rented';
import About from './views/page/About';
import ContactUs from './views/page/ContactUs';
import Info from './components/Info';
import CoursesPage from './views/page/CoursesPage';
export const Layout = () => {
    return (
        <div className="layout">
            <Info />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/students",
                element: <Students />
            },
            {
                path: "/Todaylesson",
                element: <Todaylesson />
            },
            {
                path: "/StudentsWhoStartedInYear",
                element: <StudentsWhoStartedInYear />
            },
            {
                path: "/Assigned",
                element: <Assigned />
            },
            {
                path: "/Rented",
                element: <Rented />
            },
            {
                path: "/Maintenance",
                element: <Maintenance />
            },
            {
                path: "/vehicles",
                element: <Vehicles />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/CoursesMaxLesson",
                element: <CoursesMaxLesson />
            },
            {
                path: "/CourseTodayLesson",
                element: <CourseTodayLesson />
            },
            {
                path: "/instructors",
                element: <Instructors />

            },
            {
                path: "/InstructorsBirthday",
                element: <InstructorsBirthday />

            },
            {
                path: "/InstructorsMaxLesson",
                element: <InstructorsMaxLesson />

            },
            {
                path: "/lessons",
                element: <Lesson />

            },
            {
                path: "/LessonsToday",
                element: <LessonsToday />

            },
            {
                path: "/LessonsUpcoming",
                element: <LessonsUpcoming />

            },
            {
                path: "/AvrageTest",
                element: <AvrageTest />

            },
            {
                path: "/passed",
                element: <Passed/>

            },
            {
                path: "/Tests",
                element: <Tests />

            },
            {
                path: "/Active",
                element: <Active />

            },
            {
                path: "/Assigment",
                element: <Assigment />

            },
            {
                path: "/Inactive",
                element: <Inactive />

            },
            {
                path: "/RentCar",
                element: <CarRents />

            },
            {
                path: "/user-selection",
                element: <UserSelectionPage />
            },
            {
                path: "/rent-car",
                element: <RentCar />
            },
            {
                path: "/customers",
                element: <Customers/>
            },
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/ContactUs",
                element: <ContactUs/>
            },
            {     
                path: "/CoursesPage",
                element: <CoursesPage />
            },
        ]
    },
]); 

// const [test, setTest] = useState<any>();

// const todayLessons = async () => {
//     try{
//       const response = await axios.get('http://localhost:8080/api/students/today_lessons');
//       console.log(response);
//       setTest(response.data)
//     }catch(err: any){
//       console.log(err);
//     }
// }

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App