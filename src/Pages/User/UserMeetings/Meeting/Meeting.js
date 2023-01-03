import React from 'react';
import { Link } from 'react-router-dom';
import './Meeting.css';

const Meeting = ({ title, description, code }) => {
  return (
    <div className="border-t-8 border-t-blue-500 p-6 pb-3 pl-3 rounded border border-gray-300 flex flex-col justify-between items-start">
      <h2 className="text-1xl font-semibold">{title}</h2>
      <p className="mt-2 text-slate-500">{description}</p>
      <div className="flex items-center gap-2 mt-4">
        <button className="text-sm whitespace-nowrap bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 transition-all">
          Copy Link
        </button>
        <Link
          to={`/`}
          className="text-sm whitespace-nowrap bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 transition-all">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Meeting;
