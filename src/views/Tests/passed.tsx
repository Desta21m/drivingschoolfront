import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Popup from '../../components/Popup';
import AddTest from '../../Formy/AddTest';

const Test = () => {
  const [students, setStudents] = useState([]); // List of students
  const [tests, setTests] = useState([]); // List of tests for the selected student
  const [selectedStudent, setSelectedStudent] = useState(''); // Selected student's ID

  // Fetch all students on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/students');
        setStudents(response.data);
      } catch (err) {
        console.error('Error fetching students:', err);
      }
    };
    fetchStudents();
  }, []);

  // Fetch tests for the selected student
  const fetchTests = async (studentId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/tests/passed/${studentId}`);
      setTests(response.data);
    } catch (err) {
      console.error('Error fetching tests:', err);
    }
  };

  // Handle student selection
  const handleStudentSelect = (event) => {
    const studentId = event.target.value;
    setSelectedStudent(studentId);
    if (studentId) {
      fetchTests(studentId);
    } else {
      setTests([]);
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
                  to="/Tests"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Tests</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="relative flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Student Tests</h1>
            <Popup buttonText="Add Test">
              <AddTest />
            </Popup>
          </div>

          <div className="relative mt-6 bg-white border border-gray-300 rounded-lg p-4">
            <p className="text-lg text-gray-800">Please select a student to show their passed tests:</p>

            {/* Student Selection Dropdown */}
            <select
              onChange={handleStudentSelect}
              value={selectedStudent}
              className="mt-4 mb-6 text-lg bg-gray-800 text-white p-2 rounded-lg"
            >
              <option value="">Select a student...</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                   - {student.firstName} {student.lastName}
                </option>
              ))}
            </select>

            {/* Test Table */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Test Date</th>
                    <th className="px-6 py-3">Score</th>
                    <th className="px-6 py-3">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.length > 0 ? (
                    tests.map((test) => (
                      <tr key={test.testId} className="bg-white border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900">{test.testDate}</td>
                        <td className="px-6 py-4">{test.score}</td>
                        <td className="px-6 py-4">{test.result ? 'Passed' : 'Failed'}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center px-6 py-4 text-gray-500">
                        No tests found for this student.
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

export default Test;
