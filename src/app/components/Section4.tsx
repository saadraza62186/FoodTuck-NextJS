import React from "react";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Section4 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 lg:px-20 mt-10 md:mt-[90px]">
      {/* Newsletter Title */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl">
          Subscribe
          <br />
          to Our Newsletter
        </h1>
      </div>

      {/* Input and Button */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="border p-2 w-full md:w-auto md:pl-7 md:pr-[100px] border-[#BC9A6C]"
        />
        <button className="bg-[#BC9A6C] text-white px-4 py-2 w-full md:w-auto md:h-full flex justify-center items-center">
          Subscribe Now
        </button>
      </div>

      {/* Social Icons */}
      <div className="mt-6 md:mt-0">
        <div className="flex gap-5 text-lg md:text-2xl justify-center">
          <PinterestIcon className="bg-[#BC9A6C] w-10 h-10 p-2 rounded-full text-white" />
          <FacebookIcon className="bg-[#BC9A6C] w-10 h-10 p-2 rounded-full text-white" />
          <TwitterIcon className="bg-[#BC9A6C] w-10 h-10 p-2 rounded-full text-white" />
          <InstagramIcon className="bg-[#BC9A6C] w-10 h-10 p-2 rounded-full text-white" />
          <YouTubeIcon className="bg-[#BC9A6C] w-10 h-10 p-2 rounded-full text-white" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
