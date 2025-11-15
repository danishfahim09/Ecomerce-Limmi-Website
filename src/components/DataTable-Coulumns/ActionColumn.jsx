import React from 'react'
import { EllipsisVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import DeleteBtn from '@/components/actions/DeleteBtn'
import EditButton from '@/components/actions/EditButton'
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function ActionColumn({ row, title, endpoint ,editEndPoint}) {
    const isActive = row.isActive

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-muted">
                    <span className="sr-only">Open menu</span>
                    <EllipsisVertical className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 border border-border bg-popover text-popover-foreground shadow-lg dark:shadow-xl">
                <DropdownMenuLabel className="text-foreground">Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer focus:bg-lime-100 dark:focus:bg-lime-900/30">
                    <DeleteBtn title={title} endpoint={endpoint} />
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer focus:bg-lime-100 dark:focus:bg-lime-900/30">
                    <EditButton title={title} editEndPoint={editEndPoint}/>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ActionColumn