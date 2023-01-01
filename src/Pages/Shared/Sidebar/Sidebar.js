import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';

const Sidebar = () => {
  const sidebarLinkStyles =
    'text-white hover:bg-white hover:text-slate-900 transition-all py-2 pl-3 pr-5 rounded';

  return (
    <aside className="bg-gradient-to-tr from-blue-500 to-blue-400 py-8 px-3 w-64">
      <div className="flex items-start flex-col gap-4">
        <NavLink
          end
          className={({ isActive }) => {
            const activeStyles = isActive ? 'bg-white text-slate-900' : '';
            return activeStyles + sidebarLinkStyles;
          }}
          to="/admin/dashboard">
          <div className="flex items-center justify-center gap-2 ">
            <MdOutlineDashboard></MdOutlineDashboard> Dashboard
          </div>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
