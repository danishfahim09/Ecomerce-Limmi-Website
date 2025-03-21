import React from 'react'

import Product from '@/components/frontend/Product'
import Paginate from '@/components/frontend/Filter/Paginate'

async function FilterProducts({ products = [] }) {
    const pageSize = 3
    const totalProductCount = products.length;
    console.log(totalProductCount,"this  i my total product count")
    const totalPages = Math.ceil(totalProductCount / pageSize)
    console.log(totalPages,"i am a total pages ")
    return (
        <div >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map((product, i) => {
                        return (
                            <Product key={i} product={product} />
                        )
                    })
                }
            </div>
            <div className="py-8 mx-auto flex items-center justify-center bg-red-700">
                <Paginate totalPages={totalPages} />
            </div>
        </div>

    )
}

export default FilterProducts