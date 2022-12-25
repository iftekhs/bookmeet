import React from 'react';
import banner from '../../../images/banner.jpg';
import DefaultBtn from '../../Shared/DefaultBtn/DefaultBtn';
import './Hero.css';

const Hero = () => {
  return (
    <section className="pt-40">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          <div>
            <h1 className="text-5xl font-semibold leading-snug">
              BookMeet - A meeting scheduling platform to manage your meetings smoothly
            </h1>
            <p className="mt-5 text-cgray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eaque nemo,
              aliquam, amet odit rem ipsum minus alias ratione, voluptatum doloribus? Ex iure iste
              quae ducimus suscipit aliquam vel aperiam?
            </p>
            <div className="mt-5">
              <DefaultBtn>Get Started</DefaultBtn>
            </div>
          </div>
          <img className="lg:w-1/2 rounded" src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
