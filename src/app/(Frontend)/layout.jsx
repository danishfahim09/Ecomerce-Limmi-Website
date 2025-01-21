import React from 'react'
import Navbare from '@/components/frontend/Navbare.jsx'

function Layout({ children }) {
  return (
    <div className=''>
      <Navbare />
      {children}
      </div>
  )
}

export default Layout