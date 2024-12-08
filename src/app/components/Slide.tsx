import React from "react";
import Image from "next/image";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slide = () => {
  return (
    <div>
      <div className="relative w-full h-[80vh]">
        <Image
          src="/slide.png"
          alt="Our Shop"
          layout="fill" // Makes the image fill the container
          objectFit="cover" // Ensures the image maintains its aspect ratio
          quality={100} // Renders the image in high quality
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="text-white text-[48px] font-bold bg-opacity-50 px-4 py-2 rounded-lg">
          Our Shop
        </h1>
        <h3 className=" flex text-white text-[20px] gap-2 font-bold bg-opacity-10 px-4 py-2 rounded-lg">
            Home
         <ArrowForwardIosIcon className="text-[20px] mt-[5px]"/>
         <div className="text-yellow-600">Shop</div>
        </h3>
      </div>
    </div>
  );
};

export default Slide;
