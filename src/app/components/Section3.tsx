'use client'
import { useState } from "react";
import React from "react";
import CoffeeCard from "./CoffeeCard";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import Image from "next/image";
const Section3 = () => {
  // State to control card visibility
  const [showCards, setShowCards] = useState(false);

  // Toggle card visibility
  const handleShowMore = () => {
    setShowCards((prev) => !prev);
  };
  return (
    <div className="px-4 lg:px-12">
      {/* Service Information */}
      <div className="mt-6 lg:mt-8">
        <div className="flex items-center gap-2 text-sm md:text-base font-semibold">
          <AccessAlarmIcon className="text-[#BC9A6C]" />
          <p>24/7 Services</p>
        </div>
      </div>

      {/* CoffeeCard 1 */}
      <div className="mt-6 lg:mt-10">
        <CoffeeCard Image="/cake1.png" />
      </div>

      {/* Food Information */}
      <div className="mt-10 lg:mt-16">
        <div className="flex items-center gap-2 text-sm md:text-base font-semibold">
          <LunchDiningIcon className="text-[#BC9A6C]" />
          <p>Fresh Food</p>
        </div>
      </div>

      {/* CoffeeCard 2 */}
      <div className="mt-6 lg:mt-10">
        <CoffeeCard Image="/coffee.png" />
      </div>
      <div className="md:flex md:justify-between">
      <div className="flex mt-[50px]">
        <div>
          <Image src="/iCON.png" alt="" width={100} height={100} />
        </div>
        <div className="flex flex-col justify-center mb-4">
          <h2 className="font-semibold">Capuccino</h2>
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Doloribus sequi hic animi quibusdam repellat adipis
          </p>
        </div>
      </div>
      <div className="flex mt-[50px] items-center">
        <div className="bg-[#BC9A6C] h-[100px] w-[80px] rounded-lg flex items-center justify-center bg-cover">
          <Image src="/dollar.png" alt="Dollar Icon" width={80} height={50} className="w-[50px]"/>
        </div>
        <div className="flex flex-col justify-center ml-4 mb-[30px]">
          <h2 className="font-semibold text-lg">Promo & deal</h2>
          <p className="text-[13px] text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Doloribus sequi hic animi quibusdam repellat adipis
          </p>
        </div>
      </div>
      </div>
      <div className="px-4 lg:px-12">
      {/* Button to Show/Hide Cards */}
      <div className="flex justify-center items-center mt-6">
        <div className="bg-[#FF9F0D] h-[50px] w-[150px] text-white rounded-md mt-7 flex justify-center items-center">
          <button onClick={handleShowMore}>
            {showCards ? "Hide" : "Show more"}
          </button>
        </div>
      </div>

      {/* Conditionally Rendered Cards */}
      {showCards && (
        <div>
          {/* Service Information */}
          <div className="flex mt-[50px] items-center">
        <div className="bg-[#BC9A6C] h-[100px] w-[80px]  rounded-lg flex items-center justify-center bg-cover">
          <Image src="/chef3.png" alt="Dollar Icon" width={80} height={50} className="w-[50px] " />
        </div>
        <div className="flex flex-col justify-center ml-4 mb-[40px]">
          <h2 className="font-semibold text-lg">Promo & deal</h2>
          <p className="text-[13px] text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Doloribus sequi hic animi quibusdam repellat adipis
          </p>
        </div>
      </div>

          {/* CoffeeCard 1 */}
          <div className="mt-6 lg:mt-[40px]">
            <CoffeeCard Image="/cake1.png" />
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Section3;
