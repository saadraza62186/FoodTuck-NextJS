'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
const Navbar = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-[#0D0D0D] w-full h-[90px] flex justify-between items-center px-4 lg:px-10'>
      {/* Logo */}
      <div className='flex-shrink-0'>
        <Image src='/Foodtuck.png' alt='Foodtuck' width={100} height={100} className='w-[80px] md:w-[100px] h-auto'/>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex hidden text-white gap-4 lg:gap-7 text-sm lg:text-base`}>
      <Link href="/blog" legacyBehavior>
      <h2 className="cursor-pointer hover:text-yellow-500">Home</h2>
    </Link>
        <h2 className='cursor-pointer hover:text-yellow-500'>Menu</h2>
        <h2 className='cursor-pointer hover:text-yellow-500'>Blog</h2>
        <h2 className='cursor-pointer hover:text-yellow-500'>Pages</h2>
        <h2 className='cursor-pointer hover:text-yellow-500'>About</h2>
        <h2 className='cursor-pointer hover:text-yellow-500'>Shop</h2>
        <h2 className='cursor-pointer hover:text-yellow-500'>Contact</h2>
      </div>

      {/* Icons */}
      <div className='text-white flex gap-3 w-6 h-6 mr-[50px]'>
        <SearchIcon className='cursor-pointer hover:text-yellow-500'/>
        <PersonIcon className='cursor-pointer hover:text-yellow-500'/>
        <ShoppingBagIcon className='cursor-pointer hover:text-yellow-500'/>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden flex items-center'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-white text-xl focus:outline-none'
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-[#0D0D0D] text-white flex flex-col items-center py-5 gap-4 z-10">
          {/* Close Button */}
          <button onClick={() => setIsMenuOpen(false)}>
            <CloseIcon />
          </button>
          <h2 className="cursor-pointer hover:text-yellow-500">Home</h2>
          <h2 className="cursor-pointer hover:text-yellow-500">Menu</h2>
          <h2 className="cursor-pointer hover:text-yellow-500">Blog</h2>
          <h2 className="cursor-pointer hover:text-yellow-500">Pages</h2>
          <h2 className="cursor-pointer hover:text-yellow-500">About</h2>
          <h2 className="cursor-pointer hover:text-yellow-500">Shop</h2>
          <h2 className="cursor-pointer hover:text-yellow-500">Contact</h2>
        </div>
      )}
    </div>
  );
};

export default Navbar;
