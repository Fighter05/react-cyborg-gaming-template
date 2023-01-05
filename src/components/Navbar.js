import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import profile from './assets/images/profile-header.jpg';
import logo from './assets/images/logo.png';
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink className="nav-logo" to="/">
            <img src={logo} alt="" />
        </NavLink>
        <div className="nav-search-box">
          <input type="text" placeholder='Type Something' />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <ul>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <Link to="/browse">
              Browse
            </Link>
          </li>
          <li>
            <NavLink to="/details">
              Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/streams">
              Streams
            </NavLink>
          </li>
        </ul>
            <NavLink to="/profile">
          <button>
              Profile
            <img src={profile} alt="" />
          </button>
            </NavLink>
      </nav>
      
    </div>
  )
}

export default Navbar