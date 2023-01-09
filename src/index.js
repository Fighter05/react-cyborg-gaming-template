import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar,Footer } from "./components";
import {
  Home,
  Browse,
  Details,
  Streams,
  Profile
} from "./pages";

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route index path="react-cyborg-gaming-template/" element={<Home />} />
      <Route path="react-cyborg-gaming-template/browse" element={<Browse />} />
      <Route path="react-cyborg-gaming-template/details" element={<Details />} />
      <Route path="react-cyborg-gaming-template/streams" element={<Streams />} />
      <Route path="react-cyborg-gaming-template/profile" element={<Profile />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

