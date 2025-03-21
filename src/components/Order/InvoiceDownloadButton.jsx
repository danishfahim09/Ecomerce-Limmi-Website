'use client'
import React from 'react'

function InvoiceDownloadButton() {
function handlePrint(params) {
    console.log("i am danish")
    
}
    return (
        <div className="flex items-end justify-end mb-8">
            <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold dark:text-gray-900 transition-all duration-200 text-slate-200 bg-slate-800 dark:bg-gray-100  border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 "
            >
                Download Invoice
            </button>
        </div>
    )
}

export default InvoiceDownloadButton