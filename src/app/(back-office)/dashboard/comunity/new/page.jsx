export const dynamic = 'force-dynamic'
import React from 'react'
import NewTranningForm from '@/components/backoffice/NewTrainningForm'
import { getData } from '@/lib/getData'

async function NewTrainnig() {
  const catagoriesData = await getData("categories")
  const categories = catagoriesData?.map((f) => {
    return {
      id: f.id,
      title: f.title
    }
  })
  return <NewTranningForm catagories={categories}/>

}

export default NewTrainnig