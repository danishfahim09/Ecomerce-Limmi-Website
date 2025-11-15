export const dynamic = 'force-dynamic'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import HeroCarousel from '@/components/frontend/HeroCarousel'
import { CircleDollarSign, CircleHelp, FolderSyncIcon } from 'lucide-react'
import SidebareCategory from '@/components/frontend/SidebareCategory'
import { getData } from '@/lib/getData'


export default async function Hero() {
  const banners = await getData('banner')

  return (
    <div className='grid grid-cols-12 gap-8 mb-6 '>

      {/* User Add All Catagory Section */}
      <SidebareCategory />

      {/*  Carasoule */}
      <div className="sm:col-span-7 col-span-12 bg-[rgb(37,45,61,1)]  rounded-md overflow-hidden relative">
        <HeroCarousel banners={banners} />
      </div>

      {/*  Helper */}
      <div className="col-span-2 rounded-lg sm:block hidden">
        <div className="p-3 flex flex-col gap-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-md">
          <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="w-12 h-12 rounded-full border-2 border-orange-300 dark:border-orange-500 flex items-center justify-center bg-orange-50 dark:bg-orange-900/20">
              <CircleHelp className='w-6 h-6 text-orange-500 dark:text-orange-400' />
            </div>
            <div className='flex flex-col'>
              <h2 className='text-sm font-semibold text-gray-900 dark:text-gray-100'>Help Center</h2>
              <p className='text-xs text-gray-600 dark:text-gray-400'>Guide To Customer Care</p>
            </div>
          </Link>
          <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="w-12 h-12 rounded-full border-2 border-amber-300 dark:border-amber-500 flex items-center justify-center bg-amber-50 dark:bg-amber-900/20">
              <FolderSyncIcon className='w-6 h-6 text-amber-500 dark:text-amber-400' />
            </div>
            <div className='flex flex-col'>
              <h2 className='text-sm font-semibold text-gray-900 dark:text-gray-100'>Easy Return</h2>
              <p className='text-xs text-gray-600 dark:text-gray-400'>Quick Return</p>
            </div>
          </Link>
          <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="w-12 h-12 rounded-full border-2 border-orange-300 dark:border-orange-500 flex items-center justify-center bg-orange-50 dark:bg-orange-900/20">
              <CircleDollarSign className='w-6 h-6 text-orange-500 dark:text-orange-400' />
            </div>
            <div className='flex flex-col'>
              <h2 className='text-sm font-semibold text-gray-900 dark:text-gray-100'>Sell On Limmi</h2>
              <p className='text-xs text-gray-600 dark:text-gray-400'>Millions Of Visitors</p>
            </div>
          </Link>
        </div>
        <div className="mt-3 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <Image
            src='/LS_SmallBanner_218X184.gif'
            width={218}
            height={184}
            alt='Promotional Banner'
            className='w-full h-auto rounded-lg'
            unoptimized
          />
        </div>

      </div>
    </div>
  )
}

