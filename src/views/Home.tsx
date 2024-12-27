import React from 'react';
import Hero from '../components/Hero';
import WhyUChooseUs from '../components/WhyUChooseUS';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero/>
      <WhyUChooseUs />
      <Courses />
      <Testimonials />
    </>
  );
};

export default Home;
