import React from "react";
import Image from "next/image";

const SmallCard = ({ imagesrc, title, description }: any) => {
  return (
    <div className="flex w-[376px] h-[79px] border rounded-lg ml-[40px] mt-[50px] sm:w-[280px] sm:h-[100px] md:w-[320px] md:h-[120px] hover:shadow-lg transition-all duration-300">
      {/* Image Section */}
      <div className="w-[79px] h-full">
        <Image
          src={imagesrc}
          alt={title}
          width={79}
          height={79}
          className="object-cover h-full w-full rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center px-4">
        <h3 className="text-md text-gray-800 font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default SmallCard;
