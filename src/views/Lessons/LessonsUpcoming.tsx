import React, { useEffect, useState } from 'react';
import Popup from '../../components/Popup';
import AddVehicle from '../../Formy/AddVehicle';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddLessons from '../../Formy/AddLessons';

const Lessons = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/lessons/upcoming/1');
        setLessons(response.data);
        console.log(response);
      } catch (err) {
        console.error('Error fetching lessons:', err);
      }
    };

    fetchVehicles();
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
                  to="/Lessons"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Lessons</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/LessonsToday"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Lessons Today</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/LessonsUpcoming"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Lessons Upcoming</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="relative flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Upcoming Lessons</h1>
            <Popup buttonText="Add Lessons">
              <AddLessons />
            </Popup>
          </div>

          <div className="mt-6 bg-white border border-gray-300 rounded-lg p-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Lesson ID</th>
                    <th className="px-6 py-3">Lesson Date</th>
                    <th className="px-6 py-3">Start Time</th>
                    <th className="px-6 py-3">End Time</th>
                  </tr>
                </thead>
                <tbody>
                  {lessons[0] &&
                    lessons.map((lesson, index) => (
                      <tr key={index} className="bg-white border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900">{lesson.lessonId}</td>
                        <td className="px-6 py-4">{lesson.lessonDate}</td>
                        <td className="px-6 py-4">{lesson.startTime}</td>
                        <td className="px-6 py-4">{lesson.endTime}</td>
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

export default Lessons;
