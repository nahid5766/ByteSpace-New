import React from "react";
import logoImg from "../../assets/Vector.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#242528] max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-10 sm:py-12">
      {/* Top Section */}
      <div>
        {/* Logo Section */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <img
            className="w-8 h-8 object-contain"
            src={logoImg}
            alt="ByteSpace Logo"
          />
          <h1 className="font-clash text-2xl font-bold">ByteSpace</h1>
        </div>

        {/* Grid Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 text-sm">
          {/* Form Section - Takes 2 columns on Large screens */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <p className="font-satoshi text-sm font-light text-gray-700 max-w-md">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>

              {/* Responsive Form */}
              <form className="flex flex-col sm:flex-row items-stretch sm:items-center my-6 gap-3 sm:gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-full px-5 py-3 w-full outline-none text-sm focus:border-black transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#D4FB20] text-black font-satoshi font-medium px-6 py-3 rounded-full hover:bg-opacity-90 transition-all text-sm shrink-0"
                >
                  Search
                </button>
              </form>
            </div>

            <p className="text-xs text-gray-500 max-w-md mt-2">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Navigation Links Column 1 */}
          <div className="flex flex-col gap-4 sm:gap-5 items-center sm:items-start">
            <a href="#" className="hover:underline">
              Featured Courses
            </a>
            <a href="#" className="hover:underline">
              Featured Categories
            </a>
            <a href="#" className="hover:underline">
              Business
            </a>
            <a href="#" className="hover:underline">
              IT
            </a>
            <a href="#" className="hover:underline">
              Design
            </a>
          </div>

          {/* Navigation Links Column 2 */}
          <div className="flex flex-col gap-4 sm:gap-5 items-center sm:items-start">
            <a href="#" className="hover:underline">
              Development
            </a>
            <a href="#" className="hover:underline">
              Marketing
            </a>
            <a href="#" className="hover:underline">
              Photography
            </a>
            <a href="#" className="hover:underline">
              Finance
            </a>
            <a href="#" className="hover:underline">
              Sport
            </a>
          </div>

          {/* Navigation Links Column 3 */}
          <div className="flex flex-col gap-4 sm:gap-5 items-center sm:items-start">
            <a href="#" className="hover:underline">
              Become a Creator
            </a>
            <a href="#" className="hover:underline">
              Affiliate Program
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              Help
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-16 sm:mt-24 lg:mt-28 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600 gap-4">
        <p className="text-center sm:text-left">
          @ 2023 ByteSpace. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
