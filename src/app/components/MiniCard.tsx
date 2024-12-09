import React from "react";
import Image from "next/image";

const MiniCard = () => {
  return (
    <div className="w-[312px] h-[309px] bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="w-full h-[217px] relative">
        <Image
          src="/bean.png" // Replace with your image source
          alt="Coffee Beans"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-between">
      <div className="px-4 py-2">
        <p className="text-gray-800 text-sm">
        Coffee Beans
        </p>
      </div>
      <div className="flex justify-between items-center px-4 py-2">
        <p className="text-yellow-500">⭐⭐⭐⭐☆</p>
      </div>
      </div>
      {/* Price Section */}
      <div className="px-4 py-2">
        <p className="text-xl font-semibold text-gray-800">$43.78</p>
      </div>
    </div>
  );
};

export default MiniCard;
