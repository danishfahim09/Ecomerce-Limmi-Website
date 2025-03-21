
"use client"
import * as React from "react"
// import { ChevronsUpDown } from "lucide-react"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"
import PriceFilter from '@/components/frontend/Filter/PriceFilter'
import BrandFilter from '@/components/frontend/Filter/BrandFilter'

function Filters({slug}) {
  // const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="">
      <PriceFilter slug={slug}/>
      <BrandFilter />
    </div>
  )
}

export default Filters


{/* <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          {/* <h4 className="text-sm font-semibold">
            @peduarte
          </h4> */}
//     <CollapsibleTrigger asChild  >

//       <Button variant="ghost" size="sm" className="flex items-center justify-between">
//         <h2>Price</h2>
//         <ChevronsUpDown className="h-4 w-4" />
//         <span className="sr-only">Toggle</span>
//       </Button>
//     </CollapsibleTrigger>
//   </div>

//   <CollapsibleContent className="space-y-2">
//     <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
//       @radix-ui/colors
//     </div>
//     <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
//       @stitches/react
//     </div>
//   </CollapsibleContent>
// </Collapsible> */}