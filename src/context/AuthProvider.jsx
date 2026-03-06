import React, { createContext, useEffect, useReducer, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
export const AuthContext = createContext();
const reducer = (state, action) => {
  if (action.type == "All") {
    return action.payload;
  } else if (action.type == "emp") {
    return { ...state, employees: action.payload };
  }
};

const AuthProvider = ({ children }) => {
  const [userData, dispatch] = useReducer(reducer, null);
  // const [userData, setUserData] = useState(null);
  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    dispatch({
      type: "All",
      payload: { employees, admin },
    });

    // setUserData({ employees, admin });
  }, []);
  return (
    <AuthContext.Provider value={{ userData, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
