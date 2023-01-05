import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { cl, config } from '../../../../Helpers/Helpers';

const BookingRow = ({ book }) => {
  const { _id, meetingId, createdAt } = book;
  const [meeting, setMeeting] = useState();

  useEffect(() => {
    axios.get(cl(`/meetings/${meetingId}`), config).then((data) => setMeeting(data.data));
  }, [meetingId]);

  console.log(meeting);

  return (
    <tr key={_id} className="bg-white border-b hover:bg-gray-50">
      <td className="py-4 px-6">{dayjs(createdAt).format('MMM D YYYY')}</td>
    </tr>
  );
};

export default BookingRow;
