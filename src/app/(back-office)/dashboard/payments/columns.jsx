"use client"
import Image from "next/image"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal ,ArrowUpDown} from "lucide-react"
import { EllipsisVertical } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  {
    accessorKey: "imageUrl",
    header: "Category",
    cell: ({ row }) => {
      const imageUrl = row.getValue("imageUrl")
      return (
        <div className="shrink-0">
          <Image
            src={imageUrl}
            width={500}
            height={500}
            alt=""
            className="w-10 h-10 rounded-full object-fill"
          />
        </div>
      )
    }
  },
  {
    accessorKey: "description",
    header: "Description",
    // cell: ({ row }) => {
    //   const description = row.getValue("description")
    //   return (
    //     <div className="shrink-0">
    //       {description}
    //     </div>
    //   )
    // }
  },
  {
    accessorKey: "isActive",
    header: "isActive",
  },
  {
    accessorKey: "createdAt",
    header: "Date Crerated",
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt")

      const originalDate = new Date(createdAt);
      const day = originalDate.getDate()
      const month = originalDate.toLocaleString('default', {
        month: 'short'
      })
      const year = originalDate.getFullYear()
      const formated = `${day} ${month} ${year}`
      return (
        <div className="shrink-0">
          {formated}
        </div>
      )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
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
            <DropdownMenuItem className="px-1 py-1"
              onClick={() => navigator.clipboard.writeText(isActive)}
            >
              Copy The Status
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="px-1 py-1">Edit Category</DropdownMenuItem>
            <DropdownMenuItem className="px-1 py-1">Delete Category</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
