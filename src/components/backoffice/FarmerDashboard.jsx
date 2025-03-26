import { authOptions } from '@/lib/authOptions'
import { getData } from '@/lib/getData'
import { scales } from 'chart.js'
import { getServerSession } from 'next-auth'
import React from 'react'
import OverveiwCards from '@/components/backoffice/Farmer/OverveiwCards'

async function FarmerDashboard() {
  const session = await getServerSession(authOptions)
  const user = session?.user
  const { name, email, id, role, emailVerified } = user
  const sales = await getData("sales")
  const salesById = sales.filter((sale) => sale.vendorId === id)
  const products = await getData("products")
  const productsById = products.filter((product) => product.userId === id)
  console.log(salesById, "this is my sale id")
  console.log(productsById, "this is my productsById id")

  return (
    <div>
      <OverveiwCards products={productsById} sales={salesById}/>
    </div>
  )
}

export default FarmerDashboard