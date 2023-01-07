import React, { useState } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import TimeInput from './TimeInput/TimeInput';
import { AiOutlinePlus } from 'react-icons/ai';
import axios from 'axios';
import { cl, config, showError } from '../../../Helpers/Helpers';
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
    const link = form.link.value;
    const description = form.description.value;
    const futureDates = !customDateRange;
    const defaultSlots = [
      {
        startTime: 1672768800000,
        endTime: 1672770600000,
      },
      {
        startTime: 1672770600000,
        endTime: 1672772400000,
      },
      {
        startTime: 1672774200000,
        endTime: 1672776000000,
      },
      {
        startTime: 1672777800000,
        endTime: 1672779600000,
      },
      {
        startTime: 1672781400000,
        endTime: 1672783200000,
      },
      {
        startTime: 1672785000000,
        endTime: 1672786800000,
      },
      {
        startTime: 1672788600000,
        endTime: 1672790400000,
      },
      {
        startTime: 1672792200000,
        endTime: 1672794000000,
      },
      {
        startTime: 1672795800000,
        endTime: 1672797600000,
      },
      {
        startTime: 1672799400000,
        endTime: 1672801200000,
      },
      {
        startTime: 1672803000000,
        endTime: 1672804800000,
      },
      {
        startTime: 1672806600000,
        endTime: 1672808400000,
      },
      {
        startTime: 1672810200000,
        endTime: 1672811940000,
      },
      {
        startTime: 1672812000000,
        endTime: 1672813740000,
      },
      {
        startTime: 1672813800000,
        endTime: 1672815600000,
      },
      {
        startTime: 1672817400000,
        endTime: 1672819200000,
      },
      {
        startTime: 1672821000000,
        endTime: 1672822800000,
      },
      {
        startTime: 1672824600000,
        endTime: 1672826400000,
      },
      {
        startTime: 1672828200000,
        endTime: 1672830000000,
      },
      {
        startTime: 1672831800000,
        endTime: 1672833600000,
      },
      {
        startTime: 1672835400000,
        endTime: 1672837200000,
      },
      {
        startTime: 1672839000000,
        endTime: 1672840800000,
      },
      {
        startTime: 1672842600000,
        endTime: 1672844400000,
      },
      {
        startTime: 1672846200000,
        endTime: 1672848000000,
      },
      {
        startTime: 1672849800000,
        endTime: 1672851600000,
      },
      {
        startTime: 1672853400000,
        endTime: 1672855140000,
      },
    ];

    const timeSlots = customSlots ? slots : defaultSlots;

    const meeting = {
      title,
      link,
      description,
      startDate: new Date(startDate).getTime(),
      endDate: new Date(endDate).getTime(),
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
        slot.startTime = new Date(slot.startTime).getTime();
        slot.endTime = new Date(slot.endTime).getTime();
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
        showError();
      })
      .catch(() => {
        showError();
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
          <div className="flex flex-col mt-5 w-full">
            <label htmlFor="link">Meeting Link</label>
            <input
              id="link"
              name="link"
              type="text"
              required
              className="text-sm p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"
            />
          </div>

          <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-all mt-5">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateMeeting;
