import React from "react";
import logoImg from "../../assets/Vector.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#242528] max-w-[1440px] mx-auto px-16 py-12 ">
      {/* Top Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <img className="w-8 h-8" src={logoImg} alt="ByteSpace Logo" />
          <h1 className="font-clash text-2xl font-bold mt-1">ByteSpace</h1>
        </div>

        {/* Grid Structure Updated */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 text-sm">
          {/* Form Section - Expanded Width using col-span-2 */}
          <div className="lg:col-span-2 w-130 gap-7">
            <p className="font-satoshi text-sm font-light text-gray-700">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="flex items-center my-12 gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-full px-5 py-3 w-2xl outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-[#D4FB20] text-black font-satoshi font-medium px-6 py-3 rounded-full hover:bg-opacity-90 transition-all text-sm shrink-0"
              >
                Search
              </button>
            </form>

            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Column 1 */}
          <div className="flex flex-col gap-7 ml-15">
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

          {/* Column 2 */}
          <div className="flex flex-col gap-7">
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

          {/* Column 3 */}
          <div className="flex flex-col gap-7">
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
      <div className="border-t border-gray-200 mt-36 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 ">
        <p>@ 2023 ByteSpace. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
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
