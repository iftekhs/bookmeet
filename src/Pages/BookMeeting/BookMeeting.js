import { TextField } from '@mui/material';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { cl, config } from '../../Helpers/Helpers';
import './BookMeeting.css';

const BookMeeting = () => {
  const { data } = useLoaderData();
  const { title, description, startDate, endDate } = data;
  const [date, setDate] = useState(dayjs());
  const [slots, setSlots] = useState([]);

  return (
    <section id="book-meeting">
      <div className="mh-100 bg-gradient-to-tr from-blue-500 to-blue-400 px-2 flex items-center justify-center">
        <div className="w-2/4 rounded bg-white flex flex-col gap-5 px-2 py-5 text-center">
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-lg text-gray-500">{description}</p>
          </div>
          <div className="flex items-start justify-center gap-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                minDate={(startDate && dayjs(startDate)) || dayjs()}
                maxDate={(endDate && dayjs(endDate)) || null}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <div className="slots overflow-auto flex flex-col gap-4">
              {slots.map((slot, index) => (
                <button
                  key={index}
                  className="bg-white px-4 py-2 rounded border-2 border-slate-900">
                  {dayjs(slot.startTime).format('hh:mm A')} -{' '}
                  {dayjs(slot.endTime).format('hh:mm A')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookMeeting;
