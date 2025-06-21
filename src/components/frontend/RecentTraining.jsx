import Image from 'next/image'
import React from 'react'
import { ConvertIsoDateToNormal } from '@/lib/ConvertIsoDateToNormal'

function RecentTraining({ resentTrainings }) {

    return (
        <div className="lg:col-span-2">
            <p className="text-xl font-bold text-gray-900 dark:text-slate-300">
                Recent Trainings
            </p>

            <div className="mt-6 space-y-5">

                {
                    resentTrainings?.map((training, i) => {
                        const normalDate = ConvertIsoDateToNormal(training.createdAt)
                        return (
                            <div key={i}
                                className="relative overflow-hidden transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:bg-gray-50 hover:-translate-y-1">
                                <div className="p-4">
                                    <div className="flex flex-col items-start lg:items-center">
                                        <Image
                                            src={training.imageUrl}
                                            alt={training.title}
                                            width={1000}
                                            height={1000}
                                            className="object-cover w-full h-16 rounded-lg shrink-0"
                                        />
                                        <div className="ml-5">
                                            {/* <p className="text-sm font-medium text-gray-900">
                                                {normalDate}
                                            </p> */}
                                            <p className="text-sm leading-7 font-bold text-gray-900 mt-2.5">
                                                <a href={`/blogs/${training.slug}`} className="line-clamp-2">
                                                    {training.title}
                                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default RecentTraining