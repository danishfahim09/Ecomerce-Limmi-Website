"use client"
import React from 'react'
import { AlignJustify, Bell, Sun, User, X } from 'lucide-react'
import Image from 'next/image'
import { LogOut } from 'lucide-react'
import { LayoutDashboard } from 'lucide-react'
import { Cog } from 'lucide-react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownMenuco } from "@nextui-org/dropdown";

// drop down items
//import {
// DropdownMenu,
// DropdownMenuContent,
// DropdownMenuItem,
// DropdownMenuLabel,
//  DropdownMenuSeparator,
//DropdownMenuTrigger,
//} from "@/components/ui/dropdown-menu"





function Navbare({showSideBar,setshowSideBar}) {


  return (
    <div className={showSideBar ?' h-20  py-6 fixed top-0 w-full dark:bg-slate-800 bg-gray-100 ':' h-20  py-6 fixed top-0 w-full  sm:left-64 dark:bg-slate-800 bg-gray-100 '}>
      <div className={showSideBar ? 'w-full h-9   flex items-center justify-between  text-green-600 ': 'lg:w-9/12 sm:w-8/12 w-11/12 h-9 2xl:w-10/12 flex items-center justify-between  text-green-600  '}>
        {/* Icon */}
        <button onClick={()=>{setshowSideBar(!showSideBar)}}>
          <AlignJustify className='text-green dark:text-white w-12 h-7 ml-4' />
        </button>

        {/* 3 Icons */}
        <div className='flex space-x-4 mr-4'>
          <button>
            <ThemeToggle />
          </button>

          <Dropdown>
            <DropdownTrigger className='text-gray-200'>
              <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-green dark:text-white  rounded-lg mt-2">
                <Bell />
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-700  rounded-full -top-1 start-1 dark:border-gray-900">20</div>
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" >
              <DropdownItem key="new">
                <div className="flex gap-3 dark:bg-gray-700 bg-slate-300  rounded-lg pb-2 hover:bg-slate-400  dark:hover:bg-slate-900 border border-none">
                  <div>
                    <Image className=" w-10 h-10 rounded-full mt-4 ml-2"
                      width={200}
                      height={200}
                      src="/profile.jpg"
                      alt='image'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <p className='m-1'>Yellow Sweet courn out of Stock</p>
                    <div className="flex flex-row gap-5">
                      <p className='bg-red-500 px-2 py-1 rounded-full text-sm text-white'>Stock Out</p>
                      <p className=' mt-1'>12-10-2004  <span>12:26 pm</span></p>
                    </div>
                  </div>
                  <button className='mt-3 mr-3'><X /></button>
                </div>
              </DropdownItem>
              <DropdownItem key="new">
                <div className="flex gap-3 dark:bg-gray-700 bg-slate-300  rounded-lg pb-2 hover:bg-slate-400  dark:hover:bg-slate-900 border border-none">
                  <div>
                    <Image className=" w-10 h-10 rounded-full mt-4 ml-2"
                      width={200}
                      height={200}
                      src="/profile.jpg"
                      alt='image'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <p className='m-1'>Yellow Sweet courn out of Stock</p>
                    <div className="flex flex-row gap-5">
                      <p className='bg-red-500 px-2 py-1 rounded-full text-sm text-white'>Stock Out</p>
                      <p className=' mt-1'>12-10-2004  <span>12:26 pm</span></p>
                    </div>
                  </div>
                  <button className='mt-3 mr-3'><X /></button>
                </div>
              </DropdownItem>
              <DropdownItem key="new">
                <div className="flex gap-3 dark:bg-gray-700 bg-slate-300  rounded-lg pb-2 hover:bg-slate-400  dark:hover:bg-slate-900 border border-none">
                  <div>
                    <Image className=" w-10 h-10 rounded-full mt-4 ml-2"
                      width={200}
                      height={200}
                      src="/profile.jpg"
                      alt='image'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <p className='m-1'>Yellow Sweet courn out of Stock</p>
                    <div className="flex flex-row gap-5">
                      <p className='bg-red-500 px-2 py-1 rounded-full text-sm text-white'>Stock Out</p>
                      <p className=' mt-1'>12-10-2004  <span>12:26 pm</span></p>
                    </div>
                  </div>
                  <button className='mt-3 mr-3'><X /></button>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger className='text-gray-200'>
              <button>
                <Image className=" w-10 h-10 rounded-full "
                  width={200}
                  height={200}
                  src="/profile.jpg"
                  alt='image'
                />
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new"><button className="flex gap-4  p-2">
                <LayoutDashboard className='w-5 h-6 ' />
                <span className='text-base '>Dashboard</span>
              </button>
              </DropdownItem>
              <DropdownItem key="new"><button className='flex  gap-4  p-2'>
                <Cog className='w-5 h-6 ' />
                <span className='text-base '>Edit Profil</span>
              </button>
              </DropdownItem>
              <DropdownItem key="new">
                <button className='flex  gap-4  p-2 '>
                  <LogOut className='w-5 h-6 ' />
                  <span className='text-base'>Log Out</span>
                </button>
              </DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Navbare