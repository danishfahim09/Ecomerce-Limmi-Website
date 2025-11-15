import React from 'react'
import { Button } from "@/components/ui/button"
import {ArrowUpDown} from "lucide-react"

function SortableColumn({column,title}) {
 return (
         <Button
           variant="ghost"
           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
           className="h-auto p-0 font-semibold hover:bg-transparent hover:text-lime-600 dark:hover:text-lime-400"
         >
           {title}
           <ArrowUpDown className="ml-2 h-4 w-4" />
         </Button>
       )
}

export default SortableColumn