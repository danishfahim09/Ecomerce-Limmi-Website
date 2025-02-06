import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import HeroCarousel from '@/components/frontend/HeroCarousel'
import { CircleDollarSign, CircleHelp, FolderSyncIcon } from 'lucide-react'
import SidebareCarorusel from '@/components/frontend/SidebareCarorusel'
import { getData } from '@/lib/getData'


export default async function Hero() {
  const banners = await getData('banner')

  return (
    <div className='grid grid-cols-12 gap-8 mb-6 '>

      {/* User Add All Catagory Section */}
      <SidebareCarorusel />

      {/*  Carasoule */}
      <div className="sm:col-span-7 col-span-12 bg-[rgb(37,45,61,1)]  rounded-md overflow-hidden relative">
        <HeroCarousel banners={banners}/>
      </div>

      {/*  Helper */}
      <div className="col-span-2   rounded-lg      sm:block hidden">
        <div className="sm:col-span-7  p-2 flex flex-col gap-6 bg-white rounded-lg  border-1 border-gray-100   dark:bg-gray-700 dark:border-gray-700 shadow-lg dark:shadow-sm shadow-gray-300 dark:shadow-gray-500">
          <Link href="#" className="flex items-center space-x-1 gap-2">
            <div className="w-12 h-11 rounded-full border-spacing-1 border-1 border-[rgb(243,168,55)] flex items-center justify-center">
              <CircleHelp className='shrink-0 w-6 h-6 text-orange-400 dark:text-yellow-200' />
            </div>
            <div className='flex flex-col'>
              <h2 className='uppercase text-sm border-l-divider dark:text-gray-200 text-black'>Help Center</h2>
              <p className='text-[0.6rem] dark:text-gray-200 text-black bold shrink-0'>Guid To Coustemer Care</p></div>
          </Link>
          <Link href="#" className="flex items-center space-x-1 gap-2">
            <div className="w-12 h-11 rounded-full border-spacing-1 border-1 border-[rgb(187,150,83)] flex items-center justify-center">
              <FolderSyncIcon className='shrink-0 w-6 h-6 text-orange-400 dark:text-yellow-200' />
            </div>
            <div className='flex flex-col'>
              <h2 className='uppercase text-sm bold dark:text-gray-200 text-black'>Easy Return</h2>
              <p className='text-[0.6rem] dark:text-gray-200 text-black bold shrink-0'>Quick Return </p></div>
          </Link>
          <Link href="#" className="flex items-center space-x-1 gap-2">
            <div className="w-12 h-11 rounded-full border-spacing-1 border-1 border-[rgb(243,168,55)] flex items-center justify-center">
              <CircleDollarSign className='shrink-0 w-6 h-6 text-orange-400 dark:text-yellow-200' />
            </div>
            <div className='flex flex-col '>
              <h2 className='uppercase text-sm bold dark:text-gray-200 text-black'>Sell On Limmi </h2>
              <p className='text-[0.6rem] dark:text-gray-200 text-black bold shrink-0'>Million Of Visitores</p></div>
          </Link>
        </div>
        <div className="mt-[30px] rounded-lg">
          <Image
            src='/LS_SmallBanner_218X184.gif'
            width={218}
            height={184}
            alt=''
            className='w-[200px] h-[210px]' />

        </div>

      </div>
    </div>
  )
}

