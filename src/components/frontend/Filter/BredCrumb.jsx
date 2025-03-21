"use client"
import { ChevronRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function BredCrumb({ title, resultCount}) {
    const searcParams = useSearchParams()
    const currentPage = searcParams.get("page") || 1
    const pageSize = 3
    const startRange = (currentPage - 1) * pageSize + 1
    const endRange = Math.min(currentPage * pageSize, resultCount)
    //     take: (parseInt(pageSize)),
    return (
        <div className="flex items-center justify-between text-xm">
            <div className="flex items-center">
                <Link href="/">Home</Link>
                <ChevronRight />
                <p>{title}</p>
            </div>
            <p>{startRange}-{endRange} of {resultCount} results</p>
        </div>
    )
}

export default BredCrumb