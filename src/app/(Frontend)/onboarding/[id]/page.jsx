import React from 'react'
import NewFarmerForm from '@/components/backoffice/NewFarmerForm'
import { getData } from '@/lib/getData'


async function page({ params: { id } }) {
  const users = await getData(`users/${id}`)
  return (
    <div className='flex flex-col gap-6 p-16'>
      <div className='max-w-4xl mx-auto p-4'>
        <h2 className='flex flex-col gap-6'>Hello {users.name} Tell More About Your Self</h2>
      </div>
      <NewFarmerForm users={users}/>
    </div>
  )
}

export default page