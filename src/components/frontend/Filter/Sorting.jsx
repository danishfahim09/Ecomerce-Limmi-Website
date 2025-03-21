"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'

function Sorting({ title, slug, isSearch }) {
    const pathname = usePathname()
    // console.log(pathname, "i a path name")
    const sortingLinks = [
        {
            title: "Relevance",
            href: `/category/${slug}`,
            params: ""
        },
        {
            title: "Price - High To Low",
            href: `/category/${slug}?sort=desc`,
            params: "?sort=desc"
        },
        {
            title: "Price - Low To High",
            href: `/category/${slug}?sort=asc`,
            params: "?sort=asc"
        }
    ]

    return (
        <div className="flex items-center justify-between ">
            {/* <h2 className='text-2xl'>Search Result - Electronic</h2> */}
            <h2 className='text-2xl font-medium'>{isSearch && "Search Result-"}{title}</h2>
            <div className="flex text-sm items-center gap-3">
                <p>Shor by:</p>
                <div className="flex items-center">
                    {
                        sortingLinks.map((link, i) => {
                            const actualPathName = `${pathname}${link.params}`
                            console.log(actualPathName)
                            return (
                                <Link
                                    key={i}
                                    className={actualPathName === link.herf ? "bg-slate-800 px-2 text-lime-400 border border-lime-400" : "border border-slate-500 px-2"}
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

        // if (window !== "undefined") {
        //     const path = window.location.href;
        //     console.log(path)
        // }

        // Danish Ye Buhuth aham ha is per apne app ko samjaa doo tek ha na 
    )
}

export default Sorting