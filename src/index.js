import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Footer,
  Home,
  Browse,
  Details,
  Streams,
  Profile
} from "./components";

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/details" element={<Details />} />
      <Route path="/streams" element={<Streams />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

