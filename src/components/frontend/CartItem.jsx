"use client"
import React from 'react'
import CartProduct from './CartProduct'
import EmptyCard from './EmptyCart'

function CartItem({ cartItems }) {
    return (
        <div className="col-span-8 sm:col-span-full">
            {cartItems.length > 0 && (
                <>
                    <h2 className='py-2 mb-6 sm:col-span-full text-2xl font-bold text-gray-900 dark:text-gray-100'>Your Cart</h2>
                    <div className="pb-3 flex items-center justify-between border-b border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 text-sm font-semibold mb-4">
                        <h2 className='uppercase'>Product</h2>
                        <h2 className='uppercase'>Quantity</h2>
                        <h2 className='uppercase'>Price</h2>
                    </div>
                </>
            )}
            <div className="">
                {cartItems.length > 0 ? cartItems.map((item, i) => {
                    //console.log(item.imageUrl, "this is my data imagge Url ")
                    return <CartProduct key={i} cartItems={item} />
                }) : (
                    <EmptyCard />
                )}
            </div>


            <div className="flex items-center gap-2 py-8">
                <input type="text" id="simple-search" className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block ps-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Coupon Code..." required />
                <button type="submit" className='shrink-0 py-2.5 px-6 rounded-lg text-white bg-gray-900 dark:bg-lime-600 hover:bg-gray-800 dark:hover:bg-lime-700 transition-colors duration-200 font-medium'>
                    Apply Coupon
                </button>
            </div>
        </div>
    )
}

export default CartItem