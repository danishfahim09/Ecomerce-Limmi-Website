"use client"
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

function Sorting({ title, slug, isSearch }) {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentSort = searchParams.get("sort") || ""
    
    const sortingLinks = [
        {
            title: "Relevance",
            href: `/category/${slug}`,
            sort: ""
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
        }
    ]

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className='text-2xl sm:text-3xl font-semibold text-foreground'>
                {isSearch && "Search Result - "}{title}
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <p className="text-sm font-medium text-muted-foreground">Sort by:</p>
                <div className="flex items-center gap-2 flex-wrap">
                    {
                        sortingLinks?.map((link, i) => {
                            const isActive = link.sort === currentSort
                            return (
                                <Link
                                    key={i}
                                    className={`px-3 py-1.5 text-sm font-medium rounded-md border transition-all duration-200 ${
                                        isActive 
                                            ? "bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400 border-lime-500 dark:border-lime-600 shadow-sm" 
                                            : "bg-background text-foreground border-border hover:bg-muted hover:border-lime-300 dark:hover:border-lime-700"
                                    }`}
                                    href={link.href}
                                >
                                    {link.title}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Sorting