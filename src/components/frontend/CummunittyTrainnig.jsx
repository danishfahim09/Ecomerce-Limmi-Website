export const dynamic = 'force-dynamic'
import React from 'react'
import Link from 'next/link' 
import { getData } from '@/lib/getData'
import BlogCard from '@/components/frontend/BlogCard'
import { MoveRight } from 'lucide-react'

async function CummunittyTrainnig({ title, trainings }) {

    return (
        <section className="py-12 bg-white dark:bg-slate-700 sm:py-16 lg:py-20 shadow-lg">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className=" mx-auto md:mx-0">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold sm:text-4xl dark:text-slate-100 text-gray-900">
                            {title}
                        </h2>
                        <Link href="/blogs" className=' flex gap-1 text-slate-50 rounded-md px-4 py-2 bg-slate-800 hover:bg-slate-900 duration-300 transition-all' >
                            See All
                            <MoveRight className='flex-shrink-0 mx-2' />
                        </Link>
                    </div>

                    <p className="mt-5 text-base font-normal leading-7 text-gray-500 dark:text-gray-200">
                        Create custom landing pages with Rareblocks that converts more visitors than any website.
                    </p>
                </div>

                <div
                    className="grid max-w-md grid-cols-1 mx-auto mt-12 sm:mt-16 md:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-16 md:max-w-none">
                    {
                        trainings?.map((training, i) => {
                            return (
                                <BlogCard key={i} training={training} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default CummunittyTrainnig