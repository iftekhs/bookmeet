import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LinkButton from '../LinkButton/LinkButton';
import Avatar from '../../../images/avatar.svg';
import useRole from '../../../hooks/useRole';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userRole] = useRole(user?.email);
  console.log(userRole);
  return (
    <nav className="py-4 px-2 border fixed top-0 w-full bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h2 className="text-4xl font-bold">
              Book
              <span className="text-blue-500">Meet</span>
            </h2>
          </Link>

          <ul className="flex gap-2 font-semibold">
            <li className="hover:text-blue-400 transition-all">
              <Link to="/">Home</Link>
            </li>
            {user && user.uid && userRole === 'admin' ? (
              <li className="hover:text-blue-400 transition-all">
                <Link to="/admin/dashboard">Dashboard</Link>
              </li>
            ) : (
              <li className="hover:text-blue-400 transition-all">
                <Link to="/my/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
          {user && user.uid ? (
            <div className="flex gap-2">
              <div className="relative cursor-pointer">
                <img
                  className="user-profile-pic w-10 h-10 rounded-full"
                  src={user.photoURL ? user.photoURL : Avatar}
                  alt="user"
                  height="60"
                />
              </div>
              <button
                onClick={logOut}
                className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all">
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <LinkButton to="/signin">Sign In</LinkButton>
              <LinkButton to="/signup">Sign Up</LinkButton>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
