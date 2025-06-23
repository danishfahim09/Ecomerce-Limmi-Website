export const dynamic = 'force-dynamic'
import React from 'react'
import PageHeading from '@/components/backoffice/PageHeader'
import DataTable from '@/components/data-table-components/DataTable'
import { getData } from "@/lib/getData"
import { columns } from './columns'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

async function page() {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id
  const role = session?.user?.role
  const allcoupones = await getData('couponse')
  const farmerCoupones = Array.isArray(allcoupones) ? allcoupones.filter((coupone) =>
    coupone.venderId === id
  ) : []

  const categories = await getData('categories')
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
        <DataTable data={categories} columns={columns} />
        {/* {
          role === "ADMIN" ? (
            <DataTable data={allcoupones} columns={columns} />
          ) :
            (
              <DataTable data={farmerCoupones} columns={columns} />
            )
        } */}

      </div>
    </div>
  )
}

export default page