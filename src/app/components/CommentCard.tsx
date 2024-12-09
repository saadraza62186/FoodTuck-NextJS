import React from "react";
import Image from "next/image";

const CommentCard = ({ Image1, Image2 }: any) => {
  return (
    <div className="rounded-lg p-6 mx-auto w-full max-w-4xl bg-white shadow-md md:ml-[40px]">
      {/* Comment Icon */}
      <div className="mb-4 flex justify-center sm:justify-start">
        <Image
          src={Image1}
          alt="Comment"
          className="w-12 h-12"
          width={50}
          height={50}
        />
      </div>

      {/* User Info */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
        <Image
          src={Image2}
          alt="User"
          width={100}
          height={100}
          className="w-20 h-20 rounded-full"
        />
        <div className="text-center sm:text-left sm:ml-4 mt-4 sm:mt-0">
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-sm text-gray-500">123 Main Street, City, Country</p>
        </div>
      </div>

      {/* Reviews */}
      <div className="mb-4 text-center sm:text-left sm:ml-24">
        <h3 className="text-md font-bold text-gray-700">Reviews</h3>
        <p className="text-gray-600">⭐⭐⭐⭐☆</p>
      </div>

      {/* Comment Text */}
      <p className="text-gray-700 text-sm text-center sm:text-left sm:ml-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default CommentCard;
