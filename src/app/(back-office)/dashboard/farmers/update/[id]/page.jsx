"use client"
import React, { useState } from 'react'
import NewFarmerForm from '@/components/backoffice/NewFarmerForm'
import FormHeader from '@/components/backoffice/FormHeader'

function UpdateCustomer() {
  return (
    <div>
      <FormHeader
        title="Update Customer"
      />
      <NewFarmerForm />
    </div>
  )
}

export default UpdateCustomer