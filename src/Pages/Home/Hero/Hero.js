import React from 'react';
import banner from '../../../images/banner.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="pt-20 lg:pt-48 text-center lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          <div>
            <h1 className="text-5xl font-semibold leading-snug">
              BookMeet - A meeting scheduling platform to manage your meetings smoothly
            </h1>
            <p className="mt-5 text-cgray">
              BookMeet is a meetings management platform that helps you manage all your meetings in
              a simplified way. We have a user dashboard that will help you manage your meetings for
              example cancling meeting, rescheduling meeting etc.
            </p>
            <div className="mt-5">
              <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all">
                Get Started
              </button>
            </div>
          </div>
          <img className="lg:w-1/2 rounded" src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
