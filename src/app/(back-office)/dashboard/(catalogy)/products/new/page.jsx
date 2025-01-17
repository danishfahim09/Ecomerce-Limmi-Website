
import NewProductForm from '@/components/backoffice/NewProductForm'
import {getData} from '@/lib/getData'

import React from 'react'

export default async function NewProduct() {
  //Catagories and Farmer 
  const categoriesData = await getData("categories")
  const usersData = await getData("users")
  const farmerData = usersData.filter((data)=>data.role==="FARMER")
  const farmers = usersData.map((farmer)=>{
    return{
      id:farmer.id,
      title:farmer.name
    }
  })
  const catagories = categoriesData.map((category)=>{
    return{
      id:category.id,
      title:category.title
    }
  })
  
  return <NewProductForm catagories={catagories} farmers={farmers}/>
};
