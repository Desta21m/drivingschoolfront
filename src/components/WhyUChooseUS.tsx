import React from "react";
import CountUp from "react-countup";
import { FaUserGraduate, FaSmile, FaBuilding, FaCertificate } from "react-icons/fa";

const WhyUChooseUs = () => {
  return (
    <section className="bg-gray-100 py-20 diagonal-divider">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-black mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Experience excellence with our driving school. Here's what sets us apart.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Students Per Year */}
          <div className="flex flex-col items-center">
            <FaUserGraduate className="text-red-600 text-5xl mb-4" />
            <h3 className="text-3xl font-bold text-black">
              <CountUp start={0} end={10000} duration={3} separator="," />+
            </h3>
            <p className="text-gray-700 mt-2">Students Per Year</p>
          </div>

          {/* Student Satisfaction */}
          <div className="flex flex-col items-center">
            <FaSmile className="text-red-600 text-5xl mb-4" />
            <h3 className="text-3xl font-bold text-black">
              <CountUp start={0} end={95} duration={3} suffix="%" />
            </h3>
            <p className="text-gray-700 mt-2">Student Satisfaction</p>
          </div>

          {/* Branches */}
          <div className="flex flex-col items-center">
            <FaBuilding className="text-red-600 text-5xl mb-4" />
            <h3 className="text-3xl font-bold text-black">
              <CountUp start={0} end={5} duration={3} />
            </h3>
            <p className="text-gray-700 mt-2">Branches</p>
          </div>

          {/* Certified Students */}
          <div className="flex flex-col items-center">
            <FaCertificate className="text-red-600 text-5xl mb-4" />
            <h3 className="text-3xl font-bold text-black">
              <CountUp start={0} end={85} duration={3} suffix="%" />
            </h3>
            <p className="text-gray-700 mt-2">Certified Students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUChooseUs;
