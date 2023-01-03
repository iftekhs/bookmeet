import React, { useCallback, useState } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import TimeInput from './TimeInput/TimeInput';
import { AiOutlinePlus } from 'react-icons/ai';

const CreateMeeting = () => {
  // title
  // description
  // startDate
  // endDate
  // futureDates
  // slots
  // code
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [customDateRange, setCustomDateRange] = useState(false);
  const [customSlots, setCustomSlots] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [slots, setSlots] = useState([
    {
      startTime: null,
      endTime: null,
    },
  ]);

  const addSlot = () => {
    setSlots([...slots, { startTime: null, endTime: null }]);
  };

  const updateSlot = ({ index, startTime = null, endTime = null }) => {
    const newArray = [...slots];
    newArray[index] = { startTime, endTime };
    setSlots(newArray);
  };

  const removeSlot = (index) => {
    const rest = slots.filter((item, idx) => idx !== index);
    setSlots(rest);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const futureDates = !customDateRange;
    const timeSlots = customSlots ? slots : [];
    const meeting = {
      title,
      description,
      futureDates,
      slots: timeSlots,
    };
    if (customDateRange) {
      if (!startDate || !endDate) {
        console.log('date range required');
        return false;
      }
    }
    if (customSlots) {
      let isEmpty = false;
      slots.map((slot) => {
        if (!slot.startTime || !slot.endTime) {
          isEmpty = true;
        }
        return true;
      });
      if (isEmpty) {
        return false;
      }
    }

    console.log('passed');
    console.log(meeting);
  };

  return (
    <section id="create-meeting">
      <h2 className="text-2xl font-semibold">Create a meeting</h2>
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-5 w-full">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className="text-sm p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
            />
          </div>
          <div className="flex flex-col mt-5 w-full">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              cols="30"
              rows="5"
              required
              className="text-sm p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"></textarea>
          </div>
          <div className="mt-5 flex gap-4">
            <button
              type="button"
              onClick={() => setCustomDateRange(false)}
              className={`px-4 py-3 rounded border-2 border-slate-900 ${
                !customDateRange && 'border-blue-500'
              }`}>
              Future Dates
            </button>
            <button
              type="button"
              onClick={() => setCustomDateRange(true)}
              className={`px-4 py-3 rounded border-2 border-slate-900 ${
                customDateRange && 'border-blue-500'
              }`}>
              Custom Range
            </button>
          </div>
          {customDateRange && (
            <>
              <div className="mt-5">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Start Date"
                    value={startDate}
                    onChange={(newValue) => {
                      setStartDate(newValue);
                    }}
                    minDate={dayjs()}
                    renderInput={(params) => <TextField {...params} />}
                    onError={() => setDateError(true)}
                  />
                </LocalizationProvider>
              </div>
              <div className="mt-5">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    required
                    label="End Date"
                    value={endDate}
                    onChange={(newValue) => {
                      setEndDate(newValue);
                    }}
                    minDate={startDate?.add(1, 'day') || dayjs()}
                    renderInput={(params) => <TextField {...params} />}
                    onError={() => setDateError(true)}
                  />
                </LocalizationProvider>
              </div>
            </>
          )}
          <div className="mt-5 flex gap-4">
            <button
              type="button"
              onClick={() => setCustomSlots(false)}
              className={`px-4 py-3 rounded border-2 border-slate-900 ${
                !customSlots && 'border-blue-500'
              }`}>
              All Times
            </button>
            <button
              type="button"
              onClick={() => setCustomSlots(true)}
              className={`px-4 py-3 rounded border-2 border-slate-900 ${
                customSlots && 'border-blue-500'
              }`}>
              Custom Times
            </button>
          </div>
          {customSlots && (
            <div className="mt-5">
              <button
                type="button"
                onClick={addSlot}
                className="flex items-center gap-1 bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all">
                Add
                <AiOutlinePlus></AiOutlinePlus>
              </button>
              <div className="flex flex-col gap-5 mt-5">
                {slots.map((slot, index) => (
                  <TimeInput
                    key={index}
                    index={index}
                    initialStartTime={slot.startTime}
                    initialEndTime={slot.endTime}
                    updateSlot={updateSlot}
                    removeSlot={removeSlot}
                    setTimeError={setTimeError}></TimeInput>
                ))}
              </div>
            </div>
          )}
          <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all mt-5">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateMeeting;
