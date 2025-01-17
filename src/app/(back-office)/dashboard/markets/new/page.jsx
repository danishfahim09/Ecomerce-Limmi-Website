
import React from 'react'
import NewMarketForm from '@/components/backoffice/NewMarketForm'
import { getData } from '@/lib/getData'
//import { useRouter } from 'next/router'


async function NewMarket() {
   
    const categoriesData = await getData("categories")

    const catagories = categoriesData.map((farmerData)=>{
      return{
        id:farmerData.id,
        title:farmerData.title
      }
    })

  return (
    <NewMarketForm catagories={catagories}/>
  )
}

export default NewMarket