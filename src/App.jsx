import React, { useEffect, useState } from "react";
import Login from "./components/Auth/login";
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [loggedInUserData, SetloggedInUserData] = useState(null);
  const [user, setuser] = useState(null);
  const { userData, dispatch } = useContext(AuthContext);
  useEffect(() => {
    const loggedInUse = localStorage.getItem("loggedInUser");

    if (loggedInUse) {
      const loggedInUser = JSON.parse(loggedInUse);
      setuser(loggedInUser.role);
      SetloggedInUserData(loggedInUser.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (
      userData &&
      userData.admin.find((e) => email == e.email && password == e.password)
    ) {
      const admin = userData.admin.find(
        (e) => email == e.email && password == e.password,
      );
      SetloggedInUserData(admin);
      setuser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin }),
      );
    } else if (userData) {
      const employee = userData.employees.find(
        (e) => email == e.email && password == e.password,
      );
      if (employee) {
        SetloggedInUserData(employee);
        setuser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
      }
    } else {
      alert("invaild credential");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashBoard
          data={loggedInUserData}
          suser={setuser}
          dispatch={dispatch}
        />
      ) : (
        <EmployeeDashBoard data={loggedInUserData} suser={setuser} />
      )}
      {}
    </>
  );
};

export default App;
