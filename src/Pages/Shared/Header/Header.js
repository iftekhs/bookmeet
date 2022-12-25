import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="py-4 px-2 border ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold">
            Book
            <span className="text-blue-500">Meet</span>
          </h2>
          <ul className="flex gap-2 font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <div className="flex gap-2">
            <Link to="/login" className="bg-blue-500 px-4 py-2 rounded text-white">
              Sign In
            </Link>
            <Link to="/login" className="bg-blue-500 px-4 py-2 rounded text-white">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
