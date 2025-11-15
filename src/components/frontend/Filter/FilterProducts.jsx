import React from 'react'
import Product from '@/components/frontend/Product'
import Paginate from '@/components/frontend/Filter/Paginate'

async function FilterProducts({ products = [], totalCount = null }) {
    const pageSize = 3
    // Use totalCount if provided, otherwise calculate from products array
    const totalProductCount = totalCount || products.length
    const totalPages = Math.ceil(totalProductCount / pageSize)
    
    return (
        <div className="space-y-8">
            {products?.length > 0 ? (
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
                        {
                            products?.map((product, i) => {
                                return (
                                    <div 
                                        key={i} 
                                        className="opacity-0 animate-fade-in-up"
                                        style={{ 
                                            animationDelay: `${i * 100}ms`,
                                            animationFillMode: 'forwards'
                                        }}
                                    >
                                        <Product product={product} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* Always show pagination if there are multiple pages */}
                    {totalPages > 1 && (
                        <div className="pt-8 border-t border-border">
                            <Paginate totalPages={totalPages} />
                        </div>
                    )}
                </>
            ) : (
                <div className="flex flex-col items-center justify-center py-16">
                    <p className="text-lg text-muted-foreground font-medium">No products found</p>
                    <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters</p>
                </div>
            )}
        </div>
    )
}

export default FilterProducts