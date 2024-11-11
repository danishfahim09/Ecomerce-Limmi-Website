import React from 'react'
import PageHeading from '@/components/backoffice/PageHeader'
import Link from 'next/link'

function Couponse() {
  return (
    <div>
      {/*Heading*/}
      <PageHeading
        heading="Couponse"
        href="/dashboard/couponse/new"
        linkTittle="Add Coupone"
      />
      {/*Table*/}
    </div>
  )
}

export default Couponse