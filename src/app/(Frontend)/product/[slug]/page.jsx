import React from 'react'
import BreadCrum from '@/components/frontend/BreadCrum'
import Image from 'next/image'
import { Minus, Plus, Share2, Tag, BaggageClaim, Send } from 'lucide-react'
import CategoryCarousel from '@/components/frontend/CategoryCarousel'
import { getData } from '@/lib/getData'
import Link from 'next/link'

async function ProductDetaile({ params: { slug } }) {
  const category = await getData('/categories/67a27c489e9263a91e6894a1')
  return (
    <div>
      <BreadCrum />
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <Image
            className='w-full bg-red-200'
            src='/th (3).jpeg'
            width={34}
            height={234}
            alt='fasf'
          />
        </div>
        <div className='col-span-6'>
          <div className="flex items-center justify-center mb-6">
            <h2 className='text-xl lg:text-3xl font-semibold'>Calabaza Squash Product</h2>
            <button><Share2 /></button>
          </div>
          <div className="border-b border-gray-500">
            <p className='py-2  '>
              To keek basic fresh, trim the stems and place them in a glass or jaar of water
            </p>
            <div className="flex items-center gap-8 mb-4">
              <p>SKU: 52345</p>
              <p className='bg-lime-300 py-1.5 px-4 rounded-full text-slate-900'>
                <b>Stock: </b>
                230
              </p>
            </div>
          </div>

          <div className='flex items-center justify-between gap-4 pt-4 border-b border-gray-500 pb-2'>
            <div className="flex items-center gap-4">
              <h4 className='text-2xl'>UGX: 100</h4>
              <del className='text-slate-400 text-sm'>UGX: 10000</del>
            </div>

            <p className='flex items-center '>
              <Tag className='w-4 h-4 text-slate-400 me-2' />
              <span>Save 50% right now</span>
            </p>
          </div>

          <div className='flex items-center justify-between py-6'>
            <div className=' px-4 rounded-xl border  border-gray-400 flex gap-3 items-center'>
              <button className='py-2 pr-3 border-r'><Minus /></button>
              <p className='py-2 px-3 flex-grow'>1</p>
              <button className='py-2 pl-3 border-l'><Plus /></button>
            </div>
            <button className='flex items-center space-x-2 text-white bg-lime-700 px-3 py-2 rounded-md'>
              <BaggageClaim />
              <p>Add</p>
            </button>
          </div>
        </div>

        <div className="col-span-3 sm:block hidden overflow-auto  bg-white rounded-lg  border-1 border-gray-100 dark:bg-gray-700 dark:border-gray-700 shadow-lg dark:shadow-sm shadow-gray-300 dark:shadow-gray-500">
          <h2 className='bg-gray-100  py-3 px-6 text-slate-800 dark:text-slate-100 rounded-lg font-semibold border border-gray-200 dark:border-gray-600  dark:bg-gray-800'>
            Delivery & Return
          </h2>
          <div className="p-4">
            <div className="flex   py-2 px-4 rounded-lg bg-orange-500 text-slate-50 gap-3">
              <span>Limmi Express</span>
              <Send />
            </div>
            <div className="text-slate-100 py-3 border-b border-gray-500">
              eligible for free delivery
              <Link href="#" />
              Veiw Details
            </div>
            <h2 className='my-3'>Choose Your Location</h2>
            <div className="pb-3">
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="pb-3">
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="pb-3">
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option><option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

          </div>

        </div>
      </div>
      <div className="bg-white p-4 dark:bg-slate-700 my-8 rounded-xl">
        <h2 className='mb-4 text-xl font-semibold text-slate-400 ml-3'>Simmilar Products</h2>
        <CategoryCarousel products={category.products} />
      </div>
    </div>
  )
}

export default ProductDetaile