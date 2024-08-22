import React from 'react'
import { AlignJustify, Bell, Sun, User } from 'lucide-react'

function Navbare() {
  return (
    <div className=' h-16 px-8 py-4 fixed top-0 w-full  left-60  bg-slate-800'>
      <div className='w-10/12 flex items-center justify-between pt-2
     text-slate-50'>
        {/* Icon */}
        <button>
          <AlignJustify />
        </button>
        {/* 3 Icons */}
        <div className='flex space-x-4 '>
          <button>
            <Bell />
          </button>
          <button>
            <Sun />
          </button>
          <button>
            <User />
          </button>
        </div></div>

    </div>
  )
}

export default Navbare