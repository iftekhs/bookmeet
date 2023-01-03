import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Meeting from './Meeting/Meeting';

const UserMeetings = () => {
  return (
    <section id="meetings">
      <h2 className="text-2xl font-semibold">All Meetings</h2>
      <div className="mt-5">
        <div className="flex items-start">
          <Link
            to="/my/create-meeting"
            className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all flex items-center justify-center">
            <AiOutlinePlus className="text-1xl"></AiOutlinePlus>
            <span className="ml-1">Create Meeting</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          <Meeting
            title="React Interview"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat architecto
            cupiditate. psum dolor sit amet conse."></Meeting>

          <Meeting
            title="JavaScript Interview"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat architecto
          cupiditate. psum dolor sit amet conse."></Meeting>
        </div>
      </div>
    </section>
  );
};

export default UserMeetings;
