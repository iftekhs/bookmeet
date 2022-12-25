import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from '../LinkButton/LinkButton';

const Header = () => {
  return (
    <nav className="py-4 px-2 border fixed top-0 w-full bg-white">
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
            <LinkButton to="/signin">Sign In</LinkButton>
            <LinkButton to="/signup">Sign Up</LinkButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
