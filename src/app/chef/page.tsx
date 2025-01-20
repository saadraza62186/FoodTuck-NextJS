import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OurChef from '../components/OurChef';
import MainFooter from '../components/MainFooter';
import { client, urlFor } from '../lib/sanity';

const page = async () => {
  // Fetch data from Sanity
  const query = '*[_type == "chef"]'; // Adjust based on your Sanity schema
  const chefs = await client.fetch(query);

  return (
    <div>
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center 2xl:w-[1920px] bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      {/* Image Section */}
      <div className="w-[1920px] h-[410px] relative">
        <Image
          src="/menu1.png"
          alt="Menu Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-helvetica font-bold text-[48px] text-[#FFFFFF]">
            Our Chef
          </h1>
          <div className="font-normal text-[20px] text-[#FFFFFF] flex items-center gap-2">
            Home <ArrowForwardIosIcon className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">Chef</div>
          </div>
        </div>
      </div>

      {/* Chef Cards Section */}
      <div className="w-[1320px] h-[1386px] ml-[300px] mt-[200px]">
        <div className="flex flex-wrap justify-center items-center gap-5">
          {chefs.map((chef : any) => (
            <OurChef
              key={chef._id}
              imageSrc={urlFor(chef.image).url()} // Use `urlFor` to generate image URL
              name={chef.name}
            />
          ))}
        </div>
      </div>

      <div className="mt-[100px]">
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
