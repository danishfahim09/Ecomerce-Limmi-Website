'use client'
import React from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { decrementtQty, incrementQty, removeFromCart } from '../../../redux/slices/cartSlice'
import toast from 'react-hot-toast'


function CartProduct({ cartItems }) {
    
    const dispatch = useDispatch()
    function handledCartItemDelete(cartId) {
        dispatch(removeFromCart(cartId));
        toast.success("Item Remove Succefully")
    }
    function handledQtyIncrement(cartId) {
        dispatch(incrementQty(cartId));
    }
    function handledQtyDecrement(cartId) {
        dispatch(decrementtQty(cartId));
    }
    return (
        <div className="pb-4 mb-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 text-sm">
            <div className="flex items-center gap-4 flex-1">
                <Image src={cartItems.imageUrl}
                    width={293}
                    height={220}
                    alt={cartItems.title}
                    className='w-20 h-20 rounded-lg object-cover border border-gray-200 dark:border-gray-700' />
                <div className="flex flex-col">
                    <h2 className='text-gray-900 dark:text-gray-100 font-semibold line-clamp-2'>{cartItems.title}</h2>
                </div>
            </div>
            <div className='px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 flex gap-2 items-center bg-gray-50 dark:bg-gray-800'>
                <button onClick={(() => { handledQtyDecrement(cartItems.id) })} className='py-1 px-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors'>
                    <Minus className='w-4 h-4 text-gray-900 dark:text-gray-100'/>
                </button>
                <p className='py-1 px-3 min-w-[2rem] text-center text-gray-900 dark:text-gray-100 font-medium'>{cartItems.qty}</p>
                <button onClick={(() => { handledQtyIncrement(cartItems.id) })} className='py-1 px-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors'>
                    <Plus className='w-4 h-4 text-gray-900 dark:text-gray-100'/>
                </button>
            </div>
            <div className="flex items-center gap-4 min-w-[120px] justify-end">
                <h4 className='text-gray-900 dark:text-gray-100 font-bold'>UGX {cartItems.salePrice}</h4>
                <button onClick={() => { handledCartItemDelete(cartItems.id) }} className='p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors'>
                    <Trash2 className='w-5 h-5 text-red-600 dark:text-red-400' />
                </button>
            </div>
        </div>
    )
}

export default CartProduct