import React from 'react'
import Link from 'next/link'
import {Download, PlusIcon, Search, Trash2 } from 'lucide-react'


function PageHeader({ heading, href, linkTittle }) {
    return (
        <div>
            <div className='flex justify-between px-8'>

                {/*Heading*/}
                <h2 className='text-2xl mt-2'>
                    {heading}
                </h2>
                <Link href={href}>
                    <button
                        type="button"
                        className=" flex gap-2 border-2  hover:bg-green-800  focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mb-2 border-orange-600 dark:border-green-400 dark:text-white text-orange-700  dark:bg-green-700 dark:hover:bg-green-800 ">
                        <PlusIcon />
                        {linkTittle}
                    </button>
                </Link>
            </div>

            {/*Table*/}
            {/* Import //Search  //Delete */}
            <div className='flex justify-between bg-slate-700 px-20 py-6 mt-5 rounded-xl w-full h-auto'>
                <button className="flex gap-2 w-40 h-14 relative px-8 border-2 border-blue-600 dark:text-white  py-3 text-lg dark:bg-slate-900 transition-all ease-in duration-75 bg-white dark:hover:bg-blue-600 rounded-md group-hover:bg-opacity-0">
                    <Download/>
                    <span className=''>
                        Import
                    </span>
                </button>
                <form className="max-w-4xl ">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <Search className='mr-3 text-gray-300' />
                        </div>
                        <input type="text" id="search" class="bg-gray-50 border pl-14 border-blue-800 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-neutral-600 dark:border-gray-600 block w-full ps-10 pr-96 py-3  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-800 focus:dark:border-lime-600" placeholder="Search" />
                    </div>
                </form>
                <button type="button" className="w-44 h-14 text-lg rounded-lg border-2 flex gap-3 px-3 py-3  dark:bg-red-700 bg-gray-600 dark:border-orange-300 hover:dark:bg-red-900">
                    <Trash2 className='w-6 h-7 ' />
                   Bulck Delete
                </button>
            </div>
        </div>

    )
}

export default PageHeader