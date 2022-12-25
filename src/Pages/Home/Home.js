import React from 'react';
import Hero from './Hero/Hero';
import Trusted from './Trusted/Trusted';

const Home = () => {
  return (
    <div id="home" className="px-2">
      <Hero></Hero>
      <Trusted></Trusted>
    </div>
  );
};

export default Home;
