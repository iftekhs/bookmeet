import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { cl, config, showError } from '../../../../Helpers/Helpers';
import './Meeting.css';

const Meeting = ({ meeting }) => {
  const { _id, title, description, code } = meeting;

  const [linkText, setLinkText] = useState('Copy Link');

  const copyLink = (event) => {
    navigator.clipboard.writeText(event.target.value);
    setLinkText('Copied!');
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setLinkText('Copy Link');
    }, 1000);
  };

  const handleDelete = (event, id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this and all the bookings of this meeting will be deleted!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(cl(`/meetings/${id}`), config)
          .then((data) => {
            if (data.data.acknowledged) {
              event.target.parentNode.parentNode.remove();
              return swal('The meeting has been deleted!', {
                icon: 'success',
              });
            }
            showError();
          })
          .catch(() => {
            showError();
          });
      }
    });
  };

  return (
    <div className="border-t-8 border-t-blue-500 p-6 pb-3 pl-3 rounded border border-gray-300 flex flex-col justify-between items-start">
      <h2 className="text-1xl font-semibold">{title}</h2>
      <p className="mt-2 text-slate-500">{description}</p>
      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={copyLink}
          value={`${window.location.origin.toString()}/book/${code}`}
          className="text-sm whitespace-nowrap bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 transition-all">
          {linkText}
        </button>
        <Link
          to={`/meeting/${code}`}
          className="text-sm whitespace-nowrap bg-blue-500 px-4 py-2 rounded-full text-white hover:bg-blue-600 transition-all">
          View Details
        </Link>
        <button
          onClick={(event) => handleDelete(event, _id)}
          className="text-sm whitespace-nowrap bg-rose-500 px-4 py-2 rounded-full text-white hover:bg-rose-600 transition-all">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Meeting;
