"use client"
import React from 'react'
import { AlignJustify, Bell, Sun, User,X } from 'lucide-react'
import Image from 'next/image'
import { LogOut } from 'lucide-react'
import { LayoutDashboard } from 'lucide-react'
import { Cog } from 'lucide-react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

// drop down items
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"





function Navbare() {
 

  return (
    <div className=' h-20  py-6 fixed top-0 w-11/12 left-64 dark:bg-slate-800 bg-gray-100 '>
      <div className='w-11/12 h-9 flex items-center justify-between  text-green-600 '>
        {/* Icon */}
        <button>
          <AlignJustify className='text-green dark:text-white w-12 h-7 ml-4'/>
        </button>

        {/* 3 Icons */}
        <div className='flex space-x-4 '>
          <button>
            <ThemeToggle />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-green dark:text-white  rounded-lg mt-2">
                <Bell />
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-700  rounded-full -top-1 start-1 dark:border-gray-900">20</div>
              </button>
            </DropdownMenuTrigger>

            {/*Drop Down items*/}
            <DropdownMenuContent className="w-96  rounded-lg bg-slate-200  dark:bg-black text-gray-700  dark:text-gray-200 text-center justify-center mr-10 pb-3">
              <DropdownMenuLabel className="p-2 font-semibold ">Notification</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="mt-2 mx-2">
              <div className="flex gap-3 dark:bg-slate-800 bg-slate-300  rounded-lg pb-2 hover:bg-slate-400  dark:hover:bg-slate-900 border border-none">
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
                  <button className='mt-4'><X /></button>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="mt-2 mx-2">
              <div className="flex gap-3 dark:bg-slate-800 bg-slate-300  rounded-lg pb-2 hover:bg-slate-400  dark:hover:bg-slate-900 border border-none">
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
                  <button className='mt-4'><X /></button>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="mt-2 mx-2 ml-2">
              <div className="flex gap-3 dark:bg-slate-800 bg-slate-300  rounded-lg pb-2 hover:bg-slate-400  dark:hover:bg-slate-900 border border-none">
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
                  <button className='mt-4'><X /></button>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="mt-2 mx-2 ">
              <div className="flex gap-3 dark:bg-slate-800 bg-slate-300  rounded-lg pb-2 hover:bg-slate-400  dark:hover:bg-slate-900 border border-none">
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
                  <button className='mt-4'><X /></button>
                </div>
              </DropdownMenuItem> 
            </DropdownMenuContent>
          </DropdownMenu>


          {/*
            <button> 
              <User />
            </button>
          */}
          {/*Drop Down */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Image className=" w-10 h-10 rounded-full "
                  width={200}
                  height={200}
                  src="/profile.jpg"
                  alt='image'
                />
              </button>
            </DropdownMenuTrigger>

            {/*Drop Down items*/}
            <DropdownMenuContent className="w-36 p-3 rounded-lg bg-slate-200 dark:bg-black dark:text-gray-300 text-gray-900 text-center justify-center">
              <DropdownMenuLabel className="pb-2 font-semibold ">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="">
                <button className="flex  gap-2  p-2">
                  <LayoutDashboard className='w-4 h-6 ' />
                  <span>Dashboard</span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem >
                <button className='flex  gap-2  p-2'>
                  <Cog className='w-4 h-6 ' />
                  <span>Edit Profil</span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem >
                <button className='flex  gap-2  p-2 '>
                  <LogOut className='w-4 h-6 ' />
                  <span>Log Out</span>
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default Navbare