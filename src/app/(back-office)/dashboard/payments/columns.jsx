"use client"
import Image from "next/image"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import Datecolumn from '@/components/DataTable-Coulumns/DateColumns'
import ImageColumn from '@/components/DataTable-Coulumns/ImageColumn'
import SortableColumn from '@/components/DataTable-Coulumns/SortableColumn'
import ActionColumn from '@/components/DataTable-Coulumns/ActionColumn'
import ActiveStatus from '@/components/DataTable-Coulumns/ActiveStatus'

import { Button } from "@/components/ui/button"

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
    header: ({ column }) => (<SortableColumn column={column} title="Title" />)
  },
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl" />)
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const description = row.getValue("description")
      return (
        <div className="max-w-xs truncate text-sm text-foreground">
          {description}
        </div>
      )
    }
  },
  {
    accessorKey: "isActive",
    header: "Active",
    cell: ({ row }) => (<ActiveStatus row={row} accessorKey="isActive" />)
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => (<Datecolumn row={row} accessorKey={'createdAt'} />)
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original
      return (
        <ActionColumn
          row={row}
          title="Category"
          endpoint={`categories/${category.id}`}
          editEndPoint={`categories/update/${category.id}`}
        />
      )
    },
  },
]
