import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import api from "../../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userInfo, setUserInfo] = useState();

  const [userToken, setUserToken] = useState(
    localStorage.getItem("token") || ""
  );

  const [userWallets, setUserWallets] = useState();

  const getUserWallets = () => {
    api
      .get("wallets/", {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      })
      .then((res) => setUserWallets(res.data));
  };

  const getUserInfos = (user_id) => {
    api
      .get(`users/${user_id}/`, {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      })
      .then((res) => setUserInfo(res.data));
  };

  useEffect(() => {
    getUserWallets();
    getUserInfos(localStorage.getItem("user_id"));
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userInfo,
        setUserInfo,
        userToken,
        setUserToken,
        userWallets,
        setUserWallets,
        getUserWallets,
        getUserInfos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
