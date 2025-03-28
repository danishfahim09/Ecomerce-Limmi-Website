import React from 'react'
import PageHeading from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from "@/lib/getData"
import { columns } from './columns'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

async function page() {
  const session =await getServerSession(authOptions)
  const id = session?.user?.id
  const role = session?.user?.role
  const allcoupones = await getData('couponse')
  const farmerCoupones = allcoupones.filter((coupone) =>
    coupone.venderId === id
  )
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
        {
          role === "ADMIN" ? (
            <DataTable data={allcoupones} columns={columns} />
          ) :
            (
              <DataTable data={farmerCoupones} columns={columns} />
            )
        }

      </div>
    </div>
  )
}

export default page