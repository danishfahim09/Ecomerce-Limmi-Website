import React from 'react'
import Link from 'next/link'
function EmptyCart() {
    return (
        <div className='flex flex-col items-center justify-center py-16'>
            <p className='text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-4'>
                Your cart is empty
            </p>
            <Link href='/' className='text-lime-700 dark:text-lime-400 hover:underline font-medium'>
                Start Shopping
            </Link>
        </div>
    )
}

export default EmptyCart