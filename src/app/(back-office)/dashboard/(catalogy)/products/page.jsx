import React from 'react'
import PageHeading from '@/components/backoffice/PageHeader'

function page() {
  return (
    <div>
      {/*Heading*/}
      <PageHeading
        heading="Products"
        href="/dashboard/products/new"
        linkTittle="Add Product"
      />
      {/*Table*/}
    </div>
  )
}

export default page