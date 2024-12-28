import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Info from './Info';
import LanguageSelecter from './LanguageSelecter';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const navigate = useNavigate();
   const { t } = useTranslation('navbar');

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
          <a className="flex items-center">
            <img src="public/downloa.png" className="h-8 mr-3" alt="Logo" />
            <span className="text-3xl font-bold text-red-600 font-serif">Skill Wheel</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 font-medium">
              <li>
                <p
                  onClick={() => navigate('/')}
                  className="text-gray-800 hover:text-red-600 cursor-pointer"
                >
                   {t('main1')}
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigate('/About')}
                  className="text-gray-800 hover:text-red-600 cursor-pointer"
                >
                  {t('main2')}
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigate('/ContactUs')}
                  className="text-gray-800 hover:text-red-600 cursor-pointer"
                >
                  {t('main3')}
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigate('/CoursesPage')}
                  className="text-gray-800 hover:text-red-600 cursor-pointer"
                >
                  {t('main4')}
                </p>
              </li>
              {/* User Dropdown */}
              <li className="relative group">
                <button className="text-gray-800 hover:text-red-600">{t('main5')}</button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-50 z-10">
                  <p
                    onClick={() => navigate('/instructors')}
                    className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-black cursor-pointer"
                  >
                    {t('ud1')}
                  </p>
                  <p
                    onClick={() => navigate('/customers')}
                    className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-black cursor-pointer"
                  >
                    {t('ud2')}
                  </p>
                  <p
                    onClick={() => navigate('/students')}
                    className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-black cursor-pointer"
                  >
                    {t('ud3')}
                  </p>
                </div>
              </li>
              {/* Service Dropdown */}
              <li className="relative group">
                <button className="text-gray-800 hover:text-red-600">{t('main6')}</button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-50 z-10">
                  <p
                    onClick={() => navigate('/tests')}
                    className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-black cursor-pointer"
                  >
                    {t('sd1')}
                  </p>
                  <p
                    onClick={() => navigate('/lessons')}
                    className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-black cursor-pointer"
                  >
                    {t('sd2')}
                  </p>
                  <p
                    onClick={() => navigate('/courses')}
                    className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-black cursor-pointer"
                  >
                    {t('sd3')}
                  </p>
                  <p
                    onClick={() => navigate('/vehicles')}
                    className="block py-2 px-4 text-gray-700 hover:bg-red-50 hover:text-black cursor-pointer"
                  >
                  {t('sd4')}
                  </p>
                </div>
              </li>
              {/* Rent Car Button */}
              <li>
                <button
                  onClick={() => navigate('/RentCar')}
                  className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-500"
                >
                  {t('main7')}
                </button>
              </li>
              <li className="relative group">
                <LanguageSelecter/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
