import { TextField } from '@mui/material';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { cl, config } from '../../Helpers/Helpers';
import './BookMeeting.css';

const BookMeeting = () => {
  const { data } = useLoaderData();
  const { _id, title, description, startDate, endDate } = data;
  const [date, setDate] = useState(dayjs());
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const convertedDate = new Date(date).toLocaleDateString().split('/').join('-');

  useEffect(() => {
    if (date) {
      axios.get(cl(`/meeting/${_id}/slots/${convertedDate}`), config).then((data) => {
        setSlots(data.data);
        if (!data.data.length) {
          setSelectedSlot(null);
        }
      });
    }
  }, [_id, date, convertedDate]);

  const handleSelect = (index) => {
    setError(null);
    setSelectedSlot(index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!date) {
      return;
    }

    if (!selectedSlot) {
      setError('Please select a slot');
      return;
    }

    const booking = {
      meetingId: _id,
      date: convertedDate,
      slot: selectedSlot,
    };

    axios.post(cl('/bookings'), booking, config).then((data) => {
      navigate('/my/bookings');
    });
  };

  const dayjsStartDate = dayjs(new Date(Number(startDate)).toString());
  const dayjsEndDate = dayjs(new Date(Number(endDate)).toString());

  const minDate = startDate ? (!dayjs().isAfter(dayjsStartDate) ? dayjsStartDate : dayjs()) : null;
  const maxDate = endDate ? dayjsEndDate : null;

  console.log();

  return (
    <section id="book-meeting">
      <div className="mh-100 bg-gradient-to-tr from-blue-500 to-blue-400 px-2 py-8 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-2/3 xl:w-2/4 rounded bg-white flex flex-col gap-5 px-2 py-5 text-center">
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-lg text-gray-500">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                minDate={minDate}
                maxDate={maxDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {slots.length > 0 ? (
              <div className="slots overflow-auto flex flex-col gap-4">
                {slots.map((slot) => (
                  <button
                    type="button"
                    key={slot._id}
                    onClick={() => handleSelect(slot._id)}
                    className={`bg-white px-4 py-2 rounded border-2 border-slate-900 ${
                      selectedSlot === slot._id && 'border-blue-500'
                    }`}>
                    {dayjs(slot.startTime).format('hh:mm A')} -{' '}
                    {dayjs(slot.endTime).format('hh:mm A')}
                  </button>
                ))}
              </div>
            ) : (
              <div className="h-72 flex items-center justify-center">
                No slots avaibale on this date!
              </div>
            )}
          </div>
          <p className="text-rose-500 mt-5">{error}</p>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookMeeting;
