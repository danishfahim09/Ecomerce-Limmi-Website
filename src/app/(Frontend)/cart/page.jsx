import React from 'react'
import BreadCrum from '@/components/frontend/BreadCrum'
import { Minus, Plus, Search, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <div>
      <BreadCrum />
      <div className="grid   grid-cols-12 gap-14">
        <div className="col-span-8  ">
          <h2 className='py-2 mb-6 text-2xl'>Your Carat</h2>
          <div className="pb-3 flex items-center justify-between border-b border-slate-400 text-slate-500 text-sm font-semibold mb-4">
            <h2 className='uppercase'>Product</h2>
            <h2 className='uppercase'>Quantity</h2>
            <h2 className='uppercase'>Price</h2>
          </div>
          {/* Cart 1 */}
          
            <div className="pb-3 mb-4 flex items-center justify-between border-b border-slate-400  text-sm font-semibold">
              <div className="flex items-center gap-3">
                <Image src="/th (2).jpeg"
                  width={293}
                  height={220}
                  alt='food Shop'
                  className='w-20 rounded-xl h-20' />
                <div className="flex flex-col">
                  <h2>Apple Watch Series </h2>
                  <small>Golden</small>
                </div>
              </div>
              <div className=' px-4 rounded-xl border  border-gray-400 flex gap-3 items-center'>
                <button className='py-2 pr-3 border-r'><Minus /></button>
                <p className='py-2 px-3 flex-grow'>1</p>
                <button className='py-2 pl-3 border-l'><Plus /></button>
              </div>
              <div className="flex items-center gap-2">
                <h1>$259.00</h1>
                <button>
                  <Trash2 className='text-red-600 w-5 h-5 ' />
                </button>

              </div>
            </div>

          
          {/* Cart 2 */}
          
            <div className="pb-3 mb-4 flex items-center justify-between border-b border-slate-400  text-sm font-semibold">
              <div className="flex items-center gap-3">
                <Image src="/th (2).jpeg"
                  width={293}
                  height={220}
                  alt='food Shop'
                  className='w-20 rounded-xl h-20' />
                <div className="flex flex-col">
                  <h2>Apple Watch Series </h2>
                  <small>Golden</small>
                </div>
              </div>
              <div className=' px-4 rounded-xl border  border-gray-400 flex gap-3 items-center'>
                <button className='py-2 pr-3 border-r'><Minus /></button>
                <p className='py-2 px-3 flex-grow'>1</p>
                <button className='py-2 pl-3 border-l'><Plus /></button>
              </div>
              <div className="flex items-center gap-2">
                <h1>$259.00</h1>
                <button>
                  <Trash2 className='text-red-600 w-5 h-5 ' />
                </button>
              </div>
            </div>
          



          <div class="flex items-center gap-2 py-8">
              <input type="text" id="simple-search" class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Coupone..." required />
            <button type="submit" className='shrink-0 py-2 px-4 rounded-lg text-slate-100 dark:text-slate-100 bg-black dark:bg-lime-600'>
              Apply Coupone
            </button>
          </div>





        </div>
        <div className="col-span-4 sm:block hidden overflow-auto  bg-white rounded-lg  border-1 border-gray-100 dark:bg-gray-700 dark:border-gray-700 shadow-lg dark:shadow-sm shadow-gray-300 dark:shadow-gray-500 p-5 text-slate-800 dark:text-slate-100 font-bold">
          <h2 className='text-2xl pb-3'>Cart Tool</h2>
          <div className="flex items-center justify-between border-b border-slate-500 pb-6">
            <span>Subtotal</span>
            <span>$589</span>
          </div>
          <div className="flex items-center justify-between  py-4">
            <span>Tax</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between  pb-4">
            <span>Shipping</span>
            <span>$19</span>
          </div>
          <p className='border-b border-slate-500 pb-6 text-slate-400 font-normal'>we only charge for shipping when you have over 2kg items</p>
          <div className="flex items-center justify-between py-4 font-bold">
            <span>Totall</span>
            <span>$1000</span>
          </div>
          <Link
            href='#'
            className='bg-slate-200 text-slate-900 rounded-lg py-2 px-5 font-normal'>
            Continue to Payment</Link>
        </div>
      </div>
    </div >
  )
}

export default page