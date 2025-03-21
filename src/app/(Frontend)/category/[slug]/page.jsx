import React from 'react'
import FilterComponent from '@/components/frontend/Filter/FilterComponent'
import { getData } from '@/lib/getData'

async function page({ params: { slug }, searchParams }) {
    const { sort, min, max } = searchParams;
    const page = searchParams.page || 1;
    const category = await getData(`categories/filter/${slug}`)
    let products;
    
    if (page) {
        products = await getData(`products?catId=${category.id}&page=${page}`)
    } else if (max && min) {
        products = await getData(`products?catId=${category.id}&sort=asc&min=${min}&max=${max}`)
    } else if (min) {
        products = await getData(`products?catId=${category.id}&sort=asc&min=${min}`)
    } else if (max) {
        products = await getData(`products?catId=${category.id}&sort=asc&max=${max}`)
    } else if (sort) {
        products = await getData(`products?catId=${category.id}&sort=${sort}`)
    }else {
        products = await getData(`products?catId=${category.id}`)
    }
    console.log(products,"i am products")
    //console.log(products,"i am a product")
    //const totalPage  = tottalProductCount / pageSrize
    // console.log(searchParams.sort, "i am searchParms")
    // 
    // const products = await getData(`products?catId=${category.id}`)
    console.log(category,"i am category")
    return (
        <div>
            <h2>this is my slug {slug}</h2>
            <FilterComponent category={category} products={products} />
        </div>
    )
}

export default page