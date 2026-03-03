import React from "react";
import Header from "../../others/Header";
import TaskLIstNumbers from "../../others/TaskLIstNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashBoard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskLIstNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashBoard;
