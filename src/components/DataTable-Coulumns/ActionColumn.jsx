import React from 'react'
import { EllipsisVertical } from "lucide-react"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function ActionColumn({row , title}) {
    const isActive = row.isActive

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {/* <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button> */}
                <button><EllipsisVertical /></button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className=" border rounded-lg border-gray-300 dark:border-gray-700   dark:bg-black px-1" >
                <DropdownMenuLabel className="px-1 py-1">Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="px-1 py-1">Edit {title}</DropdownMenuItem>
                <DropdownMenuItem className="px-1 py-1">Delete {title}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ActionColumn