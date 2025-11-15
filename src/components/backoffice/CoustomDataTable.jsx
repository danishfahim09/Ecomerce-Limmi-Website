"use client"
import React from 'react'
import { useState } from 'react';
import data from '../../../data.json'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'




function CoustomDataTable() {

    const arry = [1, 2, 3, 4, 5]
    const Page_Size = 10;
    const [Current_Page, setCurrent_Page] = useState(1);
    const Start_Index = (Current_Page - 1) * Page_Size;
    const End_Index = Start_Index + Page_Size
    const Current_Displayed_Data = data.slice(Start_Index, End_Index)
    const totalPages = Math.ceil(data.length / Page_Size)
    const ItemstartIndex = Start_Index + 1
    const ItemEndIndex = Math.min(Start_Index + Page_Size, data.length)

    return (
        <div className='mt-10 space-y-4' >
            <h2 className='text-xl font-semibold text-foreground mb-5' >
                Data Table
            </h2>

            {/*Table*/}
            <div className="rounded-md border border-border shadow-md dark:shadow-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12">
                                <Checkbox />
                            </TableHead>
                            <TableHead>ID</TableHead>
                            <TableHead>First Name</TableHead>
                            <TableHead>Last Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Gender</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Current_Displayed_Data?.length ? (
                            Current_Displayed_Data.map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className="font-medium">{item.id}</TableCell>
                                    <TableCell className="font-medium">{item.first_name}</TableCell>
                                    <TableCell>{item.last_name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.gender}</TableCell>
                                    <TableCell>
                                        <Button variant="ghost" size="sm" className="h-8">
                                            Edit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={7} className="h-24 text-center text-muted-foreground">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            
            {/* Pagination */}
            <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 px-2'>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <span>Showing</span>
                    <span className='font-medium text-foreground'>
                        {ItemstartIndex}-{ItemEndIndex}
                    </span>
                    <span>of</span>
                    <span className='font-medium text-foreground'>{data.length}</span>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrent_Page(Current_Page - 1)}
                        disabled={Current_Page === 1}
                        className="shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                        Previous
                    </Button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <Button
                            key={index}
                            variant={Current_Page === index + 1 ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrent_Page(index + 1)}
                            disabled={Current_Page === index + 1}
                            className={Current_Page === index + 1 ? "bg-lime-600 hover:bg-lime-700 dark:bg-lime-600 dark:hover:bg-lime-700 shadow-sm" : "shadow-sm hover:shadow-md transition-shadow duration-200"}
                        >
                            {index + 1}
                        </Button>
                    ))}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrent_Page(Current_Page + 1)}
                        disabled={totalPages === Current_Page}
                        className="shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                        Next
                    </Button>
                </div>
            </div> 

        </div>
    )
}

export default CoustomDataTable