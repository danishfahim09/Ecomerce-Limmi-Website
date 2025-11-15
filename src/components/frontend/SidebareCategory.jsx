export const dynamic = 'force-dynamic'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getData } from '@/lib/getData'

export default async function SidebareCategory() {
    const catagoriesData = await getData('categories')
    // only categories with products
    const categories =Array.isArray(catagoriesData) ? catagoriesData.filter((category) => category.products.length > 0):[]

    return (
        <div className="sm:col-span-3 sm:block hidden overflow-auto bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-md">
            <h2 className='bg-gray-50 dark:bg-gray-900 py-3 px-6 text-gray-900 dark:text-gray-100 rounded-t-lg font-bold text-lg border-b border-gray-200 dark:border-gray-700'>
                Shop By Category
            </h2>

            <div className='py-2'>
                {categories?.map((category, id) => {
                    return (
                        <Link key={id} href={`/category/${category.slug}`} className='py-2 px-6 flex gap-4 items-center hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200'>
                            <Image src={category.imageUrl} width={556} height={556} alt={category.title} className='w-12 h-12 object-cover rounded-full border-2 border-lime-300 dark:border-lime-600' />
                            <span className='text-sm font-medium text-gray-900 dark:text-gray-100'>{category.title}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
