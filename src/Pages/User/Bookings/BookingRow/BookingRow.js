import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { cl, config } from '../../../../Helpers/Helpers';

const BookingRow = ({ book }) => {
  const { _id, meetingId, slot, createdAt } = book;
  const [meeting, setMeeting] = useState();

  useEffect(() => {
    axios.get(cl(`/meetings/${meetingId}`), config).then((data) => setMeeting(data.data));
  }, [meetingId]);

  return (
    <tr key={_id} className="bg-white border-b hover:bg-gray-50">
      <td className="py-4 px-6">{dayjs(createdAt).format('MMM D YYYY')}</td>
      <td className="py-4 px-6">{meeting?.title}</td>
      <td className="py-4 px-6">
        {dayjs(slot.startTime).format('hh:mm A')} - {dayjs(slot.endTime).format('hh:mm A')}
      </td>
      <td className="py-4 px-6">
        <a
          target="_blank"
          className="cursor-pointer text-blue-500 hover:underline"
          rel="noreferrer"
          href={meeting?.link}>
          Join Now
        </a>
      </td>
      <td className="py-4 px-6">
        <button className="bg-rose-500 text-white px-5 py-2 rounded-full">Delete</button>
      </td>
    </tr>
  );
};

export default BookingRow;
