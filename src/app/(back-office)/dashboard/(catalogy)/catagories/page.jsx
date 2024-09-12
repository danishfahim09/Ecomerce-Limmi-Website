import React from 'react'
import PageHeading from '@/components/backoffice/PageHeader'
import Link from 'next/link'

function page() {
  return (
    <div>
      {/*Heading*/}
      <PageHeading
        heading="Catagory"
        href="/dashboard/catagories/new"
        linkTittle="Add Catagory"
      />
      {/*Table*/}
    </div>
  )
}

export default page