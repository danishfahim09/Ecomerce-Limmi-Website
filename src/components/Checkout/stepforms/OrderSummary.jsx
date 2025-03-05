'use client'
import { ChevronRight, Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

function OrderSummary() {
    const checkoutFormData = useSelector((store) => store.checkout.checkoutFormData)
    const cartItems = useSelector((store) => store.cart)
    console.log("this is my data ", cartItems, "this is my data ")

    const subTotal = cartItems.reduce((acc, currentItem) => {
        return acc + currentItem.salePrice * currentItem.qty
    }, 0)
        .toFixed(2) ?? 0
    async function submitData() {
        console.log(checkoutFormData)
    }
    return (
        <div className="my-6">
            <h2 className='text-xl font-semibold mb-4 dark:text-lime-400'>
                Order Summary
            </h2>
            {cartItems.map((cartItem, i) => {
                return (
                    <div key={i} className="pb-3 mb-4 flex items-center justify-between border-b border-slate-400  text-sm font-semibold">
                        <div className="flex items-center gap-3">
                            <Image src={cartItem.imageUrl}
                                width={293}
                                height={220}
                                alt={cartItem.title}
                                className='w-14 rounded-xl h-14' />
                            <div className="flex flex-col">
                                <h2> {cartItem.title}</h2>
                                <small>Golden</small>
                            </div>
                        </div>
                        <div className=' px-4 rounded-xl border  border-gray-400 flex gap-3 items-center'>

                            <p className='py-2 px-3 flex-grow'>{cartItem.qty}</p>

                        </div>
                        <div className="flex items-center gap-2">
                            <h4>UGX  {cartItem.salePrice} </h4>
                        </div>
                    </div>
                )

            })}
            <div className="mt-4">
                <button
                    onClick={submitData}
                    className='inline-flex  items-center px-6 py-3 mt-4
                            sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4
                            focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-900'>
                    <ChevronRight className='w-5 h-5 mr-2' />
                    <span>Proceed to Payment</span>
                </button>
            </div>
        </div>
    )
}

export default OrderSummary