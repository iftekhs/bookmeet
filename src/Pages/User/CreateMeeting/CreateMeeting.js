import React from 'react';

const CreateMeeting = () => {
  // title
  // description
  // startDate
  // endDate
  // futureDates
  // slots
  // code

  return (
    <section id="create-meeting">
      <h2 className="text-2xl font-semibold">Create a meeting</h2>
      <div className="mt-5">
        <form onSubmit={() => {}}>
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
              className="text-sm p-2 mt-1 rounded focus:border-blue-00 w-full outline-none border"></textarea>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateMeeting;
