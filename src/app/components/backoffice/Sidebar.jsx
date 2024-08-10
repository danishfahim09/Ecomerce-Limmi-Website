import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div className='bg-slate-700 space-y-6 h-screen w-60 text-slate-500 p-3 fixed top-0 left-0'>
        <Link href="#">Logo</Link>
        <div className='space-y-3 flex flex-col'>
        <Link href="#">Dashboard</Link>
        <Link href="#">Catalogy</Link>
        <Link href="#">Coustemers</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Online-Store</Link>
        <Link href="#">international</Link>
        <Link href="#">Orders</Link>
    </div>
    </div>
  )
}

export default Sidebar