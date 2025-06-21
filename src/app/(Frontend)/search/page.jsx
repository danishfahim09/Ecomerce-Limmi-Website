export const dynamic = 'force-dynamic'
import React from 'react'
import FilterComponent from '@/components/frontend/Filter/FilterComponent'
import { getData } from '@/lib/getData';

async function page({ searchParams }) {

    const { search } = searchParams;
    // const page = searchTerm.page || 1;

    let products;
    if (search) {
        products = await getData(`products?search=${search}`)
    } else {
        products = await getData(`products?search=`)
    }
    console.log(products, "i am products")

    const category = {
        title: search,
        slug: "",
        products,
        isSearch: true
    }

    //console.log(products,"i am a product")
    //const totalPage  = tottalProductCount / pageSrize
    // console.log(searchParams.sort, "i am searchParms")
    // 
    // const products = await getData(`products?catId=${category.id}`)
    console.log(category, "i am category")
    return (
        <div>
            <FilterComponent
                category={category}
                products={products} />
        </div>
    )
}

export default page