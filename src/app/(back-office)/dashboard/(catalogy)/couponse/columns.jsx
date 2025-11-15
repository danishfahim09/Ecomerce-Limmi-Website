"use client"
import { Checkbox } from "@/components/ui/checkbox"
import Datecolumn from '@/components/DataTable-Coulumns/DateColumns'
import SortableColumn from '@/components/DataTable-Coulumns/SortableColumn'
import ActionColumn from '@/components/DataTable-Coulumns/ActionColumn'
import ActiveStatus from '@/components/DataTable-Coulumns/ActiveStatus'

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
        header: ({ column }) => (<SortableColumn column={column} title="Tittle" />)
    },
    // {
    //     accessorKey: "imageUrl",
    //     header: "Banner Image",
    //     cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl" />)
    // },

    {
        accessorKey: "couponCode",
        header: "couponCode",
    },
    {
        accessorKey: "expiryDate",
        header: "Expiry Date",
        cell: ({ row }) => (<Datecolumn row={row} accessorKey={'expiryDate'} />)
    },
    {
        accessorKey: "createdAt",
        header: "Date Crerated",
        cell: ({ row }) => (<Datecolumn row={row} accessorKey={'createdAt'} />)
    },
    {
        accessorKey: "isActive",
        header: "Active",
        cell: ({ row }) => (<ActiveStatus row={row} accessorKey="isActive" />)
    },

    {
        id: "actions",
        cell: ({ row }) => {
            const coupone = row.original
            return (
                <ActionColumn
                    row={row}
                    title="Coupones"
                    endpoint={`couponse/${coupone.id}`}
                    editEndPoint={`couponse/update/${coupone.id}`}
                />
            )
        }
    },
]
