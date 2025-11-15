"use client"
import { Circle } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function PriceFilter({ slug }) {
  const searchParams = useSearchParams()
  const sortParam = searchParams.get("sort")
  const router = useRouter()
  const { handleSubmit, reset, register } = useForm()

  const priceRanges = [
    {
      title: "Relevance",
      href: `/category/${slug}`,
      sort: null
    },
    {
      title: "Price - High To Low",
      href: `/category/${slug}?sort=desc`,
      sort: "desc"
    },
    {
      title: "Price - Low To High",
      href: `/category/${slug}?sort=asc`,
      sort: "asc"
    },
  ]

  function onSubmit(data) {
    const { min, max } = data
    if (min && max) {
      router.push(`/category/${slug}?sort=asc&min=${min}&max=${max}`)
      reset()
    } else if (min) {
      router.push(`/category/${slug}?sort=asc&min=${min}`)
      reset()
    } else if (max) {
      router.push(`/category/${slug}?sort=asc&max=${max}`)
      reset()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className='text-xl font-semibold text-foreground'>Price</h2>
        <Link href={`/category/${slug}`}>
          <Button 
            variant="outline" 
            size="sm"
            className="text-lime-600 hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300 border-lime-300 dark:border-lime-700 hover:bg-lime-50 dark:hover:bg-lime-900/20"
          >
            Reset Filters
          </Button>
        </Link>
      </div>
      
      <div className="flex flex-col gap-2">
        {
          priceRanges?.map((link, i) => {
            const isActive = link.sort === sortParam
            return (
              <Link
                key={i}
                href={link.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md border transition-all duration-200 ${
                  isActive
                    ? "bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 border-lime-500 dark:border-lime-600 shadow-sm"
                    : "bg-background text-foreground border-border hover:bg-muted hover:border-lime-300 dark:hover:border-lime-700"
                }`}
              >
                <Circle className={`w-4 h-4 shrink-0 ${isActive ? "fill-current" : ""}`} />
                <span className="text-sm font-medium">{link.title}</span>
              </Link>
            )
          })
        }
      </div>

      <div className="pt-4 border-t border-border">
        <Label className="text-sm font-semibold text-foreground mb-3 block">Price Range</Label>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid grid-cols-3 gap-3'
        >
          <div className="col-span-1">
            <Input
              {...register("min")}
              type="number"
              placeholder='Min'
              className="shadow-sm"
            />
          </div>
          <div className="col-span-1">
            <Input
              {...register("max")}
              type="number"
              placeholder='Max'
              className="shadow-sm"
            />
          </div>
          <div className="col-span-1">
            <Button
              type='submit'
              className="w-full bg-lime-600 hover:bg-lime-700 dark:bg-lime-600 dark:hover:bg-lime-700 text-white shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              Go
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PriceFilter