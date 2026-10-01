import React from "react";
import bgImg from "../../assets/background img.png";
import logoImg from "../../assets/Vector.png";
import { MdOutlineShoppingBag } from "react-icons/md";
import Banner from "../Banner/Banner";
import Ellipse from "../../assets/Ellipse 7.png";
import imgPng from "../../assets/Image.png";
import img3d from "../../assets/3d ornament.png";

const Navbar = () => {
  return (
    // main div
    <div
      className="relative min-h-screen w-full max-w-[1440px] mx-auto overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* navbar start */}
      <div className="flex justify-between mx-35 font-satoshi">
        <div className="flex items-center gap-2 mb-6 py-10">
          <img className="w-8 h-8" src={logoImg} alt="ByteSpace Logo" />
          <h1 className="font-clash text-2xl text-white font-bold mt-4">
            ByteSpace
          </h1>
        </div>
        <div className="text-white flex items-center">
          <ul className="flex space-x-6 font-light">
            <li>Home</li>
            <li>Courses</li>
            <li>Creators</li>
          </ul>
        </div>
        <div className="text-white flex space-x-6 items-center font-light ">
          <a href="">Sign In</a>
          <a href="">Join Us</a>
          <a href="">
            <MdOutlineShoppingBag className="text-2xl" />
          </a>
        </div>
      </div>

      <section className="relative overflow-hidden">
        <Banner> </Banner>

       
        <div className="relative overflow-hidden">
          <img className="w-fit h-84 mt-13 mx-auto" src={Ellipse} alt="" />
          <img className="w-fit h-106 -mt-106  mx-auto" src={imgPng} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
