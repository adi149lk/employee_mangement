import React, { useEffect, useState } from "react";
import Login from "./components/Auth/login";
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [loggedInUserData, SetloggedInUserData] = useState(null);
  const [user, setuser] = useState(null);
  const AuthData = useContext(AuthContext);
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setuser(loggedInUser.role);
      SetloggedInUserData(loggedInUser.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (
      AuthData &&
      AuthData.admin.find((e) => email == e.email && password == e.password)
    ) {
      const admin = AuthData.admin.find(
        (e) => email == e.email && password == e.password,
      );
      SetloggedInUserData(admin);
      setuser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin }),
      );
    } else if (AuthData) {
      const employee = AuthData.employees.find(
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
        <AdminDashBoard data={loggedInUserData} />
      ) : (
        <EmployeeDashBoard data={loggedInUserData} />
      )}
      {}
    </>
  );
};

export default App;
