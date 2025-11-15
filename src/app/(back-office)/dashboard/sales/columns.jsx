"use client"
import Image from "next/image"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import Datecolumn from '@/components/DataTable-Coulumns/DateColumns'
import ImageColumn from '@/components/DataTable-Coulumns/ImageColumn'
import SortableColumn from '@/components/DataTable-Coulumns/SortableColumn'
import ActionColumn from '@/components/DataTable-Coulumns/ActionColumn'

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
    accessorKey: "productImage",
    header: "Product Image",
    cell: ({ row }) => (<ImageColumn row={row} accessorKey="productImage" />)
  },
  {
    accessorKey: "productTitle",
    header: ({ column }) => (<SortableColumn column={column} title="Product Title" />)
  },


  {
    accessorKey: "productPrice",
    header: "Price",
    cell: ({ row }) => {
      const price = row.getValue("productPrice")
      return <span className="text-foreground font-medium">UGX {price}</span>
    }
  },
  {
    accessorKey: "productQty",
    header: "Qty",
    cell: ({ row }) => {
      const qty = row.getValue("productQty")
      return <span className="text-foreground font-medium">{qty}</span>
    }
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => {
      const total = row.getValue("total")
      return <span className="text-foreground font-bold">UGX {total}</span>
    }
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const product = row.original
  //     return (
  //       <ActionColumn
  //         row={row}
  //         title="Product"
  //         endpoint={`products/${product.id}`}
  //         editEndPoint={`products/update/${product.id}`}
  //       />
  //     )
  //   }
  // },
]
