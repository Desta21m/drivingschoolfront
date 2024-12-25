import React, { useEffect, useState } from 'react';
import Popup from '../../components/Popup';
import AddVehicle from '../../Formy/AddVehicle';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Test = () => {
  const [tests, setTests] = useState([]);
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState('1');

  const fetchVehicles = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/tests/average/${id}`);
      setTests(response.data);
      console.log(response);
    } catch (err) {
      console.error('Error fetching tests:', err);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/courses`);
      setCourses(response.data);
      console.log(response);
    } catch (err) {
      console.error('Error fetching courses:', err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleButtonClick = () => {
    fetchVehicles(courseId);
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
              <li>
                <Link
                  to="/passed"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Passed</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/AvrageTest"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">AvrageTest</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="relative flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Average Test Results</h1>
          </div>

          <p className="text-lg font-bold mb-2">Please select which course you want to see the average result from:</p>
          <select
            className="mb-4 bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
            value={courseId}
            onChange={(e) => {
              setCourseId(e.target.value);
              fetchVehicles(e.target.value);
            }}
          >
            {courses.map((course) => (
              <option key={course.id} value={course.courseId}>
                {course.courseId + " " + course.courseName}
              </option>
            ))}
          </select>

          <div className="mx-auto flex-1 p-3">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <p className="text-sm">
                {tests && `The average result for ${
                  (courses.find(course => course.courseId == courseId) || {}).courseName
                } is ${tests}`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;
