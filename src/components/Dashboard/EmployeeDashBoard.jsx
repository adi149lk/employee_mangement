import React from "react";
import Header from "../../others/Header";
import TaskLIstNumbers from "../../others/TaskLIstNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashBoard = ({ data }) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header data={data} />
      <TaskLIstNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashBoard;
