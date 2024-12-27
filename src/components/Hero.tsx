import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center">
          <div className="sm:w-1/2">
            <h1 className="relative mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
              Welcome to Skill<span className="text-red-500">Weel</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">
              - an innovative driving school management application!
            </p>
          </div>
          <div className="sm:w-1/2">
            <img
              src="src/assets/h1.png" // Replace with your image URL
              alt="SkillWeel"
              className="rounded-lg ml-8 sm:ml-16 lg:ml-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
