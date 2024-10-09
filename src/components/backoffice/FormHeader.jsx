import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

function FormHeader({ tittle }) {
  const router = useRouter()
  return (
    <div className='flex justify-between dark:bg-slate-600 bg-gray-200 rounded-md px-6 dark:shadow-none shadow-lg shadow-graya-300'>
      <h2 className='dark:text-gray-200 text-gray-700 text-lg font-semibold p-6'>
        {tittle}
      </h2>
      <button>
        <X className='dark:hover:text-gray-400 dark:text-gray-200 text-gray-600
         hover:text-gray-700'
         onClick={()=>router.back()}/>
      </button>
    </div>
  )
}

export default FormHeader