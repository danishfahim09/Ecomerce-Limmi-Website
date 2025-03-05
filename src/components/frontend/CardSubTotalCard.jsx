import Link from 'next/link'
import React from 'react'

function CardSubTotalCard({ subTotal }) {
    const shipping = 10.0;
    const tax = 0.0;
    const totalPrice = (Number(subTotal) + Number(shipping) + Number(tax)).toFixed(2)
    return (
        <div className="sm:col-span-4 col-span-full sm:block hidden overflow-auto  bg-white rounded-lg
          border-1 border-gray-100 dark:bg-gray-700 dark:border-gray-700 shadow-lg dark:shadow-sm
           shadow-gray-300 dark:shadow-gray-500 p-5 text-slate-800 dark:text-slate-100 font-bold
           flex-col  justify-between h-full">
            <h2 className='text-2xl pb-3'>Cart Tool</h2>
            <div className="flex items-center justify-between border-b border-slate-500 pb-6">
                <span>Subtotal</span>
                <span>UGX{subTotal}</span>
            </div>
            <div className="flex items-center justify-between  py-4">
                <span>Tax</span>
                <span>UGX{tax}</span>
            </div>
            <div className="flex items-center justify-between  pb-4">
                <span>Shipping</span>
                <span>UGX{shipping}</span>
            </div>
            <p className='border-b border-slate-500 pb-6 text-slate-400 font-normal'>we only charge for shipping when you have over 2kg items</p>
            <div className="flex items-center justify-between py-4 font-bold">
                <span>Totall</span>
                <span>UGX{totalPrice}</span>
            </div>
            <div className="mt-8">
            <Link href='/checkout' 
            className=' text-slate-50 rounded-lg py-2 px-6 font-normal mt-8 bg-slate-900 dark:bg-lime-600'>
                Continue to Payment
            </Link>
            </div>
        </div>
    )
}

export default CardSubTotalCard