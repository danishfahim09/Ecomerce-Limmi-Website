"use client"
import Link from 'next/link'
import React from 'react'
import CategoryCarousel from '@/components/frontend/CategoryCarousel'

function CategoryList({ category, isMarketPage }) {

    return (
        <div className='bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-lg dark:shadow-md'>
            <div className='px-4 py-3 rounded-t-lg text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 flex justify-between items-center border-b border-gray-200 dark:border-gray-700'>
                <h2 className='font-bold text-lg'>{category.title}</h2>
                <Link href={`/category/${category.slug}`} className='text-white rounded-md px-4 py-2 bg-lime-700 hover:bg-lime-800 dark:bg-lime-600 dark:hover:bg-lime-700 transition-colors duration-200' >
                    See All
                </Link>
            </div>
            <div className="bg-white p-4 dark:bg-gray-800 rounded-b-lg">

                <CategoryCarousel products={category.products} isMarketPage={isMarketPage} />
            </div>

        </div>
    )
}

export default CategoryList