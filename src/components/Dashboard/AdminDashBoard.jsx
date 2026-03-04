import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";

const AdminDashBoard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen w-full">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashBoard;
