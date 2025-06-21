export const dynamic = 'force-dynamic'
import React from 'react'
import PageHeading from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from "@/lib/getData"
import {columns} from './columns'


export default async function page() {
  const categories =await getData('categories')
  return (
    <div>
      {/*Heading*/}
      <PageHeading
        heading="Catagory"
        href="/dashboard/catagories/new"
        linkTittle="Add Catagory"
      />
      {/*Table*/}
      <div className="py-10">
        <DataTable data={categories} columns={columns}/>
      </div>
    </div>
  )
}
