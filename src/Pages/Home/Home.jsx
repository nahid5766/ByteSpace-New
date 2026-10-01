import React, { Suspense } from "react";
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
import Ellipse001 from "../../assets/Ellipse 7.png";
import imgPng from "../../assets/Image.png";

import { useLoaderData } from "react-router";
import YourPath from "../YourPath/YourPath";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  const courseData = useLoaderData();

  return (
    <div className="relative w-full mx-auto overflow-hidden pb-16">
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Banner></Banner>

        {/* <div className="relative overflow-hidden  w-90 md:w-fit items-center mx-auto ">
          <img className="w-fit h-84 mt-13 mx-auto" src={Ellipse001} alt="" />
          <img
            className="w-100 h-fit md:w-fit md:h-106 -mt-106 mx-auto"
            src={imgPng}
            alt=""
          />
        </div> */}
      </section>

      <div className="bg-[#F5F5F6] py-8 px-4 sm:px-8 md:px-16 lg:px-32 flex flex-wrap items-center justify-center sm:justify-between gap-6 min-h-[120px] md:min-h-[202px]">
        <img
          src={logoIpsum1}
          alt="Logo 1"
          className="h-6 sm:h-8 object-contain"
        />
        <img
          src={logoIpsum2}
          alt="Logo 2"
          className="h-6 sm:h-8 object-contain"
        />
        <img
          src={logoIpsum3}
          alt="Logo 3"
          className="h-6 sm:h-8 object-contain"
        />
        <img
          src={logoIpsum4}
          alt="Logo 4"
          className="h-6 sm:h-8 object-contain"
        />
        <img
          src={logoIpsum5}
          alt="Logo 5"
          className="h-6 sm:h-8 object-contain"
        />
      </div>

      <div>
        {/* Discover section */}
        <div className="mt-17 text-center">
          <h1 className="poppins-semibold text-3xl md:text-4xl">
            Discover Your Passion,
            <br /> Build Your Skills
          </h1>
          <p className="font-satoshi text-[#82868E] w-80 md:w-10/12 mx-auto font-light mt-6">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different <br />{" "}
            fields, from technology to the arts, and make a difference in your
            career and life.
          </p>
        </div>

        {/* btn section */}
        <div className="font-satoshi font-light mt-8 md:mt-15 px-4 max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
            {/* Row 1 Items */}
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#D4FB20] font-medium">
              Featured
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Music
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Drawing & Painting
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Marketing
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Animation
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Social Media
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              UI/UX Design
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Creative Marketing
            </button>

            {/* Row 2 Items */}
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Digital Illustration
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Film & Video
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Crafts
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Freelance & Entrepreneurship
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Graphic Design
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Photography
            </button>

            {/* Row 3 Items */}
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Productivity
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Web Development
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Data Science
            </button>
            <button className="px-4 py-2 text-sm md:text-base rounded-full bg-[#F5F5F6] hover:bg-gray-200 transition-colors">
              Cooking
            </button>
            <button className="px-2 py-2 text-sm md:text-base font-medium text-[#003BE2] hover:underline">
              + More
            </button>
          </div>
        </div>
      </div>

      {/* Cards container */}
      <Suspense fallback={<span>Loader...</span>}>
        <div className="max-w-12/15 mx-auto sm:px-6 lg:px-2 py-18">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {courseData?.slice(0, 6).map((course) => (
              <HomeCards key={course.id} course={course}></HomeCards>
            ))}
          </div>
        </div>
      </Suspense>

      <div className="text-center">
        <div>
          <h1 className="poppins-semibold text-lg md:text-4xl">
            Explore Diverse Learning Paths at Bytespace
          </h1>
          <p className="mt-6 text-gray-400 w-80 mx-auto md:w-5xl font-light">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various <br /> fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        {/* explor icon here */}
        <div className="my-10 md:my-18 px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
            <div className="border border-gray-300 w-full aspect-square max-w-[140px] rounded-2xl flex items-center justify-center text-center p-2 hover:shadow-md transition-shadow">
              <div>
                <img className="w-10 sm:w-12 mx-auto" src={design} alt="" />
                <p className="mt-2 text-sm sm:text-base font-medium">Design</p>
              </div>
            </div>

            <div className="border border-gray-300 w-full aspect-square max-w-[140px] rounded-2xl flex items-center justify-center text-center p-2 hover:shadow-md transition-shadow">
              <div>
                <img className="w-10 sm:w-12 mx-auto" src={devimg} alt="" />
                <p className="mt-2 text-sm sm:text-base font-medium">
                  Development
                </p>
              </div>
            </div>

            <div className="border border-gray-300 w-full aspect-square max-w-[140px] rounded-2xl flex items-center justify-center text-center p-2 hover:shadow-md transition-shadow">
              <div>
                <img className="w-10 sm:w-12 mx-auto" src={itImg} alt="" />
                <p className="mt-2 text-sm sm:text-base font-medium">
                  IT & Software
                </p>
              </div>
            </div>

            <div className="border border-gray-300 w-full aspect-square max-w-[140px] rounded-2xl flex items-center justify-center text-center p-2 hover:shadow-md transition-shadow">
              <div>
                <img className="w-10 sm:w-12 mx-auto" src={busImg} alt="" />
                <p className="mt-2 text-sm sm:text-base font-medium">
                  Business
                </p>
              </div>
            </div>

            <div className="border border-gray-300 w-full aspect-square max-w-[140px] rounded-2xl flex items-center justify-center text-center p-2 hover:shadow-md transition-shadow">
              <div>
                <img className="w-10 sm:w-12 mx-auto" src={markImg} alt="" />
                <p className="mt-2 text-sm sm:text-base font-medium">
                  Marketing
                </p>
              </div>
            </div>

            <div className="border border-gray-300 w-full aspect-square max-w-[140px] rounded-2xl flex items-center justify-center text-center p-2 hover:shadow-md transition-shadow">
              <div>
                <img className="w-10 sm:w-12 mx-auto" src={phoImg} alt="" />
                <p className="mt-2 text-sm sm:text-base font-medium">
                  Photography
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* yourPath section */}
      <div>
        {courseData?.slice(0, 1).map((course) => (
          <YourPath key={course.id} course={course}></YourPath>
        ))}
      </div>

      {/* unlock section */}
      <div
        className="bg-amber-100 overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="text-center py-12 md:py-20 px-4 md:px-0 relative">
          {/* Decorative Images */}
          <img
            src={cone1}
            alt=""
            className="hidden md:block absolute top-8 right-40 z-1 pointer-events-none opacity-100"
          />
          <img
            src={cone2}
            alt=""
            className="absolute top-30 right-0 z-1 w-13 md:w-30 pointer-events-none opacity-100"
          />
          <img
            src={Frame4}
            alt=""
            className="absolute right-0 bottom-0 z-1 w-36 md:w-80 pointer-events-none opacity-100"
          />
          <img
            src={Mask}
            alt=""
            className="absolute left-0 bottom-0 z-1 w-36 md:w-80 pointer-events-none opacity-100"
          />
          <img
            src={Mask1}
            alt=""
            className="hidden md:block absolute left-0 bottom-30 z-1 md:w-30 pointer-events-none opacity-100"
          />
          <img
            src={Frame3}
            alt=""
            className="absolute left-0 top-0 z-1 w-28 md:w-60 pointer-events-none opacity-100"
          />
          <img
            src={Frame5}
            alt=""
            className="hidden md:block absolute left-40 top-8 z-1 md:w-40 pointer-events-none opacity-100"
          />

          {/* Content */}
          <h1 className="poppins-semibold mt-6 md:mt-10 text-2xl sm:text-3xl md:text-5xl text-white leading-snug md:leading-tight relative z-10">
            Unlock Your Potential as a <br className="hidden sm:block" />{" "}
            Creator with ByteSpace
          </h1>

          <p className="text-[#F5F5F6] font-light my-6 md:my-9 text-sm md:text-base max-w-3xl mx-auto leading-relaxed relative z-10">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>

          <button className="bg-[#D4FB20] text-black font-semibold px-2 py-1 sm:px-6 sm:py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 relative z-10">
            Join as Creator
          </button>
        </div>
      </div>
      {/* discover section */}
      <div className="bg-[#FAFAFA] relative py-20 overflow-hidden z-0">
        <img
          src={Ellipse25}
          alt=""
          className="absolute right-0 top-0 z-10 md:w-130 pointer-events-none opacity-100"
        />
        <img
          src={Ellipse15}
          alt=""
          className="absolute left-180 top-5 z-10 md:w-140 pointer-events-none opacity-90"
        />

        <img
          src={Ellipse8}
          alt=""
          style={{ transform: "rotate(90deg)" }}
          className="absolute bottom-4 md:w-150 -left-3 z-10 pointer-events-none opacity-40"
        />

        {/* header section  */}
        <section className="px-4 sm:px-8 lg:px-20 py-10 relative z-20 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-10">
            <div className="mt-2 md:mt-6 md:w-1/2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl poppins-semibold leading-snug sm:leading-normal">
                Discover What Our <br className="hidden sm:block" /> Community
                Is Saying
              </h1>
            </div>
            <div className="md:w-1/2 lg:max-w-md">
              <p className="font-light text-[#4F4F4F] text-sm sm:text-base leading-relaxed">
                At ByteSpace, our vibrant community of learners and creators is
                at the heart of what we do. Hear directly from those who have
                experienced the transformative journey of learning and creating
                on our platform. Explore testimonials that reflect the diverse
                perspectives of enthusiastic learners and accomplished creators.
              </p>
            </div>
          </div>

          {/* Cards Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <img
                  src={Ellipse}
                  alt="Sarah M."
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h2 className="mt-5 poppins-semibold text-xl">Sarah M.</h2>
                <p className="text-[#003BE2] font-light font-satoshi text-sm sm:text-base">
                  Enthusiastic Learner
                </p>
              </div>
              <p className="mt-6 text-[#4F4F4F] font-light font-satoshi text-sm sm:text-base leading-relaxed">
                "ByteSpace has transformed my approach to learning. The diverse
                range of courses and the quality of content provided by creators
                have exceeded my expectations. The platform truly fosters a
                sense of community and lifelong learning."
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <img
                  src={Ellipse2}
                  alt="Sarah M."
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h2 className="mt-5 poppins-semibold text-xl">Sarah M.</h2>
                <p className="text-[#003BE2] font-light font-satoshi text-sm sm:text-base">
                  Enthusiastic Learner
                </p>
              </div>
              <p className="mt-6 text-[#4F4F4F] font-light font-satoshi text-sm sm:text-base leading-relaxed">
                "ByteSpace has transformed my approach to learning. The diverse
                range of courses and the quality of content provided by creators
                have exceeded my expectations. The platform truly fosters a
                sense of community and lifelong learning."
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm md:col-span-2 lg:col-span-1">
              <div>
                <img
                  src={Ellipse3}
                  alt="Sarah M."
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h2 className="mt-5 poppins-semibold text-xl">Sarah M.</h2>
                <p className="text-[#003BE2] font-light font-satoshi text-sm sm:text-base">
                  Enthusiastic Learner
                </p>
              </div>
              <p className="mt-6 text-[#4F4F4F] font-light font-satoshi text-sm sm:text-base leading-relaxed">
                "ByteSpace has transformed my approach to learning. The diverse
                range of courses and the quality of content provided by creators
                have exceeded my expectations. The platform truly fosters a
                sense of community and lifelong learning."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
