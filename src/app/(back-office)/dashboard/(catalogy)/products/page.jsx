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
  if (!session) {
    return null
  }
  //console.log(session, "Session Data");
  const role = session?.user?.role

  const allProducts = await getData('products')
  //console.log(allProducts,"this is my all products ")
  const id = session?.user?.id



  const farmerProduct = Array.isArray(allProducts) ? allProducts.filter((product) => product.userId === id) : []
  //67b2f4591cda9532b58b9a05
  //console.log(allProducts)
  console.log(farmerProduct, "i  am danish")
  console.log(id, "i am a id ")
  return (
    <div>
      {/*Heading*/}
      <PageHeading
        heading="Products"
        href="/dashboard/products/new"
        linkTittle="Add Product"
      />

      {/*Table*/}
      <div className="py-10">
        {
          role === "ADMIN" ? (
            <DataTable data={allProducts} columns={columns} />
          ) :
            (
              <DataTable data={farmerProduct} columns={columns} />
            )
        }

      </div>
    </div>
  )
}

export default page