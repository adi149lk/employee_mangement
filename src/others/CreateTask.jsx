import React from "react";

const CreateTask = () => {
  return (
    <div className="p-7  mt-10 bg-[#1c1c1c] rounded">
      <form className="flex w-full flex-wrap items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="mb-0.5 text-gray-500 text-sm"> Task title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent mb-4 border border-gray-400"
              type="text"
              placeholder="make a ui design"
            />
          </div>
          <div>
            <h3 className="mb-0.5 text-gray-500 text-sm">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent mb-4 border border-gray-400"
              type="date"
            />
          </div>
          <div>
            <h3 className="mb-0.5 text-gray-500 text-sm">Assign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent mb-4 border border-gray-400"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="mb-0.5 text-gray-500 text-sm">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent mb-4 border border-gray-400"
              type="text"
              placeholder="design,dev,etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="mb-0.5 text-gray-500 text-sm">Description</h3>
          <textarea
            className="h-44 w-full text-sm py-2 px-4   rounded outline-none bg-transparent mb-4 border border-gray-400"
            name=""
            id=""
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full">
            create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
