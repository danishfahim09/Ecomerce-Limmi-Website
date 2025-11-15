'use client'
import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Link from 'next/link';
import { BaggageClaim } from 'lucide-react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/slices/cartSlice';

function Product({ product }) {

    const dispatch = useDispatch();// Redux میں addToCart action چلا رہے ہو

    function handdleAddToiCard() {
        //dispatch the reducer
        dispatch(addToCart(product))
        toast.success("Item Added Successfully")
    }
    return (
        <div className='border border-gray-200 dark:border-gray-700 rounded-lg mr-3 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200'>
            <Link href={`/product/${product.slug}`}>
                <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={556}
                    height={556}
                    className='w-full rounded-t-lg h-48 object-cover'
                />
            </Link>
            <div className="px-3 py-3">
                <Link href={`/product/${product.slug}`}>
                    <h2 className='my-2 text-gray-900 dark:text-gray-100 text-center mb-2 font-semibold line-clamp-2 min-h-[3rem]'>
                        {product.title}
                    </h2>
                </Link>
                <div className="flex items-center justify-between mt-3">
                    <p className='text-gray-900 dark:text-gray-100 font-bold'>UGX {product.salePrice}</p>
                    <button
                        className='flex items-center space-x-2 text-white bg-lime-700 hover:bg-lime-800 dark:bg-lime-600 dark:hover:bg-lime-700 px-3 py-2 rounded-md transition-colors duration-200'
                        onClick={() => { handdleAddToiCard() }}
                    >
                        <BaggageClaim className='w-4 h-4' />
                        <span className='text-sm'>Add</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product