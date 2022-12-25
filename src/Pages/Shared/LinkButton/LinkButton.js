import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all">
      {children}
    </Link>
  );
};

export default LinkButton;
