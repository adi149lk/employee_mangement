import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";

const AdminDashBoard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen w-full">
      <Header />
      <CreateTask />
    </div>
  );
};

export default AdminDashBoard;
