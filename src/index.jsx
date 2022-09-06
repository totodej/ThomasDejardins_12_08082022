import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Error from "./pages/Error";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <SideBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);
