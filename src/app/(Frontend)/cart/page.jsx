"use client"
import React from 'react'
import BredCrumb from '@/components/frontend/Filter/BredCrumb'
import { useSelector } from 'react-redux'
import CartItem from '@/components/frontend/CartItem'
import CardSubTotalCard from '@/components/frontend/CardSubTotalCard'

function Cart() {
  const cartItem = useSelector((store) => store.cart)
  const subTotal = cartItem.reduce((acc, currentItem) => {
    return acc + currentItem.salePrice * currentItem.qty
  }, 0)
    .toFixed(2) ?? 0;

  return (
    <div>
      <BredCrumb />
      <div className="grid grid-cols-12 gap-6 md:gap-14">
        <CartItem cartItems={cartItem} />
        <CardSubTotalCard subTotal={subTotal} />
      </div>
    </div >
  )
}

export default Cart