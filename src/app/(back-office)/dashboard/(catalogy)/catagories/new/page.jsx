"use client"
import React, { useState } from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/backoffice/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/backoffice/InputForm/SubmitButton'
import TextAreaInput from '@/components/backoffice/InputForm/TextAreaInput'
import { generateSlug } from '@/lib/generateSlug'
import ImageInput from '@/components/backoffice/InputForm/imageInput'
import {makePostRequest, makePutRequest} from '@/lib/apiRequest' 
import SelectInput from '@/components/backoffice/InputForm/selectInput'


function NewCatagory() {
  const [imageUrl, setimageUrl] = useState('');
  const [Loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const markets = [ 
    {
      id : 1,
      title : 'Sproutes Farmer Market'
    },
    {
      id : 2,
      title : 'Sweet Yunms Farmer Market'
    },
    {
      id : 3,
      title : 'Marne Farmer Market'
    },
    {
      id : 4,
      title : 'Smaba-Walfare Farmer Market'
    },
  ]


  {
    /*
    id => aouto ()
    tittle
    slug => aouto()
    description 
    image
    */
  }
  

  async function onSubmite(data) {
    const slug = generateSlug(data.title);
    data.slug = slug
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(setLoading, "api/categories", data, 'Category', reset)
  }

  return (
    <div>
      <FormHeading tittle="New Catagorey" />
      <form
        className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
        onSubmit={handleSubmit(onSubmite)}
      >
        <div className="grid sm:grid-row-2 sm:gap-6">
          <TextInput
            lable='Category Tittle'
            register={register}
            errors={errors}
            className='w-full'
          />
          <SelectInput
            lable='Select Markets'
            name='marketIds'
            register={register}
            errors={errors}
            options={markets}
            className='w-full'
            multiple = {false} 
          />
          <TextAreaInput
            lable='Cetagory Description'
            name='description'
            register={register}
            errors={errors}
          />
        </div>

        <ImageInput
          imageUrl={imageUrl}
          setimageUrl={setimageUrl}
          endPoint='bannerImageUploader'
          lable="Catagorey"
        />

        <SubmitButton
          isLoding={Loading}
          ButtonTittle='Create Catagory'
          loddingButtonTiittle='Creating Category Please Wait'
          endPoint="bannerImageUploader"
        />
      </form>
      {/*
      -id
      -tittle
      -slug
      -description
      -image
      */}
    </div>
  )
}

export default NewCatagory