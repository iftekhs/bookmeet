import React from 'react';

const DefaultBtn = ({ children }) => {
  return (
    <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all">
      {children}
    </button>
  );
};

export default DefaultBtn;
