import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import './SignIn.css';

const SignIn = () => {
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
              Sign In to your account using your credentials to manage your meetings
            </p>
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                className="p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
              />
            </div>
            <div className="flex flex-col mt-5 w-full">
              <label htmlFor="email">Password</label>
              <input
                type="password"
                required
                className="p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
              />
            </div>
            <button className="mt-5 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all">
              Sign In
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

export default SignIn;
