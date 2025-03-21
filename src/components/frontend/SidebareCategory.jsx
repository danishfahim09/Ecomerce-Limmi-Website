import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getData } from '@/lib/getData'

export default async function SidebareCategory() {
    const catagoriesData = await getData('categories')
    //only categories with products
    const categories = catagoriesData.filter((category)=>category.products.length>0)
    console.log(categories,"this is my categpries")
    return (
        <div className="sm:col-span-3 sm:block hidden overflow-auto   bg-white rounded-lg  border-1 border-gray-100 dark:bg-gray-700 dark:border-gray-700 shadow-lg dark:shadow-sm shadow-gray-300 dark:shadow-gray-500">
            <h2 className='bg-gray-100  py-3 px-6 text-slate-800 dark:text-slate-100 rounded-lg font-semibold border border-gray-200 dark:border-gray-600  dark:bg-gray-800'>
                Shop By Category ({catagoriesData.length})
            </h2>

            {catagoriesData.map((category, id) => {
                return (
                    <Link key={id} href={`/category/${category.slug}`} className='py-2  px-6 flex gap-5 items-center hover:bg-slate-50 dark:hover:bg-slate-600  rounded-lg duration-500 transition-all
                       '>
                        <Image src={category.imageUrl} width={556} height={556} alt='food logo' className='w-12 object-cover h-12 rounded-full border border-lime-300' />
                        <span className='text-sm'>{category.title} </span>
                    </Link>
                )
            })}
        </div>
    )
}
