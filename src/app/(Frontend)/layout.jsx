import React from 'react'
import Navbare from '@/components/frontend/Navbare.jsx'

function Layout({ children }) {
  return (
    <div className=''>
      <Navbare />
      <div className='w-full mx-auto py-6'>{children}</div>
      
      </div>
  )
}

export default Layout