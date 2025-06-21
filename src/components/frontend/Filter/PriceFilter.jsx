import { Circle } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

function PriceFilter({ slug }) {
  const searchParams = useSearchParams()
  const sortParam = searchParams.get("sort")

  const priceRanges = [
    {
      title: "Relevence",
      href: `/category/${slug}`,
      sort: null
    },
    {
      title: "Price Heigh Tow Low",
      href: `/category/${slug}?sort=desc`,
      sort: "desc"
    },
    {
      title: "Price Low Tow Heigh",
      href: `/category/${slug}?sort=asc`,
      sort: "asc"
    },
  ]
  const router = useRouter()
  const { handleSubmit, reset, register } = useForm()
  function onSubmit(data) {
    const { min, max } = data
    // min parseInt(data.min)
    // max parseInt(data.max)
    console.log(min, max)
    if (min && max) {
      router.push(`/category/${slug}?sort=asc&min=${min}&max=${max}`)
      reset()
    } else if (min) {
      router.push(`/category/${slug}?sort=asc&min=${min}`)
      reset()
    } else if (max) {
      router.push(`/category/${slug}?sort=asc&min=${max}`)
      reset()
    }
  }
  return (
    <div>
      <div className="">
        <div className="flex justify-between items-center">
          <h2 className='text-xl font-medium'>Price</h2>
          <Link className='text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800' href={`/category/${slug}`}>Reset Filters</Link>
        </div>
        {/* filter */}
        <div className="flex flex-col gap-3">
          {
            priceRanges?.map((link, i) => {

              return <Link
                key={i}
                href={link.href}
                className={`${link.sort === sortParam
                  ? "px-2 bg-slate-500 py-1 border border-lime-400 text-lime-400" : "border border-slate-500 px-2 py-1"}`}
              >
                <Circle className='w-4 h-4 shrink-0' />
                {link.title}
              </Link>
            })
          }
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-3 gap-4 my-4'
        >
          <div className="col-span-1">
            <input
              {...register("min")}
              type="number"
              id='cvv-input'
              aria-describedby='helper-text-explination'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-50 focus:border-lime-500 block  w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500'
              placeholder='Min'
            />
          </div>


          <div className="col-span-1">
            <input
              {...register("main")}
              type="number"
              id='cvv-input'
              aria-describedby='helper-text-explination'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-50 focus:border-lime-500 block  w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-500 dark:placeholder:text-white dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500'
              placeholder='Max'
            />
          </div>


          <div className="col-span-1">
            <button
              type='submit'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-50 focus:border-lime-500 block  w-full p-2.5 dark:bg-lime-500 dark:border-gray-600 dark:placeholder-gray-400 dark:placeholder:text-white dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500'
            >
              Go
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PriceFilter