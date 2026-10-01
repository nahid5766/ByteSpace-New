import React from "react";
import { MdSearch } from "react-icons/md";
import Ellipse from "../../assets/Ellipse 7.png";
import imgPng from "../../assets/Image.png";
import img3d from "../../assets/3d ornament.png";
import happyImg from "../../assets/Auto Layout Vertical1.png";
import uiImg from "../../assets/Auto Layout Vertical2.png";
import learnImg from "../../assets/Auto Layout Vertical3.png";

const Banner = () => {
  return (
    <div>
      <img
        src={img3d}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      <img
        src={happyImg}
        alt=""
        className="absolute bottom-13 left-96 w-fit md:w-45 object-contain z-10"
      />

      <img
        src={uiImg}
        alt=""
        className="absolute bottom-63 left-114 w-fit md:w-32 object-contain z-10"
      />

      <img
        src={learnImg}
        alt=""
        className="absolute bottom-52 left-194 w-fit md:w-42 object-contain z-10"
      />

      <div className="text-white text-center overflow-hidden">
        <h1 className="poppins-semibold text-7xl mt-10 leading-tight">
          Get Access to Hundreds <br /> Courses Available
        </h1>
        <p className="font-satoshi font-light my-6">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>
      <form className="relative flex items-center my-8 gap-3 justify-center overflow-visible">
        <MdSearch className="absolute left-122 text-xl text-gray-500" />
        <input
          type="email"
          placeholder="Course, topic, creator"
          className="bg-white pl-11 pr-4 rounded-full px-5 py-3 w-sm outline-none text-sm"
        />
        <button
          type="submit"
          className="bg-[#D4FB20] text-[#242528] font-satoshi font-normal px-6 py-3 rounded-full hover:bg-opacity-90 transition-all text-sm shrink-0"
        >
          Search
        </button>
      </form>
      {/* <div className="relative overflow-hidden">
        <img className="w-fit h-84 mt-13 mx-auto" src={Ellipse} alt="" />
        <img className="w-fit h-106 -mt-106  mx-auto" src={imgPng} alt="" />
      </div>
      <div className="relative overflow-visible">
        <img className="w-500 h-200 -mt-196  mx-auto" src={img3d} alt="" />
      </div> */}
    </div>
  );
};

export default Banner;
