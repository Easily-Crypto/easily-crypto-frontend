import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Router from "./routes/router";

function App() {
  
  return (
    <div className="App">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
