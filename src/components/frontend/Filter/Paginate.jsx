"use client"
import { useSearchParams, usePathname } from 'next/navigation'
import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


export default function Paginate({ totalPages }) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const currentPage = parseInt(searchParams.get("page") || 1)
    
    const createPageUrl = (page) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', page.toString())
        return `${pathname}?${params.toString()}`
    }

    const getPageNumbers = () => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1)
        }
        
        if (currentPage <= 3) {
            return [1, 2, 3, 4, 5]
        }
        
        if (currentPage >= totalPages - 2) {
            return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
        }
        
        return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
    }

    const pageNumbers = getPageNumbers()
    const showStartEllipsis = pageNumbers[0] > 2
    const showEndEllipsis = pageNumbers[pageNumbers.length - 1] < totalPages - 1

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious 
                        href={createPageUrl(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>
                
                {showStartEllipsis && (
                    <>
                        <PaginationItem>
                            <PaginationLink href={createPageUrl(1)}>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    </>
                )}

                {pageNumbers.map((pageNum) => (
                    <PaginationItem key={pageNum}>
                        <PaginationLink
                            isActive={pageNum === currentPage}
                            href={createPageUrl(pageNum)}
                            className={pageNum === currentPage ? "bg-lime-600 hover:bg-lime-700 dark:bg-lime-600 dark:hover:bg-lime-700 text-white" : ""}
                        >
                            {pageNum}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {showEndEllipsis && (
                    <>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href={createPageUrl(totalPages)}>{totalPages}</PaginationLink>
                        </PaginationItem>
                    </>
                )}

                <PaginationItem>
                    <PaginationNext 
                        href={createPageUrl(Math.min(totalPages, currentPage + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
