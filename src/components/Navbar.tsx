import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <a className="flex items-center">
        <img src="public/downloa.png" className="h-8 mr-3" alt="Logo" />
        <span className="text-3xl font-bold text-red-600  font-serif">Skill Wheel</span>
      </a>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 font-medium">
            <li>
              <p
                onClick={() => navigate('/')}
                className="text-gray-800 hover:text-red-600 cursor-pointer"
              >
                Home
              </p>
            </li>

            {/* User Dropdown */}
            <li className="relative group">
              <button className="text-gray-800 hover:text-red-600">
                User
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-40 z-10">
                <p
                  onClick={() => navigate('/instructors')}
                  className="block py-2 px-4 text-gray-700 hover:bg-red-600 hover:text-white cursor-pointer"
                >
                  Instructor
                </p>
                <p
                  onClick={() => navigate('/customers')}
                  className="block py-2 px-4 text-gray-700 hover:bg-red-600 hover:text-white cursor-pointer"
                >
                  Customer
                </p>
                <p
                  onClick={() => navigate('/students')}
                  className="block py-2 px-4 text-gray-700 hover:bg-red-600 hover:text-white cursor-pointer"
                >
                  Student
                </p>
              </div>
            </li>

            {/* Service Dropdown */}
            <li className="relative group">
              <button className="text-gray-800 hover:text-red-600">
                Service
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-40 z-10">
                <p
                  onClick={() => navigate('/tests')}
                  className="block py-2 px-4 text-gray-700 hover:bg-red-600 hover:text-white cursor-pointer"
                >
                  Test
                </p>
                <p
                  onClick={() => navigate('/lessons')}
                  className="block py-2 px-4 text-gray-700 hover:bg-red-600 hover:text-white cursor-pointer"
                >
                  Lesson
                </p>
                <p
                  onClick={() => navigate('/courses')}
                  className="block py-2 px-4 text-gray-700 hover:bg-red-600 hover:text-white cursor-pointer"
                >
                  Course
                </p>
                <p
                  onClick={() => navigate('/vehicles')}
                  className="block py-2 px-4 text-gray-700 hover:bg-red-600 hover:text-white cursor-pointer"
                >
                  Vehicle
                  
                </p>
              </div>
            </li>

            {/* Rent Car Button */}
            <li>
              <button
                onClick={() => navigate('/RentCar')}
                className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-500"
              >
                Rent Car
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
