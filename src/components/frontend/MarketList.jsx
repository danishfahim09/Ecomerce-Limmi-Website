import React from 'react'
import MarketCarousole from "@/components/frontend/MarketCarousole"
import {getData} from '@/lib/getData'

async function MarketList() {
  const markets =await getData('markets')
  
  return (
    <div className='text-white py-16  '>

      {/*Market Page Carasoule*/}
      <div className="bg-slate-50 text-center rounded-lg p-4 dark:bg-lime-900 border border-gray-200 dark:border-slate-600 shadow-lg dark:shadow-sm shadow-gray-300 dark:shadow-gray-500"> 
        <h2 className='text-slate-900 text-2xl dark:text-slate-50  mb-4 bold'>Shop By Market</h2>
        <MarketCarousole markets={markets}/>
      </div>
    </div>
  )
}

export default MarketList