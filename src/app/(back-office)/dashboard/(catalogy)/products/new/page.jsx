
import NewProductForm from '@/components/backoffice/NewProductForm'
import { getData } from '@/lib/getData'
import FormHeading from '@/components/backoffice/FormHeader'

import React from 'react'

export default async function NewProduct() {

 

  //Catagories and Farmer 
  const categoriesData = await getData("categories")
  const usersData = await getData("users")
  const farmerData = usersData.filter((data) => data.role === "FARMER")
  const farmers = farmerData.map((farmer) => {
    return {
      id: farmer.id,
      title: farmer.name
    }
  })
  
  const catagories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title
    }
  })

  return (
    <div>
      <FormHeading tittle="New Product" />
      <NewProductForm catagories={catagories} farmers={farmers} />
    </div>
  )
};
