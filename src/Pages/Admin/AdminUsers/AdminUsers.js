import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { cl, config, showError } from '../../../Helpers/Helpers';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const handleDelete = (event, id) => {
    const button = event.target;
    const tr = button.parentNode.parentNode;
    tr.classList.add('opacity-50');
    button.disabled = true;
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this and all the bookings of this user will be deleted!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(cl(`/users/${id}`), config)
          .then((data) => {
            if (data.data.acknowledged) {
              tr.remove();
              return swal('The user has been deleted!', {
                icon: 'success',
              });
            }
            showError();
          })
          .catch(() => {
            showError();
          })
          .finally(() => {
            tr.classList.remove('opacity-50');
            button.disabled = false;
          });
      } else {
        tr.classList.remove('opacity-50');
        button.disabled = false;
      }
    });
  };

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
                    <button
                      onClick={(event) => handleDelete(event, user._id)}
                      className="bg-rose-500 text-white px-5 py-2 rounded-full">
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
