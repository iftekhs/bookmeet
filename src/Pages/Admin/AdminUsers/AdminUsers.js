import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { cl, config } from '../../../Helpers/Helpers';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(cl('/users'), config).then((data) => setUsers(data.data));
  }, []);

  return (
    <section id="users">
      <h2 className="text-2xl font-semibold">All Users</h2>
      <div className="mt-5">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Picture
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>

                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="bg-white border-b hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                  </td>
                  <td className="py-4 px-6">{user.name}</td>
                  <td className="py-4 px-6">{user.email}</td>
                  <td className="py-4 px-6">
                    <button className="bg-rose-500 text-white px-5 py-2 rounded-full">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminUsers;
