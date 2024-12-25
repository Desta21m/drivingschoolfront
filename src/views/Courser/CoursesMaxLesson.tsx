import React, { useEffect, useState } from 'react';
import Popup from '../../components/Popup';
import AddCourse from '../../Formy/AddCourse';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/courses/max_lessons'
        );
        setCourses(response.data);
        console.log(response.data);
      } catch (err) {
        console.error('Error fetching courses:', err);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <section className="min-h-screen bg-slate-200 font-sans text-center">
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-300">
            <ul className="space-y-3">
              <li>
                <Link
                  to="/Courses"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Courses</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/CoursesMaxLesson"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">CoursesMaxLesson</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/CourseTodayLesson"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">CourseTodayLesson</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="relative flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">max_lessons</h1>
            <Popup buttonText="Add Course">
              <AddCourse />
            </Popup>
          </div>

          <div className="mt-6 bg-white border border-gray-300 rounded-lg p-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Course Description</th>
                    <th className="px-6 py-3">Course Duration</th>
                    <th className="px-6 py-3">Course Fee</th>
                    <th className="px-6 py-3">Course Id</th>
                    <th className="px-6 py-3">Course Name</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {course.courseDescription}
                      </td>
                      <td className="px-6 py-4">{course.courseDuration}</td>
                      <td className="px-6 py-4">{course.courseFee}</td>
                      <td className="px-6 py-4">{course.courseId}</td>
                      <td className="px-6 py-4">{course.courseName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
