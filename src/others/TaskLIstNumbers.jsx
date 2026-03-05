import React from "react";

const TaskLIstNumbers = ({ data }) => {
  return (
    <div className="flex screen justify-between gap-5 mt-10 ">
      <div className="px-9 py-6 rounded-xl w-[45%] bg-red-400">
        <h1 className="text-2xl font-semibold">{data.taskCounts.newTask}</h1>
        <h2 className="text-xl font-medium"> New Task</h2>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-blue-400">
        <h1 className="text-2xl font-semibold">{data.taskCounts.completed}</h1>
        <h2 className="text-xl font-medium"> Completed</h2>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-green-400">
        <h1 className="text-2xl font-semibold">{data.taskCounts.active}</h1>
        <h2 className="text-xl font-medium"> Accepted</h2>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-yellow-400">
        <h1 className="text-2xl font-semibold">{data.taskCounts.failed}</h1>
        <h2 className="text-xl font-medium">Failed</h2>
      </div>
    </div>
  );
};

export default TaskLIstNumbers;
