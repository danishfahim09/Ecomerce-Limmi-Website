"use client"
import React from 'react'
import { BaggageClaim } from 'lucide-react'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart } from '../../../redux/slices/cartSlice';

function AddToCartButton({product}) {
    const dispatch = useDispatch();// Redux میں addToCart action چلا رہے ہو

    function handdleAddToiCard() {
        //dispatch the reducer
        dispatch(addToCart(product))
        toast.success("Item Added Successfully")
    }
    return (
        <div>
            <button
                className='flex items-center space-x-2 text-white bg-lime-700 px-3 py-2 rounded-md'
                onClick={() => { handdleAddToiCard() }}
            >
                <BaggageClaim />
                <p>Add To Card</p>
            </button>
        </div>
    )
}

export default AddToCartButton