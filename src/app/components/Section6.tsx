// Mark the component as a Client Component
"use client";
import React from "react";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ComboBox from "./ComboBox";
import TextArea from "./TextArea";
import SearchIcon from "@mui/icons-material/Search";
import RecipieCard from "./RecipieCard";
import NoodlesCard from "./NoodlesCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
const Section6 = () => {
  return (
    <div>
      <div>
        <div className="flex flex-wrap gap-5 text-2xl ml-[60px] mt-[40px] justify-center md:justify-start">
          <PinterestIcon />
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
      </div>

      <div>
        <div className="ml-[30px] md:mr-[770px]">
          <ComboBox name="Default" />
        </div>
        <div className="ml-[30px] md:mr-[770px]">
          <ComboBox name="Newest" />
        </div>
        <div className="flex items-center gap-3 ml-[50px] md:mt-4 mt-4">
          <input type="checkbox" id="sandwiches" className="w-5 h-5" />
          <label htmlFor="sandwiches" className="text-sm text-gray-700">
            Sandwiches
          </label>
        </div>
      </div>
      <div className="mt-[40px] ml-[30px]">
        <div className="flex ml-5">
          {/* Email Input */}
          <div>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border p-2 bg-[#FF9F0D1A]"
            />
          </div>
          {/* Icon Container */}
          <div className="flex justify-center w-[40px] h- items-center bg-[#FF9F0D] p-2 rounded">
            <SearchIcon className="text-white" />
          </div>
        </div>
      </div>
      <div className="mt-[40px] ml-10">
        <RecipieCard name="Pizza" imageSrc="/pizza2.png" price="$35.00" />
      </div>
      <div>
        <div className="w-[312px] h-[391px] relative border rounded-lg overflow-hidden shadow-md mt-[40px] ml-[40px]">
          {/* Image Section */}
          <Image
            width={100}
            height={100}
            src="/expert.png" // Replace with your image path
            alt="Chef Image"
            className="w-full h-full object-cover"
          />

          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 w-25px bg-white bg-opacity-70 p-3">
            <h1 className="text-xl font-bold text-center">D.Estwood</h1>
            <p className="text-sm text-center text-gray-500">Chief Chef</p>
          </div>
        </div>
      </div>
      <div className="mt-[40px] ml-10">
        <RecipieCard name="Broast" imageSrc="/broast.png" price="$35.00" />
      </div>
      <div className="mt-[40px] ml-10">
        <RecipieCard name="Broast" imageSrc="/broast.png" price="$35.00" />
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 ml-[40px] mt-[40px] ">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="border p-2 w-full md:w-auto md:pl-7 md:pr-[100px] text-white border-[#195A00] bg-[#195A00]"
          />
          <button className=" text-[#195A00] border px-4 py-2 w-full md:w-auto md:h-full flex justify-center items-center">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="mt-[40px] ml-[40px] md:mr-[300px]">
        <div className="flex justify-center items-center">
          <div className="w-[900px] h-[80vh]">
            <Image
              width={900}
              height={900}
              src="/comments2.png"
              alt="High Quality"
              className="w-[900px] object-cover rounded-lg"
              quality={100} // Maximum quality
            />
          </div>
        </div>
      </div>
      <div className="ml-[40px] ">
        <NoodlesCard imageSrc="/Noodles.png" />
      </div>
      <div className="mt-[40px] ml-[40px] md:mr-[300px]">
        <div className="flex justify-center items-center">
          <div className="w-[900px] h-[80vh]">
            <Image
              width={900}
              height={500}
              src="/Footer.png" // Ensure this path is correct
              alt="High Quality Footer Image"
              className="w-full max-w-[900px] h-auto object-cover rounded-lg "
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
      <div className="ml-[40px]">
        <div className="w-full max-w-sm mx-auto lg:mx-0 bg-white rounded-lg shadow-lg overflow-hidden dark:bg-slate-800 ">
          {/* Image */}
          <Image
            width={100}
            height={100}
            src="/burgur.png"
            alt="Cup of coffee"
            className="w-full h-48 object-cover sm:h-56 md:h-64"
            quality={100}
            priority
          />

          {/* Content */}
          <div className="p-4 sm:p-6">
            {/* Date and Author */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="flex items-center mr-4">10 February 2022 </span>
            </div>

            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
            </h4>
            <button className="mt-4 inline-block text-sm text-[#BC9A6C] font-semibold border border-[#BC9A6C] rounded-lg py-2 px-4 hover:bg-[#BC9A6C] hover:text-white transition-colors duration-300">
              Learn More
              <ArrowForwardIcon className="ml-3 text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
