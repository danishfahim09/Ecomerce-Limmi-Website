export const dynamic = 'force-dynamic'
import React from 'react'
// import PageHeading from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from "@/lib/getData"
import { columns } from './columns'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

async function Coustemers() {
  const session = getServerSession(authOptions)
  const id = session?.user?.id
  console.log(id,"i am id")
  const role = session?.user?.role
  const allSales = await getData('sales')
console.log(allSales,"thi is my sales")
  //fetch all the Sales
  //felter by venderId => to get sales for this vender
  //fetch order by Id 
  //coustemer name, email, phone ,orderNumber
  const farmerSales =Array.isArray(allSales) ? allSales.filter((sale) =>
    sale.vendorId === "67a271f39e9263a91e68949f"
  ):[]
  console.log(farmerSales,"i am famer sale hoo")
  return (
    <div>
      {/* Heading
      <PageHeading
        heading="Couponse"
        href="/dashboard/couponse/new"
        linkTittle="Add Coupone"
      /> */}


      {/*Table*/}

      {/* <div className="py-10">
        {
          role === "ADMIN" ?
            (
              <DataTable data={allSales} columns={columns} />
            )
            :
            (
              <DataTable data={farmerSales} columns={columns} />
            )
        }
      </div> */}
    </div>
  )
}

export default Coustemers