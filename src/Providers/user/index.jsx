import { createContext, useContext, useEffect, useState } from "react";

import api from "../../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [userInfo, setUserInfo] = useState();
  const [userWallets, setUserWallets] = useState();

  const userId = JSON.parse(localStorage.getItem('user_id'))

  const getUserWallets = () => {
    api
      .get("http://localhost:8000/api/wallets/")
      .then((res) => setUserWallets(res.data));
  };
  
  const getUserInfo = () => {
    api
    .get(`users/${userId}/`)
    .then((res) => setUserId(res.data))

  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        userWallets,
        setUserWallets,
        getUserWallets,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
