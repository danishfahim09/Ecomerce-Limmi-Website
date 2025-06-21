import React from 'react'
import NewTranningForm from '@/components/backoffice/NewTrainningForm'
import { getData } from '@/lib/getData'

async function UpdateTrainig({ params: { id } }) {
    const training  =await getData(`training/${id}`)
    //console.log(training)
  const catagoriesData = await getData("categories")
  const categories = catagoriesData?.map((f) => {
    return {
      id: f.id,
      title: f.title
    }
  })
  return <NewTranningForm  updateData={training} catagories={categories} />

}

export default UpdateTrainig