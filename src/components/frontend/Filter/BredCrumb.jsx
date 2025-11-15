"use client"
import { ChevronRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function BredCrumb({ title, resultCount}) {
    const searcParams = useSearchParams()
    const currentPage = parseInt(searcParams.get("page") || 1)
    const pageSize = 3
    const startRange = (currentPage - 1) * pageSize + 1
    const endRange = Math.min(currentPage * pageSize, resultCount)
    
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link 
                    href="/" 
                    className="hover:text-foreground transition-colors duration-200 font-medium"
                >
                    Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground font-medium">{title}</span>
            </nav>
            <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{startRange}-{endRange}</span> of <span className="font-medium text-foreground">{resultCount}</span> results
            </p>
        </div>
    )
}

export default BredCrumb