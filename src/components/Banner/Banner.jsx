import React from "react";
import { MdSearch } from "react-icons/md";
import Ellipse01 from "../../assets/Ellipse 7.png";
import imgPng from "../../assets/Image.png";
import happyImg from "../../assets/Auto Layout Vertical1.png";
import uiImg from "../../assets/Auto Layout Vertical2.png";
import learnImg from "../../assets/Auto Layout Vertical3.png";
import frame4 from "../../assets/ornaments/Frame4.png";
import frame5 from "../../assets/ornaments/Frame (5).png";
import clone from "../../assets/ornaments/Cone.png";
import clone2 from "../../assets/ornaments/Cone (2).png";
import clone1 from "../../assets/ornaments/Cone (1).png";

const Banner = () => {
  return (
    // section
    <section className="w-full relative">
      <img
        src={frame5}
        alt=""
        className="
          absolute top-30 left-7 md:top-35 lg:top-10 md:left-12 lg:left-25 -translate-x-1/2 w-15 sm:w-36 md:w-[100px] lg:w-[350px] xl:w-[200px] z-20 pointer-events-none"
      />
      <img
        src={frame4}
        alt=""
        className="
          absolute top-60 left-7 md:top-35 lg:top-60 md:left-12 lg:left-65 -translate-x-1/2 w-15 sm:w-36 md:w-[100px] lg:w-[350px] xl:w-[150px] z-20 pointer-events-none"
      />
      <img
        src={clone2}
        alt=""
        className="
          absolute bottom-20  md:bottom-15 lg:bottom-10 left-10 sm:left-10 md:left-8 lg:left-56 -translate-x-1/2 w-15 sm:w-36 md:w-[100px] lg:w-[150px] xl:w-[250px] z-20 pointer-events-none"
      />
      <img
        src={clone}
        alt=""
        className="
          absolute top-4  md:top-15 lg:top-10 -right-5 md:-right-25 -translate-x-1/2 w-10 sm:w-26 md:w-[100px] lg:w-[150px] xl:w-[180px] z-20 pointer-events-none"
      />
      <img
        src={clone1}
        alt=""
        className="
          absolute top-34  md:top-15 lg:top-65 right-3 md:right-25 -translate-x-1/2 w-10 sm:w-26 md:w-[100px] lg:w-[150px] xl:w-[180px] z-20 pointer-events-none"
      />

      <img
        src={frame4}
        alt=""
        className="
          absolute top-80 right-1 md:top-55 lg:top-120 md:right-5 lg:right-35 -translate-x-1/2 w-20 sm:w-36 md:w-[100px] lg:w-[350px] xl:w-[150px] z-20 pointer-events-none"
      />

      {/* Text Content */}
      <div className="text-white text-center my-15">
        <h1 className="poppins-semibold text-3xl sm:text-4xl lg:text-6xl leading-tight">
          Get Access to Hundreds <br className="hidden sm:block" /> Courses
          Available
        </h1>
        <p className="font-satoshi max-w-5xl mx-auto font-light text-sm sm:text-base my-4 sm:my-6 px-4 text-gray-200">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>

      {/* Search Bar */}
      <form className="flex items-center justify-center my-4 pb-15 px-10 sm:px-1 sm:my-6 gap-2 sm:gap-3 w-full max-w-md mx-auto px-2 z-10">
        <div className="relative w-full">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Course, topic, creator"
            className="bg-white pl-10 pr-4 py-2.5 sm:py-3 w-full rounded-full outline-none text-sm text-gray-800 focus:ring-2 focus:ring-[#D4FB20]"
          />
        </div>
        <button
          type="submit"
          className="bg-[#D4FB20] text-[#242528] font-satoshi font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-opacity-90 transition-all text-sm shrink-0"
        >
          Search
        </button>
      </form>

      {/* bottom design */}
      <div className=" relative">
        <img
          src={Ellipse01}
          alt=""
          className="mx-auto w-2xl px-5 sm:w-4xl md:w-6xl"
        />

        <img
          src={imgPng}
          alt=""
          className="
          absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 md:w-[500px] lg:w-[600px] xl:w-[700px] z-20 pointer-events-none"
        />

        <img
          src={happyImg}
          alt=""
          className="absolute bottom-[15%] sm:bottom-[12%] md:bottom-[15%] lg:bottom-[22%] left-[9%] sm:left[10%] md:left-[13%] lg:left-[25%] w-28 sm:w-40 md:w-48 lg:w-56 xl:w-46 z-20 pointer-events-none transition-all"
        />
        <img
          src={learnImg}
          alt=""
          className="absolute bottom-[58%] sm:bottom-[12%] md:bottom-[15%] lg:bottom-[58%] left-[56%] sm:left[12%] md:left-[10%] lg:left-[53%] w-18 sm:w-24 md:w-28 lg:w-30 xl:w-44 z-20 pointer-events-none transition-all"
        />
        <img
          src={uiImg}
          alt=""
          className="absolute bottom-[68%] sm:bottom-[12%] md:bottom-[15%] lg:bottom-[72%] left-[19%] sm:left[8%] md:left-[15%] lg:left-[28%] w-18 sm:w-24 md:w-28 lg:w-30 xl:w-44 z-20 pointer-events-none transition-all"
        />
      </div>
    </section>
  );
};

export default Banner;
