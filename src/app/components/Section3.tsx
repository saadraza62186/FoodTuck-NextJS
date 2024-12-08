import React from "react";
import CoffeeCard from "./CoffeeCard";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

const Section3 = () => {
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
    </div>
  );
};

export default Section3;
