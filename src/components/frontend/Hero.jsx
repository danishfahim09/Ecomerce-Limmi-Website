'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import HeroCarousel from '@/components/frontend/HeroCarousel'

function Hero() {
  const catagories = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  return (
    <div className='flex gap-8 mx-12 mb-6'>
      <div className="w-1/3 overflow-auto h-[500px]  bg-white rounded-lg  border-1 border-gray-400  dark:bg-gray-700 dark:border-gray-700 shadow-lg dark:shadow-sm shadow-gray-300 dark:shadow-gray-500">
        <h2 className='bg-gray-100  py-3 px-6 text-slate-800 dark:text-slate-100 font-semibold border border-gray-200 dark:border-gray-600  dark:bg-gray-800'>Shop By Category </h2>
        <div className='py-3 px-6  overflow-auto flex flex-col gap-3'>

          {/* User Add All Catagory Section */}
          {catagories.map((id, index) => {
            return (
              <Link key={id} href="/" className=' flex gap-5 items-center hover:bg-slate-50 dark:hover:bg-slate-700  rounded-lg duration-500 transition-all
               '>
                <Image src="/th.jpeg" width={556} height={556} alt='food logo' className='w-12 object-cover h-12 rounded-full border border-lime-300' />
                <span className='text-sm'>Fruit</span>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="w-2/3  bg-purple-500 rounded-md overflow-hidden relative">
        <HeroCarousel />
      </div>
    </div>
  )
}

export default Hero