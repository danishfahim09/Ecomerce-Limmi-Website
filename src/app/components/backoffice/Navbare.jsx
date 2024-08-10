import React from 'react'
import { AlignJustify, Bell, Sun, User } from 'lucide-react'

function Navbare() {
  return (
    <div className='flex items-center justify-between bg-slate-800
     text-slate-50 h-16 px-8 py-4 fixed top-0 w-full  left-60'>
      {/* Icon */}
      <button>
        <AlignJustify />
      </button>
      {/* 3 Icons */}
      <div className='flex space-x-3'>
        <button>
          <Bell />
        </button>
        <button>
          <Sun />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  )
}

export default Navbare