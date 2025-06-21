
export const dynamic = 'force-dynamic'
import React from 'react'
import CustomerForm from '@/components/backoffice/CustomerForm'
import FormHeader from '@/components/backoffice/FormHeader'
import { getData } from '@/lib/getData'

async function UpdateCustomer({ params: { id } }) {
    
  const user = await getData(`users/${id}`)
  console.log("i am danish id can you hearbme",user)
  return (
    <div>
      <FormHeader
        title="Update Customer"
      />
      <CustomerForm user={user} />
    </div>
  )
}

export default UpdateCustomer
