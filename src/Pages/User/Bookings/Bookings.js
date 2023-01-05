import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { cl, config } from '../../../Helpers/Helpers';
import BookingRow from './BookingRow/BookingRow';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get(cl('/bookings'), config).then((data) => setBookings(data.data));
  }, []);

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
              {bookings.map((book) => (
                <BookingRow key={book._id} book={book}></BookingRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Bookings;
