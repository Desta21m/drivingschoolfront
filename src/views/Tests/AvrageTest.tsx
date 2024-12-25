import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Test = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [averageScore, setAverageScore] = useState(null);

  // Fetch all available courses
  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/courses');
      setCourses(response.data);
    } catch (err) {
      console.error('Error fetching courses:', err);
    }
  };

  // Fetch the average score for a selected course
  const fetchAverageScore = async (courseId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/tests/average/${courseId}`);
      setAverageScore(response.data);
    } catch (err) {
      console.error('Error fetching average score:', err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleCourseChange = (event) => {
    const courseId = event.target.value;
    setSelectedCourse(courseId);
    if (courseId) fetchAverageScore(courseId);
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
                  to="/AverageTest"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Average Test</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <h1 className="text-2xl font-bold text-gray-800">Average Test Results</h1>
          <p className="text-lg font-bold my-4">Please select a course to view the average test result:</p>
          
          <select
            className="mb-4 bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
            value={selectedCourse}
            onChange={handleCourseChange}
          >
            <option value="">Select a course...</option>
            {courses.map((course) => (
              <option key={course.courseId} value={course.courseId}>
                {course.courseId} - {course.courseName}
              </option>
            ))}
          </select>

          {averageScore !== null && (
            <div className="mt-6">
              <p className="text-lg">
                The average test score for{' '}
                <strong>{courses.find((course) => course.courseId === parseInt(selectedCourse))?.courseName}</strong> is{' '}
                <strong>{averageScore.toFixed(2)}</strong>.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Test;
