"use client"
import React, { useState } from 'react'
import SearchBar from './SearchBar';
import Image from 'next/image';
import userimg from '../../../public/user.jpg';
import Link from 'next/link';
import { CiShoppingCart } from 'react-icons/ci';
import { BsChevronCompactUp } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
type Props = {}

const Navbar = (props: Props) => {
  const [showProfile, setshowProfile] = useState<boolean>(false);
  const [showNav, setshowNav] = useState<boolean>(false);
  return (
    <div>
      <div className='flex justify-between items-center  py-4 relative'>
        <div className="flex items-center md:ml-20  lg:ml-40  ">
          <div className=" font-semibold text-2xl "><a href='/'>SEINE</a> </div>
          <nav className=' max-md:hidden'>
            <ul className='flex items-center   justify-between  lg:ml-20   ml-10  opacity-70 text-[15px]'>
              <li><a href="/" className='py-3 inline-block w-full'>Shop</a> </li>
              <li><a href="filters" className='py-3 inline-block w-full'>Filters</a> </li>
              <li><a href="myproducts" className='py-3 inline-block w-full'>My Products</a> </li>

            </ul>
          </nav>
        </div>
        <div className='flex items-center  justify-between gap-3 '>
          <SearchBar />
          <div onClick={() => { setshowProfile(!showProfile) }} className=' relative cursor-pointer'>
            <Image src={userimg} alt='' width={35} height={35} className='w-[35px] h-[35px] rounded-full object-cover' />
            <div className={`absolute  bg-white rounded-lg shadow-lg ${showProfile ? '' : 'hidden'} `}>
              <Link href='/sign'>SignIn</Link>
            </div>

          </div>
          <Link href='/cart'>
            <div className=" p-2 bg-gray-100 rounded-full "><CiShoppingCart size={20} /></div>
          </Link>
          <span onClick={() => { setshowNav(!showNav) }} className='p-[9px] bg-gray-100 rounded-full md:hidden'>
            <BsChevronCompactUp className={` transition ease-in duration-150 ${showNav ? " rotate-180" : "0"}`} />
          </span>
        </div>
        
      </div>
      <div className={`md:hidden ${showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"}`}>
          <ul className=' flex flex-col text-[15px] opacity-75 px-2'>
            <li><a href='/shop' className='py-3 inline-block w-full'>Shop</a></li>
            <li><a href='/filtters' className='py-3 inline-block w-full'>Filtters</a></li>
            <li><a href='/myproduct' className='py-3 inline-block w-full'>My Product</a></li>

          </ul>
          <div className=' flex  items-center bg-gray-100 p-2 rounded-lg my-4 py-3 '>

            <input
              type='text'
              className=' outline-none bg-transparent ml-2 w-full caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px] '
              placeholder='Search'
              autoComplete='false'
            />
            <button><BiSearch size={20} className="opacity-50 " /></button>

          </div>
        </div>
    </div>
  )
}

export default Navbar