"use client"
import Link from 'next/link'
import React from 'react'
import CategoryCarousel from '@/components/frontend/CategoryCarousel'

function CategoryList({ category, isMarketPage }) {

    return (
        <div className=' bg-white rounded-lg  border-1 border-gray-200 dark:bg-gray-700  shadow-lg dark:shadow-sm shadow-gray-300 dark:shadow-gray-500border-gray-200 dark:border-slate-600'>
            <div className='px-3 rounded-t-lg  text-slate-900 py-2   dark:text-slate-50 bg-slate-100 dark:bg-gray-800 bold flex justify-between items-center border border-gray-200 dark:border-slate-600'>
                <h2>{category.title}</h2>
                <Link href={`/category/${category.slug}`} className=' text-slate-50 rounded-md px-4 py-2 bg-lime-700 hover:bg-lime-800 duration-300 transition-all' >
                    See All
                </Link>
            </div>
            <div className="bg-white p-4 dark:bg-slate-700">

                <CategoryCarousel products={category.products} isMarketPage={isMarketPage} />
            </div>

        </div>
    )
}

export default CategoryList