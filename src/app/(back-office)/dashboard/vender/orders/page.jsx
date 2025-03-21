import React from 'react'
// import PageHeading from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from "@/lib/getData"
import { columns } from './columns'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

async function page() {
  const session = getServerSession(authOptions)
  const id = session?.user?.id
  const role = session?.user?.role
  const allSales = await getData('orders')

  //fetch all the Sales
  //felter by venderId => to get sales for this vender
  //fetch order by Id 
  //coustemer name, email, phone ,orderNumber
  const farmerSales = allSales.filter((sale) =>
    sale.venderId === id
  )
  return (
    <div>
      {/* Heading
      <PageHeading
        heading="Couponse"
        href="/dashboard/couponse/new"
        linkTittle="Add Coupone"
      /> */}


      {/*Table*/}

      <div className="py-10">
        {
          role === "ADMIN" ? (
            <DataTable data={allSales} columns={columns} />
          ) :
            (
              <DataTable data={farmerSales} columns={columns} />
            )
        }

      </div>
    </div>
  )
}

export default page