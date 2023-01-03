import React, { useState } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import TimeInput from './TimeInput/TimeInput';
import { AiOutlinePlus } from 'react-icons/ai';
import axios from 'axios';
import { cl, config } from '../../../Helpers/Helpers';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const CreateMeeting = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [customDateRange, setCustomDateRange] = useState(false);
  const [customSlots, setCustomSlots] = useState(false);
  const [slots, setSlots] = useState([
    {
      startTime: null,
      endTime: null,
    },
  ]);

  const navigate = useNavigate();

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
    const timeSlots = customSlots
      ? slots
      : [
          {
            startTime: 'Tue, 03 Jan 2023 18:00:00 GMT',
            endTime: 'Tue, 03 Jan 2023 18:30:00 GMT',
          },
          {
            startTime: 'Tue, 03 Jan 2023 18:30:00 GMT',
            endTime: 'Tue, 03 Jan 2023 19:00:00 GMT',
          },
          {
            startTime: 'Tue, 03 Jan 2023 19:30:00 GMT',
            endTime: 'Tue, 03 Jan 2023 20:00:00 GMT',
          },
          {
            startTime: 'Tue, 03 Jan 2023 20:30:00 GMT',
            endTime: 'Tue, 03 Jan 2023 21:00:00 GMT',
          },
          {
            startTime: 'Tue, 03 Jan 2023 21:30:00 GMT',
            endTime: 'Tue, 03 Jan 2023 22:00:00 GMT',
          },
          {
            startTime: 'Tue, 03 Jan 2023 22:30:00 GMT',
            endTime: 'Tue, 03 Jan 2023 23:00:00 GMT',
          },
          {
            startTime: 'Tue, 03 Jan 2023 23:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 00:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 00:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 01:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 01:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 02:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 02:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 03:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 03:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 04:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 04:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 05:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 05:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 05:59:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 06:00:00 GMT',
            endTime: 'Wed, 04 Jan 2023 06:29:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 06:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 07:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 07:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 08:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 08:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 09:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 09:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 10:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 10:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 11:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 11:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 12:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 12:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 13:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 13:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 14:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 14:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 15:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 15:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 16:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 16:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 17:00:00 GMT',
          },
          {
            startTime: 'Wed, 04 Jan 2023 17:30:00 GMT',
            endTime: 'Wed, 04 Jan 2023 17:59:00 GMT',
          },
        ];

    const meeting = {
      title,
      description,
      startDate,
      endDate,
      futureDates,
      slots: timeSlots,
    };

    if (customDateRange) {
      if (!startDate || !endDate || dayjs(startDate).isAfter(endDate)) {
        return false;
      }
    }
    if (customSlots) {
      let hasError = false;
      slots.map((slot) => {
        if (!slot.startTime || !slot.endTime || dayjs(slot.startTime).isAfter(slot.endTime)) {
          return (hasError = true);
        }
        slot.startTime = slot.startTime.toString();
        slot.endTime = slot.endTime.toString();
        return true;
      });
      if (hasError) {
        return false;
      }
    }

    axios
      .post(cl('/meetings'), meeting, config)
      .then((data) => {
        console.log(data.data);
        if (data.data.acknowledged) {
          form.reset();
          navigate('/my/meetings');
          return;
        }
        swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>',
        });
      })
      .catch(() => {
        swal({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
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
                    removeSlot={removeSlot}></TimeInput>
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
