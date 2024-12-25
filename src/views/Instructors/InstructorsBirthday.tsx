import React, { useState, useEffect } from 'react';
import Popup from '../../components/Popup';
import AddInstructor from '../../Formy/AddInstructor';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Months mapped to their corresponding integer values (1-12)
  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  useEffect(() => {
    if (selectedMonth) {
      const fetchInstructors = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/instructors/birthday/${selectedMonth}`
          );
          setInstructors(response.data);
        } catch (err) {
          console.error('Error fetching instructors:', err);
        }
      };
      fetchInstructors();
    }
  }, [selectedMonth]);

  const handleMonthSelect = (selectedOption) => {
    setSelectedMonth(selectedOption.value);
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
            <h1 className="text-2xl font-bold text-gray-800">InstructorsBirthday</h1>
            <Popup buttonText="Add Instructor">
              <AddInstructor />
            </Popup>
          </div>

          <div className="relative mt-6 bg-white border border-gray-300 rounded-lg p-4">
            <p className="text-lg text-gray-800">Please select a month to show the instructors' birthdays:</p>

            <div className="mt-4 mb-6 text-lg flex justify-start">
              <Select
                value={months.find((option) => option.value === selectedMonth)}
                onChange={handleMonthSelect}
                options={months}
                classNamePrefix="custom-select"
              />
            </div>

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
                  {instructors.length > 0 ? (
                    instructors.map((instructor, index) => (
                      <tr key={index} className="bg-white border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900">{instructor.email}</td>
                        <td className="px-6 py-4">{instructor.firstName}</td>
                        <td className="px-6 py-4">{instructor.lastName}</td>
                        <td className="px-6 py-4">{instructor.dateOfBirth}</td>
                        <td className="px-6 py-4">{instructor.phoneNumber}</td>
                        <td className="px-6 py-4">{instructor.address}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center px-6 py-4 text-gray-500">
                        No instructors found.
                      </td>
                    </tr>
                  )}
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
