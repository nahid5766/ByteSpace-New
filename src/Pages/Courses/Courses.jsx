import React, { Suspense } from "react";
import bgImg from "../../assets/background img.png";
import { useLoaderData } from "react-router";
import { MdSearch } from "react-icons/md";
import { RiFilter2Line } from "react-icons/ri";
import { LuChartNoAxesColumnDecreasing } from "react-icons/lu";
import { FiBarChart } from "react-icons/fi";
import { MdOutlineCategory } from "react-icons/md";
import SingleCourse from "../SingleCourse/SingleCourse";

const Courses = () => {
  const coursesData = useLoaderData();
  // console.log(coursesData);
  return (
    <div>
      <div
        className="relative w-full mx-auto overflow-hidden py-3 md:py-5"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div>
          <h2 className="poppins-semibold text-white text-4xl text-center py-7">
            Find Your Next Course
          </h2>
        </div>

        <form className="flex items-center justify-center my-4 px-10 sm:px-1 sm:my-6 gap-2 sm:gap-3 w-full max-w-md mx-auto px-2 z-10">
          <div className="relative w-full">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Search"
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
      </div>

      {/* filter btn */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 py-6 md:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Side: Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <button className="flex items-center gap-2 border border-gray-400 font-satoshi font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base">
            <RiFilter2Line className="text-lg sm:text-xl" />
            Filter
          </button>

          <button className="flex items-center gap-2 border border-gray-400 font-satoshi font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base">
            <FiBarChart className="text-lg sm:text-xl" />
            Level
          </button>

          <button className="flex items-center gap-2 border border-gray-400 font-satoshi font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base">
            <MdOutlineCategory className="text-lg sm:text-xl" />
            Category
          </button>
        </div>

        {/* Right Side: Sort Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 border border-gray-400 font-satoshi font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center">
            <LuChartNoAxesColumnDecreasing className="rotate-90 text-lg sm:text-xl" />
            Most relevant
          </button>
        </div>
      </div>

      {/* cards */}

      <Suspense>
        <div className="max-w-12/15 mx-auto sm:px-6 lg:px-2 py-18">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {coursesData.map((course) => (
              <SingleCourse key={course.id} course={course}></SingleCourse>
            ))}
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Courses;
