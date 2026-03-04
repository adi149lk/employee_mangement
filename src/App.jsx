import React, { useEffect, useState } from "react";
import Login from "./components/Auth/login";
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState(null);
  const AuthData = useContext(AuthContext);
  const handleLogin = (email, password) => {
    if (
      AuthData &&
      AuthData.admin.find((e) => email == e.email && password == e.password)
    ) {
      setuser("admin");
    } else if (
      AuthData &&
      AuthData.employees.find((e) => email == e.email && password == e.password)
    ) {
      setuser("employee");
    } else {
      alert("invaild credential");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashBoard />
      ) : (
        <EmployeeDashBoard />
      )}
      {}
    </>
  );
};

export default App;
