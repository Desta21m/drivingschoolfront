import React, { useEffect, useState } from 'react';
import Popup from '../../components/Popup';
import AddInstructor from '../../Formy/AddInstructor';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/instructors/max_lessons_next_week');
        setInstructors(response.data);
        console.log(response);
      } catch (err) {
        console.error('Error fetching students:', err);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <section className="min-h-screen bg-slate-200 text-center font-sans">
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-300">
            <ul className="space-y-3">
              <li>
                <Link
                  to="/Instructors"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Instructors</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/InstructorsBirthday"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">InstructorsBirthday</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/InstructorsMaxLesson"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">InstructorsMaxLesson</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="relative flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">InstructorsMaxLesson</h1>
            <Popup buttonText="Add Instructor">
              <AddInstructor />
            </Popup>
          </div>

          <div className="mt-6 bg-white border border-gray-300 rounded-lg p-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">First Name</th>
                    <th className="px-6 py-3">Last Name</th>
                    <th className="px-6 py-3">lessonCount</th>

                  </tr>
                </thead>
                <tbody>
                  {instructors[0] && instructors.map((instructor, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-100">
                      <td className="px-6 py-4">{instructor.firstName}</td>
                      <td className="px-6 py-4">{instructor.lastName}</td>
                      <td className="px-6 py-4">{instructor.lessonCount}</td>
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

export default Instructors;
