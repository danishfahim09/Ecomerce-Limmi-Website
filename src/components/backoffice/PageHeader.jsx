import React from 'react'
import Link from 'next/link'
import { Download, PlusIcon, Search, Trash2 } from 'lucide-react'


function PageHeader({ heading, href, linkTittle }) {
    return (
        <div>
            <div className='flex justify-between px-8'>

                {/*Heading*/}
                <h2 className='text-2xl mt-2 dark:text-white text-gray-600'>
                    {heading}
                </h2>
                <Link href={href}>
                    <button
                        type="button"
                        className=" flex gap-2 border-2  hover:bg-gray-300  focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mb-2 border-gray-400 dark:border-gray-600 dark:text-white text-gray-600  dark:bg-slate-800 dark:hover:bg-slate-700 ">
                        <PlusIcon />
                        {linkTittle}
                    </button>
                </Link>
            </div>

            {/*Table*/}
            {/* Import //Search  //Delete */}
            <div className='flex gap-2 sm:gap-2 lg:gap-2 xl:gap-16 justify-between bg-slate-700
             sm:px-5  lg:px-20 py-6 mt-5 rounded-xl w-full h-auto'>
                <button className="  w-24 justify-center gap-1 text-sm items-center   flex md:gap-1 lg:gap-2 md:px-3 md:py-2
                 lg:px-5 lg:py-3 md:text-xs lg:text-sm  xl:text-base
                border-2 border-blue-600 dark:text-white 
                   dark:bg-slate-900 transition-all ease-in duration-75
                  bg-white dark:hover:bg-blue-600 rounded-md group-hover:bg-opacity-0
                  ">
                    <Download className="
                     border-1  hover:bg-gray-300  focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium  border-gray-400 dark:border-gray-600 dark:text-white text-gray-600  dark:bg-slate-800 dark:hover:bg-slate-700 
                    w-4 h-4  md:w-4 md:h-3 md:mt-0.5  lg:w-6 lg:h-4 lg:mt-0.5  xl:w-6 xl:h-5 xl:mt-0.5 " />
                    <span className=''>
                        Import
                    </span>
                </button>
                <form className="sm:w-full">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <Search className='w-5 h-5 sm:w-4 sm:h-4 lg:w-6 lg:h-8  mr-3 text-gray-300' />
                        </div>
                        <input type="text" id="search" className="z-5 w-52 pl-10 sm:w- md:w-80 md:text-sm lg:w-full sm:ps-8 sm:py-2 lg:ps-14  lg:py-3 
                        lg:text-lg bg-gray-50 border focus:dark:border-lime-600 dark:focus:ring-lime-800
                        border-blue-800 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-neutral-600
                        dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Search" />
                    </div>
                </form>
                <button type="button" className="w-36 gap-1 md:w-48 lg:w-52 flex sm:gap-1 lg:gap-2 md:text-xs
                 justify-center px-1 lg:text-sm  xl:text-base 
                rounded-lg border-2 dark:bg-red-700 items-center
                  bg-gray-600 dark:border-orange-300 hover:dark:bg-red-900
                 ">
                    <Trash2 className='w-4 h-4 md:w-4 md:h-3 md:mt-0.5 lg:w-6 lg:h-4 lg:mt-0.5  xl:w-6 xl:h-5 xl:mt-0.5' />
                    Bulck Delete
                </button>
            </div>
        </div>

    )
}

export default PageHeader