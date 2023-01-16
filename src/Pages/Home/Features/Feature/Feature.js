import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

const Feature = ({ title, text }) => {
  return (
    <div className="w-3/4">
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <p className="text-1xl mb-5 text-cgray">{text}</p>
      <a className="text-blue-500 underline flex items-center" href="/">
        Learn More <BiRightArrowAlt></BiRightArrowAlt>
      </a>
    </div>
  );
};

export default Feature;
