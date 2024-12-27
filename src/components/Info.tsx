import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Info = () => {
  return (
    <div className="bg-black text-white p-2">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="#" className="text-red-600 hover:text-red-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-red-600 hover:text-red-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-red-600 hover:text-red-500">
            <FaLinkedin />
          </a>
        </div>
        
        {/* Contact Information */}
        <div className="flex justify-center items-center">
          {/* Address */}
          <span className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-red-600" />
            <span> 2017, Ethiopia ArbaMinche, University. nsr / 1577 / 14   .</span>
          </span>

          {/* Phone */}
          <span className="flex items-center space-x-2">
            <FaPhoneAlt className="text-red-600" />
            <a href="tel:+14507682143" className="hover:text-red-500"> +251(9) 1572-9756   . </a>
          </span>

          {/* Email */}
          <span className="flex items-center space-x-2">
            <FaEnvelope className="text-red-600" />
            <a href="mailto:optionsthyacinthe@gmail.com" className="hover:text-red-500"> equardesta21@gmail.com </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Info;
