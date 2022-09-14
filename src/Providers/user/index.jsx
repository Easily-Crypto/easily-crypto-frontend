import { createContext, useContext, useEffect, useState } from "react";

import api from "../../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const userId = JSON.parse(localStorage.getItem('user_id'))

  const getUserInfo = () => {
    api
    .get(`users/${userId}/`)
    .then((res) => setUserId(res.data))
  };

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, getUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
