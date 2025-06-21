export const dynamic = 'force-dynamic'
import Image from 'next/image' 
import React from 'react'
import { getData } from '@/lib/getData'
import CategoryList from '@/components/frontend/CategoryList'
import BreadCrum from '@/components/frontend/BreadCrum'

async function page({ params: { slug } }) {
  const market = await getData(`markets/details/${slug}`)
  const marketCategoryIds = market.categoryIds;
  //console.log(marketCategoryIds)
  const categoriesData = await getData('categories')
  const categories =Array.isArray(categoriesData) ? categoriesData.filter((category) => {
    return category.products.length >= 3
  }) : []
  const marketeCategories =Array.isArray(categories) ? categories.filter((category) => marketCategoryIds.includes(category.id)):[]
  console.log(marketeCategories)
  return (
    <>
      <BreadCrum />
      <div className="flex items-center  text-slate-800 dark:text-slate-200  overflow-auto p-4  bg-white rounded-lg  border-1 border-gray-100 dark:bg-gray-700 dark:border-gray-700 shadow-lg dark:shadow-sm shadow-gray-300 dark:shadow-gray-500 gap-6">
        <div className="">
          <Image
            src={market.logoUrl}
            width={50}
            height={50}
            alt={market.title}
            className='w-16 h-16 rounded-full object-cover'
          />
        </div>
        <div className="">
          <h2 className='p-4  text-base lg:text-4xl'>{market.title}</h2>
          <p className='text-sm line-clamp-2 mb-4'>{market.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 py-8 w-full">

        <div className="sm:col-span-10 col-span-10   rounded-md overflow-hidden relative">
          {categories?.map((category, i) => {
            return (
              <div key={i} className="space-y-8">
                <CategoryList category={category} isMarketPage={false} />
              </div>
            );
          })}
        </div>
      </div>
    </>

  )
}

export default page