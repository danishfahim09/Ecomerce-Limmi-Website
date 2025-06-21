
export const dynamic = 'force-dynamic'
import React from 'react'
import Heading from '@/components/backoffice/Heading'
import LargeCard from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import DashbordChats from '@/components/backoffice/DashbordChats'
import CoustomDataTable from '@/components/backoffice/CoustomDataTable'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import UserDashboard from '@/components/backoffice/UserDashboard'
import FarmerDashboard from '@/components/backoffice/FarmerDashboard'
import { getData } from '@/lib/getData'

async function page() {
  const session = await getServerSession(authOptions)
  const role = session?.user?.role;


  const sales = await getData("sales")
  const orders = await getData("orders")
  const products = await getData("products")

  // if (role === "USER") {
  //   return <UserDashboard />
  // }
  // if (role === "FARMER") {
  //   return <FarmerDashboard />
  // }
  // console.log(role)

  return (
    <div>
      <Heading tittle="Dashboard Overview" />
      {/* Large Cards */}
      <LargeCard sales={sales} />
      {/* Small Cards */}
      <SmallCards orders={orders} />
      {/* Charts */}
      <DashbordChats sales={sales} />
      {/* Resent order-Table */}
      <CoustomDataTable />
    </div>
  )
}

export default page