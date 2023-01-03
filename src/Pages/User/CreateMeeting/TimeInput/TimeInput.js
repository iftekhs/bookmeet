import { TextField } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react';

const TimeInput = ({ initialStartTime, initialEndTime }) => {
  const [startTime, setStartTime] = useState(initialStartTime);
  const [endTime, setEndTime] = useState(initialEndTime);

  return (
    <div className="flex gap-3">
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
    </div>
  );
};

export default TimeInput;
