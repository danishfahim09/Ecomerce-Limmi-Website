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

    const dispatch = useDispatch();

    function handdleAddToiCard() {
        //dispatch the reducer
        dispatch(addToCart(product))
        toast.success("Item Added Successfully")
    }
    return (
        <div href="#" className='border-1 border-gray-200 dark:border-gray-700 rounded-lg mr-3 bg-white dark:bg-slate-800 overflow-hidden'>
            <Link href={`/product/${product.slug}`}>
                <Image
                    src={product.imageUrl}
                    alt=""
                    width={556}
                    height={556}
                    className='w-full rounded-t-lg h-48'
                />
            </Link>
            <div className="px-2 ">
                <Link href={`/product/${product.slug}`}>
                    <h2 className='  my-2 text-gray-700 text-center dark:text-gray-300 mb-2 font-semibold'>
                        {product.title}
                    </h2>
                </Link>
                <div className="flex items-center justify-between my-2">
                    <p className='text-gray-700 dark:text-gray-300'>UGX {product.salePrice}</p>
                    <button
                        className='flex items-center space-x-2 text-white bg-lime-700 px-3 py-2 rounded-md'
                        onClick={() => { handdleAddToiCard()}}
                    >
                        <BaggageClaim />
                        <p>Add</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product