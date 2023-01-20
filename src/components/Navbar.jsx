import React from 'react'
import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import profile from './assets/images/profile-header.jpg';
import logo from './assets/images/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    // const navLinkStyles = ({ isActive }) => {
    //   return {
    //     color: isActive ? 'var(--color-white)' : 'var(--color-lightgray)'
    //   }
    // }

  return (
    <div>
      <nav className='flex items-center justify-end py-7 px-20 lg:px-40 bg-[#f7f7f7] text-lightgray lg:bg-black'>
        <NavLink className="mr-auto" to="/">
            <img src={logo} alt="" />
        </NavLink>
        <div className= "hidden lg:relative mr-auto">
          <input className='relative py-2 pl-10 bg-gray rounded-3xl placeholder:text-lightgray' type="text" placeholder='Type Something' />
          <div className='absolute top-2 left-4'>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <ul className='hidden lg:flex'>
          <li className='transition ease-in-out duration-300 hover:text-pink pr-10'>
            <NavLink to="react-cyborg-gaming-template/">
              Home
            </NavLink>
          </li>
          <li className='transition ease-in-out duration-300 hover:text-pink pr-10'>
            <NavLink to="react-cyborg-gaming-template/browse">
              Browse
            </NavLink>
          </li>
          <li className='transition ease-in-out duration-300 hover:text-pink pr-10'>
            <NavLink to="react-cyborg-gaming-template/details">
              Details
            </NavLink>
          </li>
          <li className='transition ease-in-out duration-300 hover:text-pink pr-10'>
            <NavLink to="react-cyborg-gaming-template/streams">
              Streams
            </NavLink>
          </li>
        </ul>
            <NavLink to="react-cyborg-gaming-template/profile">
                <button className='transition ease-in-out duration-300 hidden lg:flex items-center gap-2 bg-gray p-2 pl-5 rounded-3xl
                hover:text-white hover:bg-pink'>
                    Profile
                    <img className='rounded-full' src={profile} alt="" />
                </button>
            </NavLink>

        {/* Hamburger */}
      <div onClick={handleClick} className='lg:hidden z-10'>
        {!nav ? <i class="fa-solid fa-bars" style={{fontSize: '2rem' ,color: 'var(--color-pink)'}}></i> : 
        <i class="fa-solid fa-x" style={{fontSize: '2rem'  ,color: 'var(--color-pink)'}}></i>}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-24 inset-x-0 w-auto h-auto bg-white flex flex-col justify-center items-center'
        }
      >
        <div className='border-b-2 border-lightgray/25 border-solid w-full text-center'>
            <li className='py-6 text-2xl transition ease-in-out text-black hover:font-bold hover:text-pink'>
            <NavLink onClick={handleClick} to='/'>
                Home
            </NavLink>
            </li>
        </div>
        <div className='border-b-2 border-lightgray/25 border-solid w-full text-center'>
            <li className='py-6 text-2xl transition ease-in-out text-black hover:font-bold hover:text-pink'>
          {' '}
          <NavLink onClick={handleClick} to='/browse'>
            Browse
          </NavLink>
        </li>
        </div>
        <div className='border-b-2 border-lightgray/25 border-solid w-full text-center'>
            <li className='py-6 text-2xl transition ease-in-out text-black hover:font-bold hover:text-pink'>
          {' '}
          <NavLink onClick={handleClick} to='/details'>
            Details
          </NavLink>
        </li>
        </div>
        <div className='border-b-2 border-lightgray/25 border-solid w-full text-center'>
            <li className='py-6 text-2xl transition ease-in-out text-black hover:font-bold hover:text-pink'>
          {' '}
          <NavLink onClick={handleClick} to='/streams'>
            Streams
          </NavLink>
        </li> 
        </div>
        <li className='py-6 text-2xl transition ease-in-out text-black hover:font-bold hover:text-pink'>
          {' '}
          <NavLink onClick={handleClick} to='/profile'>
            Profile
          </NavLink>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar