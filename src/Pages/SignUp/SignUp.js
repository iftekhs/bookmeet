import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
  return (
    <section className="bg-gradient-to-tr from-blue-400 to-blue-500 px-2">
      <div className="mh-100  flex items-center justify-center">
        <div className="auth-form bg-white flex items-center justify-center flex-col w-full rounded p-4 max-w-2xl">
          <form>
            <h2 className="text-4xl text-center font-bold">
              Book
              <span className="text-blue-500">Meet</span>
            </h2>
            <p className="mt-3 text-cgray text-center">
              Sign Up to BookMeet to manage your meetings in a very simplified way
            </p>
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                required
                id="name"
                className="p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
              />
            </div>
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="photoURL">Your Photo URL</label>
              <input
                name="photoURL"
                type="text"
                required
                id="photoURL"
                className="p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
              />
            </div>
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                required
                id="email"
                className="p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
              />
            </div>
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="password">Password</label>
              <input
                name="passwords"
                type="password"
                required
                id="password"
                className="p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
              />
            </div>
            <button className="mt-5 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all">
              Sign Up
            </button>

            <button className="flex items-center justify-center gap-2 mt-5 p-2 py-3 rounded border w-full transition-all hover:bg-gray-100">
              <FaGoogle></FaGoogle>
              Sign In using Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
