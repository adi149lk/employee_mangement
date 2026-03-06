import React from "react";

const Header = ({ data, suser }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    suser("");
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hellow <br />{" "}
        <span className="text-3xl font-semibold">{data.firstName}👋</span>
      </h1>
      <button
        className="bg-red-600 text-white text-lg font-medium px-5 py-3 rounded-sm"
        onClick={logOutUser}
      >
        Log Out{" "}
      </button>
    </div>
  );
};

export default Header;
