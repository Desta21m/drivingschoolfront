import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white shadow-lg dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:text-red-600 md:mr-6 hover:underline">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-red-600 md:mr-6 hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-red-600 md:mr-6 hover:underline">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600 hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">
          © 2023 <a href="https://yourcompany.com" className="hover:underline text-red-600">Skill Wheel™</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer;
