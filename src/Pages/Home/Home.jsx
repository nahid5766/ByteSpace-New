import React from "react";
import logoIpsum1 from "../../assets/Frame1.png";
import logoIpsum2 from "../../assets/Frame2.png";
import logoIpsum3 from "../../assets/Frame3.png";
import logoIpsum4 from "../../assets/Frame4.png";
import logoIpsum5 from "../../assets/Frame5.png";
import HomeCards from "../HomeCards/HomeCards";
import design from "../../assets/icone/Frame1.png";
import devimg from "../../assets/icone/Frame2.png";
import itImg from "../../assets/icone/Frame3.png";
import busImg from "../../assets/icone/Frame4.png";
import markImg from "../../assets/icone/Frame5.png";
import phoImg from "../../assets/icone/Frame6.png";
import bgImg from "../../assets/background img.png";
import cone1 from "../../assets/unlock_icon/Cone (1).png";
import cone2 from "../../assets/unlock_icon/Cone.png";
import Frame4 from "../../assets/unlock_icon/Frame (4).png";
import Mask from "../../assets/unlock_icon/Mask Group.png";
import Mask1 from "../../assets/unlock_icon/Mask Group (1).png";
import Frame1 from "../../assets/unlock_icon/Frame (1).png";
import Frame5 from "../../assets/unlock_icon/Frame5.png";
import Frame3 from "../../assets/unlock_icon/Frame3.png";
import Ellipse25 from "../../assets/Ellipse25.png";
import Ellipse15 from "../../assets/Ellipse 15.png";
import Ellipse8 from "../../assets/Ellipse 8.png";
import Ellipse from "../../assets/Ellipse.png";
import Ellipse2 from "../../assets/Ellipse (1).png";
import Ellipse3 from "../../assets/Ellipse (2).png";

import { useLoaderData } from "react-router";
import YourPath from "../YourPath/YourPath";

