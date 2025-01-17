'use client'
import React from 'react'
import PageHeading from '@/components/backoffice/PageHeader'

function page() {
  return (
    <div>
      {/*Heading*/}
      <PageHeading
        heading="Banner"
        href="/dashboard/banners/new"
        linkTittle="Add Banner"
      />
      {/*Table*/}
    </div>
  )
}

export default page