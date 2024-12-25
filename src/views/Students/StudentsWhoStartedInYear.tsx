import React, { useState } from 'react';
import Popup from '../../components/Popup';
import AddStudent from '../../Formy/AddStudent';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [year, setYear] = useState(''); // State for user input year
  const [error, setError] = useState(null);

  const fetchStudentsByYear = async () => {
    if (!year || isNaN(year)) {
      setError('Please enter a valid year.');
      return;
    }
    setError(null);
    try {
      const response = await axios.get(`http://localhost:8080/api/students/started/${year}`);
      setStudents(response.data);
    } catch (err) {
      console.error('Error fetching students:', err);
      setError('Failed to fetch students. Please try again.');
    }
  };

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
                  to="/Students"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Students</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Todaylesson"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Today Lesson</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/StudentsWhoStartedInYear"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Students Who Started in Year</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="relative flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Students</h1>
            <Popup buttonText="Add Student">
              <AddStudent />
            </Popup>
          </div>

          <div className="mt-6 bg-white border border-gray-300 rounded-lg p-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter year (e.g., 2023)"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={fetchStudentsByYear}
                className="ml-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Fetch Students
              </button>
            </div>

            {error && <p className="text-red-600">{error}</p>}

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">First Name</th>
                    <th className="px-6 py-3">Last Name</th>
                    <th className="px-6 py-3">Date of Birth</th>
                    <th className="px-6 py-3">Phone Number</th>
                    <th className="px-6 py-3">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-100">
                      <td className="px-6 py-4 font-medium text-gray-900">{student.email}</td>
                      <td className="px-6 py-4">{student.firstName}</td>
                      <td className="px-6 py-4">{student.lastName}</td>
                      <td className="px-6 py-4">{student.dateOfBirth}</td>
                      <td className="px-6 py-4">{student.phoneNumber}</td>
                      <td className="px-6 py-4">{student.address}</td>
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

export default Students;
