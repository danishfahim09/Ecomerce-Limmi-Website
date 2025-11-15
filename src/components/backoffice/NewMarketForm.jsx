"use client"
import React, { useState } from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/InputForm/SubmitButton'
import TextAreaInput from '@/components/InputForm/TextAreaInput'
import { generateSlug } from '@/lib/generateSlug'
import ImageInput from '@/components/InputForm/imageInput'
import { makePostRequest } from '@/lib/apiRequest'
import SelectInput from '@/components/InputForm/selectInput'
import ToogleInput from '@/components/InputForm/ToogleInput'
import { useRouter } from 'next/navigation'
//import { useRouter } from 'next/router'


function NewMarketForm({catagories}) {
  const [logoUrl, setlogoUrl] = useState('');
  const [Loading, setLoading] = useState(false);
 
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
  const router = useRouter()
  function redirect() {
    router.push('/dashboard/markets')
  }

  async function onSubmite(data) {
    const slug = generateSlug(data.title);
    data.slug = slug
    data.logoUrl = logoUrl
    console.log(data)
    makePostRequest(setLoading, "api/markets", data, 'Market', reset,redirect)
  }

  return (
    <div>
      <FormHeading tittle="New Market" />
      <form
        className="w-full max-w-4xl mt-8 mx-auto h-auto bg-card border border-border p-4
         sm:p-6 md:p-8 rounded-lg shadow-md dark:shadow-lg my-5"
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
          options={catagories}
          multiple={true}
          />
          <ImageInput
            logoUrl={logoUrl}
            setlogoUrl={setlogoUrl}
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

export default NewMarketForm