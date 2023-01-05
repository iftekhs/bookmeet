import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { cl, config } from '../../../Helpers/Helpers';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(cl('/bookings'), config).then((data) => setBookings(data.data));
  }, []);
  console.log(bookings);

  return (
    <section id="bookings">
      <h2 className="text-2xl font-semibold">All Bookings</h2>
      <div className="mt-5">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Booked At
                </th>
                <th scope="col" className="py-3 px-6">
                  Meeting Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Meeting Link
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {users.map((user) => (
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
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Bookings;
