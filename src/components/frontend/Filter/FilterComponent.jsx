
import React from 'react'
import BredCrumb from '@/components/frontend/Filter/BredCrumb'
import Sorting from '@/components/frontend/Filter/Sorting'
import Filters from '@/components/frontend/Filter/Filters'
import FilterProducts from '@/components/frontend/Filter/FilterProducts'


function FilterComponent({ category, products }) {

    const { title, slug } = category
    const productCount = category.products.length
    console.log(productCount, "this is my product count ")
    return (
        <div className="">
            <div className="bg-white space-y-6 text-slate-900 py-8 px-4 ">
                <BredCrumb
                    title={title}
                    resultCount={productCount}
                />
                <Sorting
                    isSearch={category?.isSearch}
                    title={title}
                    slug={slug}
                />
            </div>
            <div className="grid grid-cols-12 py-8 gap-4">
                <div className="col-span-3">
                    <Filters slug={slug} />
                </div>
                <div className="col-span-9">
                    <FilterProducts products={products} />
                </div>
            </div>
        </div>
    )
}

export default FilterComponent