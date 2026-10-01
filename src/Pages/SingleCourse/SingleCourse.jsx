import React from "react";
import { IoStar } from "react-icons/io5";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";

const SingleCourse = ({ course }) => {
const {
    id,
    title,
    companyName,
    image,
    description,
    reviews,
    ratingAvg,
    totalPrice,
    lessonsCount = "17 Lessons",
    duration = "2 hours 16 mins",
    commentsCount = "59 Comments",
    enrolledUsers = [],
  } = course;

  console.log(course);
  return <div className="card w-full border border-gray-200 shadow-md hover:shadow-xl transition-shadow p-4 rounded-3xl bg-white border">
        {/* Image with badges overlay */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={image}
            alt={title}
          />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-light text-gray-700 gap-2">
            <span className="bg-white/50 backdrop-blur-md px-2 py-1 rounded-full">
              {lessonsCount}
            </span>
            <span className="bg-white/50 backdrop-blur-md px-2 py-1 rounded-full">
              {duration}
            </span>
            <span className="bg-white/50 backdrop-blur-md px-2 py-1 rounded-full">
              {commentsCount}
            </span>
          </div>
        </div>
  
        {/* Card Content */}
        <div className="pt-4 flex flex-col gap-1">
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900 line-clamp-1">
              {title}
            </h2>
            <span className="flex items-center text-lg font-semibold text-gray-700 gap-1">
              {reviews || "4.5"} <IoStar className="text-gray-300 items-center" />
            </span>
          </div>
  
          <p className="text-sm text-gray-500">
            by{" "}
            <span className="text-blue-600 font-normal text-sm">
              {companyName}
            </span>
          </p>
        </div>
  
        {/* Beginner Tag */}
        <div className="flex items-center justify-between my-4">
          <button className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <LuChartNoAxesColumnIncreasing className="text-base" />
            Beginner
          </button>
  
          {/* User Avatars Overlap Section */}
          <div className="flex items-center -space-x-2 overflow-hidden mr-18">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
              src="https://i.pravatar.cc/100?img=1"
              alt="user"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
              src="https://i.pravatar.cc/100?img=2"
              alt="user"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
              src="https://i.pravatar.cc/100?img=3"
              alt="user"
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
              src="https://i.pravatar.cc/100?img=4"
              alt="user"
            />
            <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-[#D4FB20] text-gray-900 text-xs font-normal">
              26+
            </div>
          </div>
        </div>
  
        {/* Price */}
        <div className="flex items-baseline gap-1">
          <h1 className="text-2xl font-bold text-blue-600">
            {totalPrice}
            <span className="text-xs font-normal text-gray-500">/lifetime</span>
          </h1>
        </div>
      </div>;
};

export default SingleCourse;
