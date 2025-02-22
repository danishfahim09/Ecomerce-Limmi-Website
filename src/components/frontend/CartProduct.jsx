'use client'
import React from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { decrementtQty, incrementQty, removeFromCart } from '../../../redux/slices/cartSlice'


function CartProduct({ cartItems }) {
    const dispatch = useDispatch()
    function handledCartItemDelete(cartId) {
        dispatch(removeFromCart(cartId));
    }
    function handledQtyIncrement(cartId) {
        dispatch(incrementQty(cartId));
    }
    function handledQtyDecrement(cartId) {
        dispatch(decrementtQty(cartId));
    }
    return (
        <div className="pb-3 mb-4 flex items-center justify-between border-b border-slate-400  text-sm font-semibold">
            <div className="flex items-center gap-3">
                <Image src={cartItems.imageUrl}
                    width={293}
                    height={220}
                    alt={cartItems.title}
                    className='w-20 rounded-xl h-20' />
                <div className="flex flex-col">
                    <h2> {cartItems.title}</h2>
                    <small>Golden</small>
                </div>
            </div>
            <div className=' px-4 rounded-xl border  border-gray-400 flex gap-3 items-center'>
                <button onClick={(() => { handledQtyDecrement(cartItems.id) })} className='py-2 pr-3 border-r'>
                    <Minus />
                </button>
                <p className='py-2 px-3 flex-grow'>{cartItems.qty}</p>
                <button onClick={(() => { handledQtyIncrement(cartItems.id) })} className='py-2 pl-3 border-l'>
                    <Plus />
                </button>
            </div>
            <div className="flex items-center gap-2">
                <h4>UGX  {cartItems.salePrice} </h4>
                <button onClick={() => { handledCartItemDelete(cartItems.id) }}>
                    <Trash2 className='text-red-600 w-5 h-5 ' />
                </button>

            </div>
        </div>
    )
}

export default CartProduct