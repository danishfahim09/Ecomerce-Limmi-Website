import React from 'react'
import { CheckCircle2, XCircle } from "lucide-react"

function ActiveStatus({ row, accessorKey }) {
    const isActive = row.getValue(`${accessorKey}`)
    
    return (
        <div className="flex items-center gap-2">
            {isActive ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400 border border-lime-200 dark:border-lime-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Active
                </span>
            ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                    <XCircle className="w-3.5 h-3.5" />
                    Inactive
                </span>
            )}
        </div>
    )
}

export default ActiveStatus

