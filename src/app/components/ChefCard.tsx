import React from "react";
import Card from "./Card";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";
import TextArea from "./TextArea";
import FactoryIcon from "@mui/icons-material/Factory";
const ChefCard = (props : any) => {
  return (
    <div className="md:flex flex-wrap mt-5">
      <div className="flex flex-col mt-[60px]">
        <div className="flex gap-5 text-2xl ml-[60px]">
          <PinterestIcon />
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="md:mt-4">
          <Card image="/chef1.png" name="BulBul Hassan" position="Chef" />
        </div>
      </div>
      <div>
        <div className="flex md:mt-7">
          <div className="bg-[#BC9A6C] w-[60px] h-[65px] ml-[40px]">
            <Image src='/mug1.png' alt="Coffe Mug" width={100} height={100} />
          </div>
          <div className="ml-2">
            <h2 className="font-semibold">High quality coffee</h2>
            <h3 className="text-[14px]">
              Lorem ipsum dolor consectetur,
              <br />
              adipisicing elit.
            </h3>
          </div>
        </div>
        <div className="md:mt-2">
          <Card image="/chef2.png" name="Tahmina Rumi" position="Chef" />
        </div>
      </div>

      <div className="md:mt-[20px]">
        <div className="flex gap-2 ml-4 mt-8">
          <div className="ml-[40px]">
            <FactoryIcon />
          </div>
          <div className="">
            <h2>Quality Maintain</h2>
          </div>
        </div>
        <div className="md:mt-6">
          <Card image="/chef1.png" name="Mark Henry" position="Owner" />
        </div>
      </div>
      <div className="md:mt-[100px]">
        <Card image="/italiano.png" name="Grand Italiano" position="26 Items" />
      </div>
      <div className="md:ml-[450px]">
        <TextArea/>
      </div>
    </div>
  );
};

export default ChefCard;
