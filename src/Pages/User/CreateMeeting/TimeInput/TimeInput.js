import { TextField } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CiTrash } from 'react-icons/ci';
import React, { useState } from 'react';

const TimeInput = ({ initialStartTime, initialEndTime, index, removeSlot }) => {
  const [startTime, setStartTime] = useState(initialStartTime);
  const [endTime, setEndTime] = useState(initialEndTime);

  return (
    <div className="flex items-center gap-3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Start Date"
          value={startTime}
          onChange={(newStartTime) => {
            setStartTime(newStartTime);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="End Date"
          value={endTime}
          onChange={(newEndTime) => {
            setEndTime(newEndTime);
          }}
          minTime={startTime?.add(1, 'minute')}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <div>
        <button
          onClick={() => removeSlot(index)}
          className="inline-block  rounded p-2 bg-rose-500 hover:bg-rose-600 text-2xl transition-all">
          <CiTrash className="text-white"></CiTrash>
        </button>
      </div>
    </div>
  );
};

export default TimeInput;
