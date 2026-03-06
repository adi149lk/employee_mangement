import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const { userData } = useContext(AuthContext);
  const { employees } = userData;

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-50 ">
      <div className="bg-amber-500 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 bg-blue-500 text-center">Employee name</h2>
        <h3 className="w-1/5 bg-red-500 text-center">New Task</h3>
        <h5 className="w-1/5 bg-green-500 text-center">Active</h5>
        <h5 className="w-1/5 bg-sky-500 text-center">Completed</h5>
        <h5 className="w-1/5 bg-yellow-500 text-center">Failed</h5>
      </div>
      <div>
        {employees.map((elem, idx) => {
          return (
            <div
              className=" mb-2 py-2 px-4 flex justify-between rounded border-2"
              key={idx}
            >
              <h2 className="w-1/5 bg-purple-600 text-center">
                {elem.firstName}
              </h2>
              <h3 className="w-1/5 bg-red-600 text-center">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="w-1/5 bg-green-600 text-center">
                {elem.taskCounts.active}
              </h5>
              <h5 className="w-1/5 bg-sky-600 text-center">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 bg-yellow-600 text-center">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
