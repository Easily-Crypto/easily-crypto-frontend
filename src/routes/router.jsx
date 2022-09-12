import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
    </Routes>
  );
};

export default Router;
