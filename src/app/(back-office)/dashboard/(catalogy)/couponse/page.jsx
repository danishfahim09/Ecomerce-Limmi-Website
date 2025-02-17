import React from 'react'
import PageHeading from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from "@/lib/getData"
import {columns} from './columns'

async function page() {
  const categories =await getData('couponse')
  return (
    <div>
      {/*Heading*/}
      <PageHeading
        heading="Couponse"
        href="/dashboard/couponse/new"
        linkTittle="Add Coupone"
      />
      {/*Table*/}
       
            <div className="py-10">
              <DataTable data={categories} columns={columns}/>
            </div>
    </div>
  )
}

export default page