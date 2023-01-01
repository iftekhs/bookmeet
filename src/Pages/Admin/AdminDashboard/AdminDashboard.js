import React from 'react';

const AdminDashboard = () => {


  
  return (
    <section id="stat-cards">
      <div className="flex gap-10">
        <div className="w-72 bg-gradient-to-tr from-blue-500 to-blue-400 rounded px-3 py-4 text-white">
          <h2 className="text-1xl">Total Users</h2>
          <p className="text-3xl font-semibold">65</p>
        </div>
        <div className="w-72 bg-gradient-to-tr from-blue-500 to-blue-400 rounded px-3 py-4 text-white">
          <h2 className="text-1xl">Total Meetings</h2>
          <p className="text-3xl font-semibold">65</p>
        </div>
        <div className="w-72 bg-gradient-to-tr from-emerald-500 to-emerald-400 rounded px-3 py-4 text-white">
          <h2 className="text-1xl">Meetings Successfull</h2>
          <p className="text-3xl font-semibold">65</p>
        </div>
        <div className="w-72 bg-gradient-to-tr from-rose-500 to-rose-400 rounded px-3 py-4 text-white">
          <h2 className="text-1xl">Meetings Cancled</h2>
          <p className="text-3xl font-semibold">65</p>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
