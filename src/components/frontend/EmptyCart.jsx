import React from 'react'
import Link from 'next/link'
function EmptyCart() {
    return (
        <div className='flex items-center justify-center'>
            <p className=' md:text-2xl'>Your cart is Empty {""}
                <Link href='/' className='text-slate-800 dark:text-lime-500'>
                    Start Shopping
                </Link>
            </p>


        </div>
    )
}

export default EmptyCart