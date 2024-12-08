"use client";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CoffeeCard = ({ Image }: { Image: string }) => {
  // State to manage duplicates
  const [showDuplicate, setShowDuplicate] = useState(false);

  // Function to handle "Read more" click
  const handleReadMore = () => {
    setShowDuplicate(true);
  };

  // Function to handle "Back" click
  const handleBack = () => {
    setShowDuplicate(false);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-6 w-full max-w-4xl mx-auto">
      {/* Original Card */}
      <div className="w-full max-w-sm mx-auto lg:mx-0 bg-white rounded-lg shadow-lg overflow-hidden dark:bg-slate-800">
        {/* Image */}
        <img
          src={Image}
          alt="Cup of coffee"
          className="w-full h-48 object-cover sm:h-56 md:h-64"
        />

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Date and Author */}
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="flex items-center mr-4">09 February 2022</span>
            <span className="flex items-center">By Albert</span>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Simple Coffee Recipes for Next Spring!
          </h4>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur varius sed pharetra dictum...
          </p>

          <button
            onClick={handleReadMore}
            className="mt-4 inline-block text-sm text-[#BC9A6C] font-semibold border border-[#BC9A6C] rounded-lg py-2 px-4 hover:bg-[#BC9A6C] hover:text-white transition-colors duration-300"
          >
            Read more
            <ArrowForwardIcon className="ml-3 text-[20px]" />
          </button>
        </div>
      </div>

      {/* Duplicate Card */}
      {showDuplicate && (
        <div className="w-full max-w-sm mx-auto lg:mx-0 bg-white rounded-lg shadow-lg overflow-hidden dark:bg-slate-800">
          <img
            src={Image}
            alt="Cup of coffee"
            className="w-full h-48 object-cover sm:h-56 md:h-64"
          />

          <div className="p-4 sm:p-6">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="flex items-center mr-4">09 February 2022</span>
              <span className="flex items-center">By Albert</span>
            </div>

            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Simple Coffee Recipes for Next Spring!
            </h4>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              adipisci placeat est quisquam voluptatem incidunt sequi quasi
              iste magni. Maiores nulla, veniam sunt aperiam vitae voluptatibus
              corporis inventore aspernatur repudiandae?
            </p>

            <div className="flex justify-between mt-4">
              <button
                onClick={handleBack}
                className="text-sm text-[#BC9A6C] font-semibold border border-[#BC9A6C] rounded-lg py-2 px-4 hover:bg-[#BC9A6C] hover:text-white transition-colors duration-300"
              >
                Back
              </button>
              <button className="text-sm text-[#BC9A6C] font-semibold border border-[#BC9A6C] rounded-lg py-2 px-4 hover:bg-[#BC9A6C] hover:text-white transition-colors duration-300">
                Place an order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeCard;
