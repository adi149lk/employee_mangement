import React from "react";

export const NewTask = ({ data }) => {
  return (
    <div className="h-full w-75 bg-red-500 rounded-xl shrink-0 p-5">
      <div className="flex items-center justify-between">
        <h3 className="bg-amber-700 px-3 py-1 rounded-sm text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="taxt-2xl mt-5 font-semibold">{data.taskTitle}</h2>
      <p className="mt-3 text-sm">{data.taskDescription}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm rounded">
          Accept Task
        </button>
      </div>
    </div>
  );
};
