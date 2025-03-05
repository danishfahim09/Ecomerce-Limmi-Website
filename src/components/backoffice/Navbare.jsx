"use client"
import React from 'react'
import { AlignJustify, Bell, Sun, User, X } from 'lucide-react'
import Image from 'next/image'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import UserAvater from '@/components/backoffice/UserAvater';
import { useSession } from 'next-auth/react'

function Navbare({ showSideBar, setshowSideBar }) {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>
  }
  return (
    <div className={showSideBar ? ' h-20  py-6 fixed top-0 w-full dark:bg-slate-800 bg-gray-100 ' : ' h-20  py-6 fixed top-0 w-full  sm:left-64 dark:bg-slate-800 bg-gray-100 '}>
      <div className={showSideBar ? 'w-full h-9   flex items-center justify-between  text-green-600 ' : 'lg:w-9/12 sm:w-8/12 w-11/12 h-9 2xl:w-10/12 flex items-center justify-between  text-green-600  '}>
        {/* Icon */}
        <button onClick={() => { setshowSideBar(!showSideBar) }}>
          <AlignJustify className={showSideBar ? ('text-green dark:text-white w-12 h-7  sm:ml-4 ml-64 ') : ('text-green dark:text-white w-12 h-7 ml-4')} />
        </button>

        {/* 3 Icons */}

        {/*Change Background Colour dark an white mode Page*/}
        <div className='flex items-center space-x-4 sm:mr-4'>
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
          {status === "authenticated" && (<UserAvater user={session?.user} />)}
        </div>
      </div>
    </div>
  )
}

export default Navbare