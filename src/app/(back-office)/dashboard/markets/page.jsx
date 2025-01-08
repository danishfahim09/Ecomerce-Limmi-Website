"use client"
import React from 'react'
import PageHeading from '@/components/backoffice/PageHeader'

function page() {
  return (
    <div>
      <PageHeading
      heading="Catagory"
      href="/dashboard/markets/new"
      linkTittle="Add Market"
      />
      markets
    </div>
  )
}

export default page