'use client'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

import { Button } from "@/components/ui/button"

function FormHeader({ tittle }) {
  const router = useRouter()
  return (
    <div className='flex justify-between items-center bg-card border border-border rounded-lg px-6 py-4 shadow-md dark:shadow-lg mb-6'>
      <h2 className='text-lg font-semibold text-foreground'>
        {tittle}
      </h2>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => router.back()}
        className="h-8 w-8"
      >
        <X className='h-4 w-4'/>
        <span className="sr-only">Close</span>
      </Button>
    </div>
  )
}

export default FormHeader