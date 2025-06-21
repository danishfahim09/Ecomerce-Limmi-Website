 
'use client'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function Status({ row, accessorKey }) {
    const savedStatus = row.getValue(`${accessorKey}`)
    const userId = row.original.id
    console.log(userId,"this is  my user  id")
    const [status, setstatus] = useState(savedStatus)
    const [loading, setloading] = useState(false)
    console.log(status, row.original, userId)
    async function handleChange(e) {
        const newStatus = e.target.value === "true"
        setstatus(newStatus)
        const data = {
            status: newStatus,
            emailVerified:true
        }
        console.log(data)
        try {
            setloading(true)
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
            const response = await fetch(`${baseUrl}/api/farmers/${userId}`
                , {
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
    const optionStyle = {
        color: status ? 'green' : 'red'
    }
    const selectBorderStyle = {
        borderColor: status ? 'green' : 'red'
    }
    return (
        <>
            {
                loading ?
                    (
                        <p>Updating...</p>
                    )
                    :
                    (
                        <select
                            id="status"
                            className='bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-400
            dark:focus:border-gray-500'
                            style={selectBorderStyle}
                            value={status.toString()}
                            onChange={handleChange}
                        >
                            <option value="true" selected={status === true}>
                                APPROVED
                            </option>
                            <option value="false" selected={status === false}>
                                PENDING
                            </option>
                        </select >
                    )
            }
        </>
    )
}

export default Status