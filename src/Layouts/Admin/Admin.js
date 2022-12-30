import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Pages/Shared/Sidebar/Sidebar';

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <main className="p-6 mh-100 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
