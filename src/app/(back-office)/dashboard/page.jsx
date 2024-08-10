import React from 'react'
import Heading from '../../components/backoffice/Heading'
import LargeCard from '../../components/backoffice/LargeCards'
import SmallCards from '../../components/backoffice/SmallCards'
import DashbordChats from '../../components/backoffice/DashbordChats'

function page() {
  return (
    <div>
      <Heading tittle="Dashboard Overview"/>
      {/* Large Cards */}
      <LargeCard/>
      {/* Small Cards */}
      <SmallCards/>
      {/* Charts */}
      <DashbordChats/>
      {/* Resent order-Table */}
    </div>
  )
}

export default page