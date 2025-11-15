import React from 'react'
import BredCrumb from './BredCrumb'
import Sorting from '@/components/frontend/Filter/Sorting'
import Filters from '@/components/frontend/Filter/Filters'
import FilterProducts from '@/components/frontend/Filter/FilterProducts'


function FilterComponent({ category, products }) {

    const { title, slug } = category
    // Get total count from category products array (all products in category)
    const productCount = category.products?.length || products?.length || 0
    
    return (
        <div className="min-h-screen bg-background">
            <div className="bg-card border-b border-border shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
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
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    <div className="lg:col-span-3">
                        <Filters slug={slug} />
                    </div>
                    <div className="lg:col-span-9">
                        <FilterProducts products={products} totalCount={productCount} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterComponent