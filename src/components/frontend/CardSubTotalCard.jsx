import Link from 'next/link'
import React from 'react'

function CardSubTotalCard({ subTotal }) {
    const shipping = 10.0;
    const tax = 0.0;
    const totalPrice = (Number(subTotal) + Number(shipping) + Number(tax)).toFixed(2)
    return (
        <div className="sm:col-span-4 col-span-full sm:block hidden overflow-auto bg-white dark:bg-gray-800 rounded-lg
          border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-md p-6 text-gray-900 dark:text-gray-100
           flex flex-col justify-between h-full">
            <div>
                <h2 className='text-2xl font-bold pb-4 mb-4 border-b border-gray-200 dark:border-gray-700'>Cart Summary</h2>
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                    <span className='text-gray-600 dark:text-gray-400'>Subtotal</span>
                    <span className='font-semibold'>UGX {subTotal}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                    <span className='text-gray-600 dark:text-gray-400'>Tax</span>
                    <span className='font-semibold'>UGX {tax}</span>
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                    <span className='text-gray-600 dark:text-gray-400'>Shipping</span>
                    <span className='font-semibold'>UGX {shipping}</span>
                </div>
                <p className='text-sm text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700'>
                    We only charge for shipping when you have over 2kg items
                </p>
                <div className="flex items-center justify-between py-4 font-bold text-lg">
                    <span>Total</span>
                    <span>UGX {totalPrice}</span>
                </div>
            </div>
            <div className="mt-6">
                <Link href='/checkout' 
                className='block text-center text-white rounded-lg py-3 px-6 font-medium bg-gray-900 hover:bg-gray-800 dark:bg-lime-600 dark:hover:bg-lime-700 transition-colors duration-200'>
                    Continue to Payment
                </Link>
            </div>
        </div>
    )
}

export default CardSubTotalCard