const Home = () => {
  const courseData = useLoaderData();

  return (
    <div className="min-h-screen max-w-[1440px] mx-auto pb-16">
      <div className="bg-[#F5F5F6] min-h-[202px] items-center justify-between flex px-35">
        <img src={logoIpsum1} alt="" />
        <img src={logoIpsum2} alt="" />
        <img src={logoIpsum3} alt="" />
        <img src={logoIpsum4} alt="" />
        <img src={logoIpsum5} alt="" />
      </div>

      <div>
        {/* Discover section */}
        <div className="mt-17 text-center">
          <h1 className="poppins-semibold text-4xl">
            Discover Your Passion,
            <br /> Build Your Skills
          </h1>
          <p className="font-satoshi text-[#82868E] font-light mt-6">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different <br />{" "}
            fields, from technology to the arts, and make a difference in your
            career and life.
          </p>
        </div>

        {/* btn section */}
        <div className="font-satoshi font-light justify-center mt-15">
          <div className="flex gap-4 items-center justify-center flex-wrap">
            <button className="px-4 py-2 rounded-full bg-[#D4FB20]">
              Featured
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Music
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Drawing & Painting
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Marketing
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Animation
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Social Media
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              UI/UX Design
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Creative Marketing
            </button>
          </div>

          <div className="flex gap-4 items-center justify-center mt-6 flex-wrap">
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Digital Illustration
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Film & Video
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Crafts
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Freelance & Entrepreneurship
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Graphic Design
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Photography
            </button>
          </div>
          <div className="flex gap-4 items-center justify-center mt-6 flex-wrap">
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Productivity
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Web Development
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Data Science
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F5F5F6]">
              Cooking
            </button>
            <button className="text-[#003BE2]">+ More</button>
          </div>
        </div>
      </div>

      {/* Cards container */}
      <div className="max-w-12/15 mx-auto sm:px-6 lg:px-2 py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courseData?.slice(0, 6).map((course) => (
            <HomeCards key={course.id} course={course}></HomeCards>
          ))}
        </div>
      </div>

      <div className="text-center">
        <div>
          <h1 className="poppins-semibold text-4xl">
            Explore Diverse Learning Paths at Bytespace
          </h1>
          <p className="mt-6 text-gray-400 font-light">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various <br /> fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        <div className="my-18 flex justify-between mx-45">
          <div className="border-1 border-gray-400 w-35 h-35 rounded-2xl flex items-center justify-center">
            <div>
              <img className="w-12 mx-auto" src={design} alt="" />
              <p className="mt-2">Design</p>
            </div>
          </div>
          <div className="border-1 border-gray-400 w-35 h-35 rounded-2xl flex items-center justify-center">
            <div>
              <img className="w-12 mx-auto" src={devimg} alt="" />
              <p className="mt-2">Development</p>
            </div>
          </div>
          <div className="border-1 border-gray-400 w-35 h-35 rounded-2xl flex items-center justify-center">
            <div>
              <img className="w-12 mx-auto" src={itImg} alt="" />
              <p className="mt-2">IT & Software</p>
            </div>
          </div>
          <div className="border-1 border-gray-400 w-35 h-35 rounded-2xl flex items-center justify-center">
            <div>
              <img className="w-12 mx-auto" src={busImg} alt="" />
              <p className="mt-2">Business</p>
            </div>
          </div>
          <div className="border-1 border-gray-400 w-35 h-35 rounded-2xl flex items-center justify-center">
            <div>
              <img className="w-12 mx-auto" src={markImg} alt="" />
              <p className="mt-2">Marketing</p>
            </div>
          </div>
          <div className="border-1 border-gray-400 w-35 h-35 rounded-2xl flex items-center justify-center">
            <div>
              <img className="w-12 mx-auto" src={phoImg} alt="" />
              <p className="mt-2">Photography</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {courseData?.slice(0, 1).map((course) => (
          <YourPath key={course.id} course={course}></YourPath>
        ))}
      </div>

      {/* unlock section */}
      <div
        className="bg-amber-100"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="text-center py-20 relative">
          <img
            src={cone1}
            alt=""
            className="absolute top-8 right-40 z-1 pointer-events-none opacity-100"
          />
          <img
            src={cone2}
            alt=""
            className="absolute top-9 right-0 z-1 md:w-50 pointer-events-none opacity-100"
          />
          <img
            src={Frame4}
            alt=""
            className="absolute right-15 bottom-0 z-1 md:w-80 pointer-events-none opacity-100"
          />
          <img
            src={Mask}
            alt=""
            className="absolute left-25 bottom-0 z-1 md:w-80 pointer-events-none opacity-100"
          />
          <img
            src={Mask1}
            alt=""
            className="absolute left-0 bottom-13 z-1 md:w-34 pointer-events-none opacity-100"
          />
          <img
            src={Frame3}
            alt=""
            className="absolute left-0 top-0 z-1 md:w-60 pointer-events-none opacity-100"
          />
          <img
            src={Frame5}
            alt=""
            className="absolute left-40 top-8 z-1 md:w-40 pointer-events-none opacity-100"
          />
          <h1 className="poppins-semibold mt-10 text-5xl text-white leading-tight">
            Unlock Your Potential as a <br /> Creator with ByteSpace
          </h1>
          <p className="text-[#F5F5F6] font-light my-9">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a <br /> part of a
            community comprising over 10,000 local and international creators.
            Utilize our Course Editor, and showcase your <br /> expertise by
            publishing your finest course on the ByteSpace Course Library.
          </p>
          <button className="bg-[#D4FB20] px-3 py-2 rounded-full">
            Join as Creator
          </button>
        </div>
      </div>
      {/* discover section */}
      <div className="bg-[#FAFAFA] relative py-20 overflow-hidden z-0">
        <img
          src={Ellipse25}
          alt=""

          className="absolute right-0 top-10 z-10 md:w-130 pointer-events-none opacity-100"
        />
        <img
          src={Ellipse15}
          alt=""
          className="absolute left-95 top-5 z-10 md:w-140 pointer-events-none opacity-90"
        />

        <img
          src={Ellipse8}
          alt=""
          style={{ transform: "rotate(90deg)" }}
          className="absolute bottom-4 md:w-150 -left-3 z-10 pointer-events-none opacity-40"
        />

        {/* header section  */}
        <div className="flex justify-between py-10 mx-40 relative z-20">
          <div className=" mt-6">
            <h1 className="text-4xl poppins-semibold leading-normal">
              Discover What Our <br /> Community Is Saying
            </h1>
          </div>
          <div className="w-128 mr-17">
            <p className="font-light text-[#4F4F4F]  ">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>
        {/* card */}
        <div className="flex justify-between gap-15 mx-40 relative z-20">
          <div className=" bg-white rounded-2xl p-5 w-lg">
            <img src={Ellipse} alt="" />
            <h2 className="mt-5 poppins-semibold text-xl">Sarah M.</h2>
            <p className="text-[#003BE2] font-light font-satoshi ">
              Enthusiastic Learner
            </p>
            <p className="mt-10 text-[#4F4F4F] font-light font-satoshi ">
              "ByteSpace has transformed my approach to learning. The diverse
              range of courses and the quality of content provided by creators
              have exceeded my expectations. The platform truly fosters a sense
              of community and lifelong learning."
            </p>
          </div>
          <div className=" bg-white rounded-2xl p-5 w-lg">
            <img src={Ellipse2} alt="" />
            <h2 className="mt-5 poppins-semibold text-xl">Sarah M.</h2>
            <p className="text-[#003BE2] font-light font-satoshi ">
              Enthusiastic Learner
            </p>
            <p className="mt-10 text-[#4F4F4F] font-light font-satoshi ">
              "ByteSpace has transformed my approach to learning. The diverse
              range of courses and the quality of content provided by creators
              have exceeded my expectations. The platform truly fosters a sense
              of community and lifelong learning."
            </p>
          </div>
          <div className=" bg-white rounded-2xl p-5 w-lg">
            <img src={Ellipse3} alt="" />
            <h2 className="mt-5 poppins-semibold text-xl">Sarah M.</h2>
            <p className="text-[#003BE2] font-light font-satoshi ">
              Enthusiastic Learner
            </p>
            <p className="mt-10 text-[#4F4F4F] font-light font-satoshi ">
              "ByteSpace has transformed my approach to learning. The diverse
              range of courses and the quality of content provided by creators
              have exceeded my expectations. The platform truly fosters a sense
              of community and lifelong learning."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
