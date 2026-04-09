import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  const links = (
    <>
      <NavLink className={({ isActive }) => `font-medium rounded-xl  bg-none mr-10 p-2 px-4 ${isActive ? "border border-green-500 text-green-500" : ""}`} to={"/"}>Home</NavLink>
      <NavLink className={({ isActive }) => `font-medium rounded-xl   bg-none mr-10 p-2 px-4 ${isActive ? "border border-green-500 text-green-500" : ""}`} to={"/apps"}>Apps</NavLink>
      <NavLink className={({ isActive }) => `font-medium rounded-xl   bg-none p-2 px-4 ${isActive ? "border border-green-500 text-green-500" : ""}`} to={"/installation"}>Installation</NavLink>
    </>
  )
  return (
    <div className="navbar bg-base-100 shadow-sm px-10 mb-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="font-bold text-blue-600 text-xl">HERO.IO</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-blue-500 rounded-3xl text-white">Contribute</a>
      </div>
    </div>
  )
}

export default Navbar
