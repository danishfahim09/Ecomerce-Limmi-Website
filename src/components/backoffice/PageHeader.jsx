import React from 'react'
import Link from 'next/link'
import { Download, PlusIcon, Search, Trash2 } from 'lucide-react'


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function PageHeader({ heading, href, linkTittle }) {
    return (
        <div className="space-y-5">
            <div className='flex justify-between items-center'>

                {/*Heading*/}
                <h2 className='text-2xl font-semibold text-foreground'>
                    {heading}
                </h2>
                <Link href={href}>
                    <Button className="gap-2 shadow-md hover:shadow-lg transition-shadow duration-200">
                        <PlusIcon className="w-4 h-4" />
                        {linkTittle}
                    </Button>
                </Link>
            </div>

            {/* Import //Search  //Delete */}
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-stretch sm:items-center bg-card dark:bg-card border border-border shadow-md dark:shadow-lg rounded-lg p-4 sm:px-6'>
                <Button 
                    variant="outline" 
                    className="w-full sm:w-auto gap-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                    <Download className="w-4 h-4" />
                    <span>Import</span>
                </Button>
                <div className="flex-1 sm:max-w-md">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Search className='w-5 h-5 text-muted-foreground' />
                        </div>
                        <Input 
                            type="text" 
                            id="search" 
                            className="pl-10 w-full"
                            placeholder="Search..." 
                        />
                    </div>
                </div>
                <Button 
                    variant="destructive" 
                    className="w-full sm:w-auto gap-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                    <Trash2 className='w-4 h-4' />
                    Bulk Delete
                </Button>
            </div>
        </div>

    )
}

export default PageHeader