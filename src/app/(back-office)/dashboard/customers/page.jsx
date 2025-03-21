import React from 'react'
import PageHeading from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from "@/lib/getData"
import { columns } from './columns'

async function page() {
  const coustomers = await getData('customers')
  //console.log(farmers)
  return (
    <div>
      <PageHeading
      heading="Farmer"
      href="/dashboard/farmers/new"
      linkTittle="Add Farmer"
      />
      {/*Table*/}
            <div className="py-10">
              <DataTable data={coustomers} columns={columns} />
            </div>
    </div>
  )
}

export default page