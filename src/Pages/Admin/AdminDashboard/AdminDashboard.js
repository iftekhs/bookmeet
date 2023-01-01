import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { cl, config } from '../../../Helpers/Helpers';

const AdminDashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalMeetings, setTotalMeetings] = useState(0);
  const [totalSuccessfull, setTotalSuccessfull] = useState(0);
  const [totalCancled, setTotalCancled] = useState(0);

  // ------------------------ Get total users count -----------------------------------
  useEffect(() => {
    axios.get(cl('/users/count'), config).then((data) => setTotalUsers(data.data.count));
  }, []);
  // ------------------------ Get total users count -----------------------------------
  return (
    <section id="stat-cards">
      <div className="flex gap-10 flex-wrap">
        <div className="w-72 bg-gradient-to-tr from-blue-500 to-blue-400 rounded px-3 py-4 text-white">
          <h2 className="text-1xl">Total Users</h2>
          <p className="text-3xl font-semibold">{totalUsers}</p>
        </div>
        <div className="w-72 bg-gradient-to-tr from-blue-500 to-blue-400 rounded px-3 py-4 text-white">
          <h2 className="text-1xl">Total Meetings</h2>
          <p className="text-3xl font-semibold">{totalMeetings}</p>
        </div>
        <div className="w-72 bg-gradient-to-tr from-emerald-500 to-emerald-400 rounded px-3 py-4 text-white">
          <h2 className="text-1xl">Meetings Successfull</h2>
          <p className="text-3xl font-semibold">{totalSuccessfull}</p>
        </div>
        <div className="w-72 bg-gradient-to-tr from-rose-500 to-rose-400 rounded px-3 py-4 text-white">
          <h2 className="text-1xl">Meetings Cancled</h2>
          <p className="text-3xl font-semibold">{totalCancled}</p>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
