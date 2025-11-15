 
'use client'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Loader2 } from "lucide-react"

function Status({ row, accessorKey }) {
    const savedStatus = row.getValue(`${accessorKey}`)
    const userId = row.original.id
    const [status, setstatus] = useState(savedStatus)
    const [loading, setloading] = useState(false)
    
    async function handleChange(value) {
        const newStatus = value === "true"
        setstatus(newStatus)
        const data = {
            status: newStatus,
            emailVerified: true
        }
        try {
            setloading(true)
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
            const response = await fetch(`${baseUrl}/api/farmers/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                setloading(false)
                toast.success(`Farmer Status Updated Successfully`)
            } else {
                setloading(false)
                toast.error(`Something Went wrong`)
            }
        } catch (error) {
            setloading(false)
            console.log(error)
        }
    }
    
    return (
        <div className="w-32">
            {loading ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Updating...</span>
                </div>
            ) : (
                <Select
                    value={status.toString()}
                    onValueChange={handleChange}
                >
                    <SelectTrigger className={`h-9 text-sm ${
                        status 
                            ? "border-lime-500 dark:border-lime-600 bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-400" 
                            : "border-orange-500 dark:border-orange-600 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400"
                    }`}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="true" className="text-lime-700 dark:text-lime-400 focus:bg-lime-100 dark:focus:bg-lime-900/30">
                            APPROVED
                        </SelectItem>
                        <SelectItem value="false" className="text-orange-700 dark:text-orange-400 focus:bg-orange-100 dark:focus:bg-orange-900/30">
                            PENDING
                        </SelectItem>
                    </SelectContent>
                </Select>
            )}
        </div>
    )
}

export default Status