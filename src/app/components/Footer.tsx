import React from "react";
import Image from "next/image";
import UpdateIcon from "@mui/icons-material/Update";
import Broast from "./Broast";

const Footer = () => {
  return (
    <div className="w-full bg-[#0D0D0D] p-6 md:p-10 mt-[40px]">
      {/* Border line container */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-[#FF9F0D] p-6 mb-10">
        {/* Left Section */}
        <div className="text-white mb-4 md:mb-0 md:mt-3 text-center md:text-left">
          <h1 className="text-[17px] font-bold">Still You Need Our Support?</h1>
          <p className="text-[14px]">
            Don't wait, make a smart & logical quote here. It's pretty easy.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="flex-1 border p-2 text-white bg-[#FF9F0D] border-[#FF9F0D] w-full md:w-auto"
            />
            <button className="text-[#FF9F0D] bg-white border px-4 py-2 w-full md:w-auto md:h-full flex justify-center items-center">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
        {/* About Us Section */}
        <div>
          <h1 className="text-lg font-semibold mb-4">About Us</h1>
          <p className="text-[14px] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illo
            mollitia laudantium maiores excepturi dolore in dicta possimus
            natus, nam voluptate aspernatur amet officiis quaerat veniam
            consequuntur earum, labore officia?
          </p>
          <div className="flex items-start gap-4 mt-5">
            <div className="bg-[#FF9F0D] w-[50px] h-[70px] flex justify-center items-center rounded-lg">
              <UpdateIcon className="text-white text-[50px]" />
            </div>
            <div>
              <p>Opening Hours</p>
              <p>Mon - Sat(8.00 - 6.00)</p>
              <p>Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links Section */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Useful Links</h1>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              News
            </a>
            <a href="#" className="hover:underline">
              Partners
            </a>
            <a href="#" className="hover:underline">
              Team
            </a>
            <a href="#" className="hover:underline">
              Menu
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Help?</h1>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">
              FAQ
            </a>
            <a href="#" className="hover:underline">
              Term & Condition
            </a>
            <a href="#" className="hover:underline">
              Reporting
            </a>
            <a href="#" className="hover:underline">
              Documentation
            </a>
            <a href="#" className="hover:underline">
              Support Policy
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Recent Posts</h1>
          <div className="flex flex-col gap-4">
            <Broast
              name="Is fastfood good for your body?"
              imageSrc="/broast.png"
              price="February 28,2022"
            />
            <Broast
              name="Change your food habit with organic food"
              imageSrc="/broast.png"
              price="February 28,2022"
            />
            <Broast
              name="Do you like fastfood for your life?"
              imageSrc="/broast.png"
              price="February 28,2022"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
