import { TextField } from '@mui/material';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BsTrash } from 'react-icons/bs';
import React, { useState } from 'react';

const TimeInput = ({ index, initialStartTime, initialEndTime, updateSlot, removeSlot }) => {
  const [startTime, setStartTime] = useState(initialStartTime);
  const [endTime, setEndTime] = useState(initialEndTime);

  return (
    <div className="flex items-center gap-3">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Start Date"
          value={startTime}
          onChange={(newStartTime) => {
            updateSlot({ index, startTime: newStartTime, endTime });
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
            updateSlot({ index, startTime, endTime: newEndTime });
            setEndTime(newEndTime);
          }}
          minTime={startTime?.add(1, 'minute')}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <div>
        <button
          type="button"
          onClick={() => removeSlot(index)}
          className="inline-block  rounded p-2 bg-rose-500 hover:bg-rose-600 text-1xl transition-all text-white">
          <BsTrash></BsTrash>
        </button>
      </div>
    </div>
  );
};

export default React.memo(TimeInput);
