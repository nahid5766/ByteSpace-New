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
import { IoStar, IoCheckmarkCircle } from "react-icons/io5";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";

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
    enrolledUsers = [],
  } = course || {};

  return (
    <div className="bg-[#FAFAFA] relative min-h-screen w-full overflow-hidden px-4 sm:px-8 lg:px-16 py-10 lg:py-20">
  {/* Background Ellipses */}
  <img
    src={Ellipse11}
    alt=""
    className="absolute top-0 left-0 pointer-events-none opacity-80 w-48 sm:w-80 lg:w-auto"
  />
  <img
    src={Ellipse12}
    alt=""
    className="absolute bottom-0 left-0 pointer-events-none opacity-80 w-48 sm:w-80 lg:w-auto"
  />
  <img
    src={Ellipse8}
    alt=""
    className="absolute bottom-0 right-0 pointer-events-none opacity-40 w-60 sm:w-96 lg:w-[500px]"
  />
  <img
    src={Ellipse8}
    alt=""
    style={{ transform: "rotate(-90deg)" }}
    className="absolute top-0 right-0 pointer-events-none opacity-40 w-60 sm:w-96 lg:w-[500px]"
  />

  {/* SECTION 01 */}
  <div className="flex flex-col w-full lg:flex-row items-center justify-between gap-12 lg:gap-16 mb-20 lg:mb-32 relative z-10">
    {/* Left Content */}
    <div className="w-full lg:w-1/2">
      <h2 className="poppins-semibold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
        Your Path to Professional Growth Starts Here!
      </h2>
      <p className="my-6 font-light text-gray-600 text-sm sm:text-base leading-relaxed">
        Explore our curated selection of courses tailored to enhance your
        capabilities and accelerate your career journey. Whether you are
        looking to sharpen specific skills, gain industry expertise, or
        embark on a new career path entirely, we have the resources you
        need.
      </p>
      <div className="flex gap-6 sm:gap-10 pt-2">
        <div>
          <h2 className="text-[#003BE2] font-semibold text-2xl sm:text-3xl">
            12K
          </h2>
          <p className="font-light text-gray-600 text-sm sm:text-base">
            Students
          </p>
        </div>
        <div>
          <h2 className="text-[#003BE2] font-semibold text-2xl sm:text-3xl">
            70+
          </h2>
          <p className="font-light text-gray-600 text-sm sm:text-base">
            Courses
          </p>
        </div>
        <div>
          <h2 className="text-[#003BE2] font-semibold text-2xl sm:text-3xl">
            16
          </h2>
          <p className="font-light text-gray-600 text-sm sm:text-base">
            Creators
          </p>
        </div>
      </div>
    </div>

    {/* Right Visual Image Stack */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <div className="relative w-full max-w-[480px] pt-6 sm:pt-10 pb-8">
        {/* Base Card Component */}
        <div className="relative z-10 w-full max-w-[240px] left-8 sm:max-w-[360px] border border-gray-200 shadow-xl p-4 rounded-3xl bg-white/90 backdrop-blur-sm">
          <div className="relative w-full h-36 rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={image}
              alt={title}
            />
            <div className="absolute bottom-2 left-1 right-1 flex items-center justify-between text-[10px] sm:text-xs font-light text-gray-700 gap-1">
              <span className="bg-white/70 backdrop-blur-md px-2 py-1 rounded-full truncate">
                {lessonsCount}
              </span>
              <span className="bg-white/70 backdrop-blur-md px-2 py-1 rounded-full truncate">
                {duration}
              </span>
              <span className="bg-white/70 backdrop-blur-md px-2 py-1 rounded-full truncate">
                {commentsCount}
              </span>
            </div>
          </div>

          {/* Card Content */}
          <div className="pt-3 flex flex-col gap-1">
            <div className="flex justify-between items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-1">
                {title}
              </h2>
              <span className="flex items-center text-sm font-semibold text-gray-700 gap-1">
                {reviews || "4.5"}
                <IoStar className="text-amber-400" />
              </span>
            </div>

            <p className="text-xs text-gray-500">
              by
              <span className="text-blue-600 font-medium">
                {companyName}
              </span>
            </p>
          </div>

          {/* Beginner Tag  */}
          <div className="flex items-center justify-between my-3">
            <button className="text-[11px] font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full flex items-center gap-1">
              <LuChartNoAxesColumnIncreasing className="text-sm" />
              Beginner
            </button>

            <div className="flex items-center -space-x-2">
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                src="https://i.pravatar.cc/100?img=1"
                alt="user"
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                src="https://i.pravatar.cc/100?img=2"
                alt="user"
              />
              <img
                className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                src="https://i.pravatar.cc/100?img=3"
                alt="user"
              />
              <div className="flex items-center justify-center h-7 w-7 rounded-full ring-2 ring-white bg-[#D4FB20] text-gray-900 text-[10px] font-semibold">
                26+
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1">
            <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
              {totalPrice}
              <span className="text-xs font-normal text-gray-500">
                /lifetime
              </span>
            </h1>
          </div>
        </div>

        {/* Floating */}
        <img
          className="absolute top-20 md:top-8 left-13 md:left-10 w-full max-w-[400px] sm:max-w-[500px] scale-120 sm:scale-125 h-auto object-contain z-20 pointer-events-none"
          src={img1}
          alt=""
        />
        <img
          src={learnImg}
          alt=""
          className="absolute top-51 left-70 sm:top-40 md:left-90  sm:-right-6 w-28 sm:w-36 md:w-44 object-contain z-20 pointer-events-none drop-shadow-lg"
        />
        <img
          className="absolute top-2 right-4 sm:right-10 w-16 sm:w-24 md:w-28 object-contain z-20 pointer-events-none"
          src={frame2}
          alt=""
        />
      </div>
    </div>
  </div>

  {/* SECTION 02 */}
  <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
    {/* Left Visual Image  */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <div className="relative w-full max-w-[480px] h-[340px] sm:h-[420px] flex items-center justify-center">
        <img
          className="absolute top-20 left-22 sm:top-6 sm:left-12 w-28 sm:w-36 md:w-40 object-contain z-10 drop-shadow-md"
          src={autoLayout1}
          alt=""
        />
        <img
          className="absolute top-46 left-14 sm:top-35 sm:left-5 w-12 sm:w-24 md:w-28 object-contain z-20 drop-shadow-md"
          src={autoLayout2}
          alt=""
        />
        <img
          className="absolute top-0 md:top-45 left-5 md:left-50 w-full max-w-[400px] sm:max-w-[100px] scale-70 sm:scale-400 h-auto object-contain z-20 pointer-events-none"
          src={img2}
          alt=""
        />
        <img
          src={happyImg}
          alt=""
          className="absolute bottom-0 left-56 sm:right-6 w-32 sm:w-40 md:w-44 object-contain z-30 drop-shadow-lg"
        />
        <img
          className="absolute top-35 left-60 sm:right-16 w-20 sm:w-24 md:w-28 object-contain z-10"
          src={frame1}
          alt=""
        />
      </div>
    </div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2">
      <h2 className="poppins-semibold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight">
        Create & Manage <br className="hidden sm:inline" /> Courses Easily.
      </h2>
      <p className="my-6 font-satoshi font-light text-gray-600 text-sm sm:text-base leading-relaxed">
        <span className="text-black font-semibold">ByteSpace</span> supports
        individuals or entities in the creation, publication, and
        administration of educational courses.
      </p>

      <div className="space-y-4 text-gray-800 font-sans text-sm sm:text-base">
        <div className="flex gap-3 items-center">
          <IoCheckmarkCircle className="text-[#003BE2] text-xl flex-shrink-0" />
          <span>Share Your Expertise</span>
        </div>
        <div className="flex gap-3 items-center">
          <IoCheckmarkCircle className="text-[#003BE2] text-xl flex-shrink-0" />
          <span>Monetize Your Passion</span>
        </div>
        <div className="flex gap-3 items-center">
          <IoCheckmarkCircle className="text-[#003BE2] text-xl flex-shrink-0" />
          <span>Flexibility and Autonomy</span>
        </div>
        <div className="flex gap-3 items-center">
          <IoCheckmarkCircle className="text-[#003BE2] text-xl flex-shrink-0" />
          <span>Build a Community</span>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default YourPath;
