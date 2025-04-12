import React from 'react'
import BestSellingProducts from './BestSellingProductsCharts'
import WeklySalesChart from './WeklySalesChart'


function DashbordChats(sales) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
         <WeklySalesChart/>
         <BestSellingProducts/>
    </div>
  )
}

export default DashbordChats