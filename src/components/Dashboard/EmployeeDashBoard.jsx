import React from "react";
import Header from "../../others/Header";
import TaskLIstNumbers from "../../others/TaskLIstNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashBoard = ({ data, suser }) => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header data={data} suser={suser} />
      <TaskLIstNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashBoard;
