import React from 'react'
import PageHeading from '@/components/backoffice/PageHeader'
import Link from 'next/link'

function page() {
  return (
    <div>
      {/*Heading*/}
      <PageHeading
        heading="Staff"
        href="/dashboard/staff/new"
        linkTittle="Add Tranings"
      />
      {/*Table*/}
    </div>
  )
}

export default page