import React from "react";
import img1 from "../../assets/Image.png";
import img2 from "../../assets/Image2.png";
import frame1 from "../../assets/Frame 1.png";
import frame2 from "../../assets/Frame 2.png";
import happyImg from "../../assets/Auto Layout Vertical1.png";
import learnImg from "../../assets/Auto Layout Vertical3.png";
import Ellipse11 from "../../assets/Ellipse 11.png";
import Ellipse12 from "../../assets/Ellipse 12.png";
import Ellipse8 from "../../assets/Ellipse 8.png";
import autoLayout1 from "../../assets/Auto Layout1.png";
import autoLayout2 from "../../assets/Auto Layout2.png";
import { IoStar } from "react-icons/io5";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";
import { IoCheckmarkCircle } from "react-icons/io5";

const YourPath = ({ course }) => {
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
    enrolledUsers = [], // for count dynamic
  } = course;
  return (
    // parent div
    <div className="bg-[#FAFAFA]  relative min-h-screen max-w-[1440px] overflow-hidden">
      {/* Background Yellow Ellipse */}
      <img
        src={Ellipse11}
        alt=""
        className="absolute top-0 left-0 z-1 pointer-events-none opacity-80"
      />

      <img
        src={Ellipse12}
        alt=""
        className="absolute bottom-0 left-0 z-1 pointer-events-none opacity-80"
      />

      <img
        src={Ellipse8}
        alt=""
        className="absolute bottom-0 w-150 left-210 z-1 pointer-events-none opacity-40"
      />

      <img
        src={Ellipse8}
        alt=""
        style={{ transform: "rotate(-90deg)" }}
        className="absolute top-5 w-150 left-220 z-1 pointer-events-none opacity-40"
      />
      {/* section 01 */}
      <div className="flex justify-between">
        {/* first section */}
        <div className="mx-20 mt-30 ">
          <div className="w-130 ">
            <h2 className=" poppins-semibold text-4xl">
              Your Path to Professional <br /> Growth Starts Here!
            </h2>
            <p className="my-6 font-light text-gray-600">
              Explore our curated selection of courses tailored to enhance{" "}
              <br /> your capabilities and accelerate your career journey.{" "}
              <br /> Whether you are looking to sharpen specific skills, gain{" "}
              <br /> industry expertise, or embark on a new career path
              entirely, <br /> we have the resources you need.
            </p>
            <div className="flex gap-8">
              <div>
                <h2 className="text-[#003BE2] font-normal text-2xl">12K</h2>
                <p className="font-light text-gray-600">Students</p>
              </div>
              <div>
                <h2 className="text-[#003BE2] font-normal text-2xl">70+</h2>
                <p className="font-light text-gray-600">Courses</p>
              </div>
              <div>
                <h2 className="text-[#003BE2] font-normal text-2xl">16</h2>
                <p className="font-light text-gray-600">Creators</p>
              </div>
            </div>
          </div>
        </div>
        {/* second section */}
        <div className=" relative mr-50 mt-17">
          <div className="w-170">
            {/* card container */}
            <div>
              <div className="card w-fit border border-gray-200 shadow-md hover:shadow-xl transition-shadow p-4 rounded-3xl bg-white">
                {/* Image with badges overlay */}
                <div className="relative w-full h-35 rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={image}
                    alt={title}
                  />
                  <div className="absolute bottom-2 left-1 right-1 flex items-center justify-between text-xs font-light text-gray-700 gap-1">
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
                      {reviews || "4.5"}
                      <IoStar className="text-gray-300 items-center" />
                    </span>
                  </div>

                  <p className="text-sm text-gray-500">
                    by
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
                  <div className="flex items-center -space-x-2 overflow-hidden mr-10">
                    {/* Static design example if dynamic avatar array unavailable */}
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
                    <span className="text-xs font-normal text-gray-500">
                      /lifetime
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <img
              className=" absolute top-3 left-10 w-fit md:w-140 object-contain z-1 "
              src={img1}
              alt=""
            />

            <img
              src={learnImg}
              alt=""
              className="absolute top-43 left-86 w-fit md:w-45 object-contain z-1 "
            />

            <img
              className="w-7 absolute top-10 left-96 w-fit md:w-45 object-contain z-1 "
              src={frame2}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* section 02 */}
      <div className="flex justify-between py-30 mb-20">
        {/* first section */}
        <div className=" relative mt-17">
          <div className="w-170">
            <img
              className=" absolute top-8 left-33 w-fit md:w-40 object-contain z-1 "
              src={autoLayout1}
              alt=""
            />
            <img
              className=" absolute top-35 left-33 w-fit md:w-24 object-contain z-1 "
              src={autoLayout2}
              alt=""
            />
            <img
              className=" absolute top-0 left-30 w-fit md:w-110 object-contain z-1 "
              src={img2}
              alt=""
            />

            <img
              src={happyImg}
              alt=""
              className="absolute top-82 left-83 w-fit md:w-45 object-contain z-1 "
            />

            <img
              className="w-3 absolute top-23 left-87 w-fit md:w-40 object-contain z-1 "
              src={frame1}
              alt=""
            />
          </div>
        </div>

        {/* second section */}
        <div className="mr-100 mt-40 ">
          <div className="w-130 ">
            <h2 className=" poppins-semibold text-5xl">
              Create & Manage <br /> Courses Easily.
            </h2>
            <p className="my-8 font-satoshi font-light text-gray-500">
              <span className="text-black font-sans">ByteSpace</span> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <div className=" text-[#242528] font-sans">
              <span className="flex gap-3 items-center mb-5">
                <IoCheckmarkCircle className="text-[#003BE2] text-xl" /> Share
                Your Expertise
              </span>
              <span className="flex gap-3 items-center mb-5">
                <IoCheckmarkCircle className="text-[#003BE2] text-xl" />{" "}
                Monetize Your Passion
              </span>
              <span className="flex gap-3 items-center mb-5">
                <IoCheckmarkCircle className="text-[#003BE2] text-xl" />{" "}
                Flexibility and Autonomy
              </span>
              <span className="flex gap-3 items-center">
                <IoCheckmarkCircle className="text-[#003BE2] text-xl" /> Build a
                Community
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourPath;
