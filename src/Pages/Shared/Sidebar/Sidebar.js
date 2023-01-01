import React from 'react';

const Sidebar = ({ children }) => {
  return (
    <aside className="bg-gradient-to-tr from-blue-500 to-blue-400 py-8 px-3 w-64 mh-100">
      <div className="flex items-start flex-col gap-4 w-9/12">{children}</div>
    </aside>
  );
};

export default Sidebar;
