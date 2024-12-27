import React from 'react';
import { FaRegCheckCircle, FaUserGraduate, FaClock, FaHeadset, FaPhoneAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-5xl font-bold text-red-600 text-center lg:text-left mb-10">Learn with <span className="text-black">Confidence</span></h2>
            <h3 className="text-3xl font-semibold text-gray-800 text-center lg:text-left mb-6">
              Your <span className="text-red-600">Perfect</span> Driving Solution
            </h3>
            <p className="text-gray-600 text-center lg:text-left text-lg max-w-3xl mx-auto leading-relaxed mb-10">
              Skill Wheel is your trusted partner for obtaining your driving license. Our dedicated
              instructors, premium quality service, and flexible schedules ensure that you receive the best
              possible training for a successful and safe journey on the road.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="https://wizdrivingschool.com/wp-content/uploads/2024/04/driving-school-Manchester.jpg" 
              alt="Driving Training" 
              className="w-full max-w-sm rounded-lg shadow-lg" 
            />
          </div>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Quality Service */}
          <div className="bg-red-50 rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4 text-4xl text-red-600">
              <FaRegCheckCircle />
            </div>
            <h4 className="text-xl font-semibold text-black-600 mb-3">Quality Service</h4>
            <p className="text-gray-700">
              We are dedicated to delivering superior service that exceeds your expectations at every
              step.
            </p>
          </div>

          {/* Experienced Instructors */}
          <div className="bg-red-50 rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4 text-4xl text-red-600">
              <FaUserGraduate />
            </div>
            <h4 className="text-xl font-semibold text-black-600 mb-3">Experienced Instructors</h4>
            <p className="text-gray-700">
              Our team of certified and experienced instructors is here to guide you through every
              stage of your learning process.
            </p>
          </div>

          {/* Flexible Hours */}
          <div className="bg-red-50 rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4 text-4xl text-red-600">
              <FaClock />
            </div>
            <h4 className="text-xl font-semibold text-black-600 mb-3">Flexible Hours</h4>
            <p className="text-gray-700">
              We understand your busy schedule, which is why we offer flexible class times that work
              around you.
            </p>
          </div>

          {/* Excellent Support */}
          <div className="bg-red-50 rounded-lg shadow-lg p-6 text-center">
            <div className="mb-4 text-4xl text-red-600">
              <FaHeadset />
            </div>
            <h4 className="text-xl font-semibold text-black-600 mb-3">Excellent Support</h4>
            <p className="text-gray-700">
              Our customer support team is available to answer any questions or concerns you may
              have, ensuring a smooth learning experience.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <button className="bg-black text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-900">
            View Our Courses
          </button>
          <p className="text-gray-800 mt-4 text-lg">
            <span className="font-semibold">Have any questions?</span> Call us: 
            <FaPhoneAlt className="inline mr-2 text-red-600" />
            <strong> Phone:</strong>{' '}
            <a href="tel:+2519157297" className="hover:text-red-500">
                +251 (9) 1572-9756
            </a>
         </p>
        </div>
      </div>
    </section>
  );
};

export default About;
