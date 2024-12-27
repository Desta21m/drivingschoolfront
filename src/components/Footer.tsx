import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 shadow-lg dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto px-6 md:py-8">
        {/* Company Info Section */}
        <div className="sm:flex sm:items-center sm:justify-between mb-8">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-red-600 mb-2">Skill Wheel</h2>
            <p className="text-gray-300">Complete driving training with qualified instructors. Register now to get started!</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-600">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Automobile course</li>
              <li className="text-gray-300">Private lessons</li>
              <li className="text-gray-300">Car rental</li>
              <li className="text-gray-300">Motorcycle</li>
              <li className="text-gray-300">Truck</li>
              <li className="text-gray-300">Bus</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-600">Contact</h3>
            <div className="text-gray-300">
              <div className="flex items-center">
                <FaPhoneAlt className="mr-2 text-red-600" />
                <a href="tel:+14507682143" className="hover:text-red-500">+251 (9) 1572-9756</a>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-600" />
                <span> 2017, ArbaMinche, University. nsr / 1577 / 14    Ethiopia  .</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-300">Mon to Friday: 9:00 am to 6:00 pm</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-600">Follow Us</h3>
            <div className="space-x-4 text-red-600">
              <a href="#" className="hover:text-red-500">
                <FaFacebook className="inline" />
              </a>
              <a href="#" className="hover:text-red-500">
                <FaTwitter className="inline" />
              </a>
              <a href="#" className="hover:text-red-500">
                <FaLinkedin className="inline" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <span className="block text-sm text-gray-300">
            © 2023 <a href="https://yourcompany.com" className="hover:underline text-red-600">Skill Wheel™</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
