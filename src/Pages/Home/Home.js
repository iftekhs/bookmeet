import React from 'react';
import Features from './Features/Features';
import Hero from './Hero/Hero';
import Trusted from './Trusted/Trusted';

const Home = () => {
  return (
    <div id="home" className="px-2">
      <Hero></Hero>
      <Trusted></Trusted>
      <Features></Features>
    </div>
  );
};

export default Home;
