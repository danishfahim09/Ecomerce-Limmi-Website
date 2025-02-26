import React from 'react'
import CartProduct from './CartProduct'
import EmptyCard from './EmptyCart'

function CartItem({ cartItems }) {
    return (
        <div className="col-span-8 sm:col-span-full">
            {cartItems.length > 0 && (
                <>
                    <h2 className='py-2 mb-6 sm:col-span-full text-2xl'>Your Carat</h2>
                    <div className="pb-3 flex items-center justify-between border-b border-slate-400 text-slate-500 text-sm font-semibold mb-4">
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


            <div class="flex items-center gap-2 py-8">
                <input type="text" id="simple-search" class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Coupone..." required />
                <button type="submit" className='shrink-0 py-2 px-4 rounded-lg text-slate-100 dark:text-slate-100 bg-black dark:bg-lime-600'>
                    Apply Coupone
                </button>
            </div>
        </div>
    )
}

export default CartItem