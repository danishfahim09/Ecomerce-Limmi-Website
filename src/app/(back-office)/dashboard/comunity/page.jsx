export const dynamic = 'force-dynamic'

import React from 'react'
import PageHeading from '@/components/backoffice/PageHeader'
import Link from 'next/link'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from "@/lib/getData"
import { columns } from './columns'

async function page() {
  const categories = await getData('training')
  return (
    <div>
      {/*Heading*/}
      <PageHeading
        heading="Limmi Community Trainigs"
        href="/dashboard/comunity/new"
        linkTittle="Add Tranings"
      />
      {/*Table*/}
      <div className="py-10">
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  )
}

export default page