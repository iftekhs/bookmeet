import React from 'react';
import CTA from './CTA/CTA';
import Features from './Features/Features';
import Hero from './Hero/Hero';
import Trusted from './Trusted/Trusted';

const Home = () => {
  return (
    <div id="home">
      <Hero></Hero>
      <Trusted></Trusted>
      <Features></Features>
      <CTA></CTA>
    </div>
  );
};

export default Home;
