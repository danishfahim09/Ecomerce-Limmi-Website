export const dynamic = 'force-dynamic'
import React from 'react'
import Link from 'next/link' 
import { getData } from '@/lib/getData'
import BlogCard from '@/components/frontend/BlogCard'
import { MoveRight } from 'lucide-react'

async function CummunittyTrainnig({ title, trainings }) {

    return (
        <section className="py-12 bg-white dark:bg-gray-800 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="mx-auto md:mx-0">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold sm:text-4xl text-gray-900 dark:text-gray-100">
                            {title}
                        </h2>
                        <Link href="/blogs" className='flex gap-2 items-center text-white rounded-md px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-lime-600 dark:hover:bg-lime-700 transition-colors duration-200' >
                            See All
                            <MoveRight className='w-4 h-4' />
                        </Link>
                    </div>

                    <p className="text-base font-normal leading-7 text-gray-600 dark:text-gray-400">
                        Explore our comprehensive training resources to enhance your skills and knowledge.
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