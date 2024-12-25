import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Popup from '../../components/Popup';
import AddTest from '../../Formy/AddTest';

const Test = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/tests');
        setTests(response.data);
        console.log(response);
      } catch (err) {
        console.error('Error fetching tests:', err);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div>
      <section className="min-h-screen bg-slate-200 text-center font-sans">
        {/* Sidebar */}
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
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

        {/* Main content */}
        <div className="p-4 sm:ml-64 sm:mt-0 mt-16"> {/* Added sm:mt-0 for margin adjustment */}
          <div className="relative flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Test List</h1>
            <Popup buttonText="Add Test">
              <AddTest />
            </Popup>
          </div>

          <div className="relative mt-6 bg-white border border-gray-300 rounded-lg p-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Test ID</th>
                    <th className="px-6 py-3">Test Date</th>
                    <th className="px-6 py-3">Score</th>
                    <th className="px-6 py-3">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.length > 0 ? (
                    tests.map((test, index) => (
                      <tr key={index} className="bg-white border-b hover:bg-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900">{test.testId}</td>
                        <td className="px-6 py-4">{test.testDate}</td>
                        <td className="px-6 py-4">{test.score}</td>
                        <td className="px-6 py-4">{test.result ? 'Passed' : 'Failed'}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
                        No tests found.
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
