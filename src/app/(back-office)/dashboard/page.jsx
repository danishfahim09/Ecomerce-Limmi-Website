
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

async function page() {
  const session = await getServerSession(authOptions)
  const role = session?.user?.role;
  if (role === "USER") {
    return <UserDashboard />
  }
  if (role === "FARMER") {
    return <FarmerDashboard />
  }
  
  return (
    <div>
      <Heading tittle="Dashboard Overview" />
      {/* Large Cards */}
      <LargeCard />
      {/* Small Cards */}
      <SmallCards />
      {/* Charts */}
      <DashbordChats />
      {/* Resent order-Table */}
      <CoustomDataTable />
    </div>
  )
}

export default page