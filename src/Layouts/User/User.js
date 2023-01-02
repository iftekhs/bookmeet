import React from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from '../../Pages/Shared/Sidebar/Sidebar';

const User = () => {
  const sidebarLinkStyles =
    'text-white hover:bg-white hover:text-slate-900 transition-all py-2 pl-3 pr-5 rounded w-full';
  return (
    <div className="flex">
      <Sidebar>
        <NavLink
          end
          className={({ isActive }) => {
            const activeStyles = isActive ? 'bg-white text-slate-900' : '';
            return activeStyles + sidebarLinkStyles;
          }}
          to="/my/meetings">
          <div className="flex items-center justify-start gap-2">
            <MdOutlineDashboard></MdOutlineDashboard> Meetings
          </div>
        </NavLink>
      </Sidebar>
      <main className="p-6 mh-100 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default User;
