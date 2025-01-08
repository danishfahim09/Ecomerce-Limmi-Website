"use client"
import React, { useState } from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/backoffice/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/backoffice/InputForm/SubmitButton'
import TextAreaInput from '@/components/backoffice/InputForm/TextAreaInput'
import { generateSlug } from '@/lib/generateSlug'
import ImageInput from '@/components/backoffice/InputForm/imageInput'
import { makePostRequest } from '@/lib/apiRequest'
import SelectInput from '@/components/backoffice/InputForm/selectInput'
import ToogleInput from '@/components/backoffice/InputForm/ToogleInput'
//import { useRouter } from 'next/router'


function NewCatagory() {
  const [logoUrl, setlogoUrl] = useState('');
  const [Loading, setLoading] = useState(false);
  const categories =[
    {
      id : 1,
      title : 'Category 1'
    },
    {
      id : 2,
      title : 'Category 2'
    },
    {
      id : 1,
      title : 'Category 3'
    }
]
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

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
    data.logoUrl = logoUrl
    console.log(data)
    makePostRequest(setLoading, "api/categories", data, 'Category', reset,)
  }

  return (
    <div>
      <FormHeading tittle="New Market" />
      <form
        className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
        onSubmit={handleSubmit(onSubmite)}
      >
        <div className="grid sm:grid-row-2 sm:gap-6">
          <TextInput
            lable='Market Tittle'
            name='title'
            register={register}
            errors={errors}
            className='w-full'
          />
          <SelectInput 
          lable='Select categories'
          name='categoryIds'
          register={register}
          errors={errors}
          className='w-full'
          options={categories}
          multiple={false}
          />
          <ImageInput
            imageUrl={logoUrl}
            setimageUrl={setlogoUrl}
            endPoint='marketImageUploader'
            lable="Market Logo"
          />
          <TextAreaInput
            lable='Market Description'
            name='description'
            register={register}
            errors={errors}
          />

          <ToogleInput
            label="Market Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
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