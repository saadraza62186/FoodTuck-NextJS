import React from "react";
import Label from "./Label";
import CoffeeCard from "./CoffeeCard";
import CommentCard from "./CommentCard";
import SmallCard from "./SmallCard";
import Image from "next/image";
import Items from "./Items";
import MiniCard from "./MiniCard";

const Section5 = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Label Section */}
      <div className="mb-10">
        <Label name="Americano" imageSrc="/tea.png" />
      </div>

      {/* Coffee Card Section */}
      <div className="mb-16">
        <CoffeeCard Image="/cheez.png" />
      </div>

      {/* Comment Card Section */}
      <div className="flex justify-center mb-10">
        <CommentCard Image1="/commenticon.png" Image2="/commentphoto.png" />
      </div>

      {/* Small Card Section */}
      <div className="mb-10">
        <SmallCard imagesrc="/salmoon.png" title="ssss" description="12.2" />
      </div>

      {/* Alder Grilled Chinook Salmoon Section */}
      <div className="border w-full max-w-[900px] mx-auto mt-7">
        <div className="flex justify-between items-center px-3 py-3">
          <h1 className="font-bold">Alder Grilled Chinook Salmoon</h1>
          <p className="text-[#FF9F0D]">$32</p>
        </div>
        <div className="px-3 mt-4">
          <p className="font-extralight">Toasted French bread topped with romano, cheddar</p>
          <p className="font-extralight">550 CAL</p>
        </div>
      </div>

      {/* Label Section for "Esperesso" */}
      <div className="mb-10 mt-16">
        <Label name="Esperesso" imageSrc="/peanut.png" />
      </div>

      {/* Coffee Card Section for "Esperesso" */}
      <div className="mb-16">
        <CoffeeCard Image="/pizza1.png" />
      </div>

      {/* Label Section for "Arabica" */}
      <div className="mb-10">
        <Label name="Arabica" imageSrc="/mug2.png" />
      </div>

      {/* Items Grid Section */}
      <div className="mb-16">
        <Items />
      </div>

      {/* Label Section for "Coffee stimy" */}
      <div className="mb-10">
        <Label name="Coffee stimy" imageSrc="/tea2.png" />
      </div>

      {/* Mini Card Section */}
      <div className="mb-10 md:ml-[40px]">
        <MiniCard />
      </div>

      {/* Fast Delivery and Coffee stimy Label Sections */}
      <div className="md:flex md:justify-between md:gap-[90px] sm:grid sm:grid-cols-1 md:grid-cols-3 mt-10">
        <div className="mb-6 sm:mb-0">
          <Label name="Fast Delivery" imageSrc="/truck.png" />
        </div>
        <div className="mb-6 sm:mb-0">
          <Label name="Coffee stimy" imageSrc="/bag.png" />
        </div>
        <div className="mb-6 sm:mb-0">
          <Label name="Fast Delivery" imageSrc="/truck.png" />
        </div>
      </div>
    </div>
  );
};

export default Section5;
