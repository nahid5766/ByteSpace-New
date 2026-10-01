import React from "react";
import bgImg from "../../assets/background img.png";
import logoImg from "../../assets/Vector.png";
import { MdOutlineShoppingBag } from "react-icons/md";
import Banner from "../Banner/Banner";
import Ellipse from "../../assets/Ellipse 7.png";
import imgPng from "../../assets/Image.png";
import img3d from "../../assets/3d ornament.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    // main div
    <div
      className="relative w-full mx-auto overflow-hidden py-3 md:py-5"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* navbar start */}
      <div className="flex justify-between mx-8 md:mx-37 font-satoshi ">
        {/* dropdown */}
        <div className="dropdown md:hidden right-0 top-0">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-1 mr-2"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-4 shadow-lg flex flex-col gap-3"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/creators">Creators</NavLink>
          </ul>
        </div>

        {/* logo */}
        <NavLink to="/">
          <div className="flex items-center gap-2  mt-1">
            <img
              className="w-6 h-6 md:w-8 md:h-8 items-center"
              src={logoImg}
              alt="ByteSpace Logo"
            />
            <h1 className="font-clash text-xl md:text-2xl text-white font-bold items-center md:mt-2">
              ByteSpace
            </h1>
          </div>
        </NavLink>

        {/* for desktop */}
        <div className="text-white hidden md:flex items-center">
          <ul className="flex space-x-6 font-light">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/creators">Creators</NavLink>
          </ul>
        </div>
        <div className="text-white flex gap-3 md:gap-6 items-center font-light">
          <a href="">Sign In</a>
          <a href="">Join Us</a>
          <a href="">
            <MdOutlineShoppingBag className="text-xl md:text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
