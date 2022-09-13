import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Market from "../pages/Market";
import Wallets from "../pages/wallets";
import Profile from "../pages/profile";

const Router = () => {
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken"));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/market" element={<Market />} />
      <Route path="/wallets" element={<Wallets />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Router;
