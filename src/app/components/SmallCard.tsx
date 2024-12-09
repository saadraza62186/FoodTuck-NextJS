import React from "react";
import Image from "next/image";

const SmallCard = ({ imagesrc, title, description }: any) => {
  return (
    <div className="flex w-[376px] h-[79px] border rounded-lg ml-[40px] mt-[50px]">
      {/* Image Section */}
      <div className="w-[79px] h-full">
        <Image
          src={imagesrc}
          alt="Card Image"
          width={79}
          height={79}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-end px-4">
        <p className="text-sm text-gray-600 font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default SmallCard;
