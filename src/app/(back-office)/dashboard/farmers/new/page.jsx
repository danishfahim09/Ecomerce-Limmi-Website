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
  const categories = [
    {
      id: 1,
      title: 'Category 1'
    },
    {
      id: 2,
      title: 'Category 2'
    },
    {
      id: 1,
      title: 'Category 3'
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
    const code = generateSlug(data.title);
    data.slug = slug
    data.logoUrl = logoUrl
    console.log(data)
    makePostRequest(setLoading, "api/categories", data, 'Category', reset,)
  }

  return (
    <div>
      <FormHeading tittle="New Farmer" />
      <form
        className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
        onSubmit={handleSubmit(onSubmite)}
      >
        <div className="grid sm:grid-row-2 sm:gap-6">
          <TextInput
            lable="Farmer's Full Name"
            name='title'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            lable='Farmer Phone'
            name='phone'
            type='tel'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            lable='Farmer Email Address'
            name='email'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            lable="Farmer's Physical Edress"
            name='physicalAddress'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            lable="Farme's Contact Preson"
            name='contactPerson'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            lable='Farmer Contact Preson Phone'
            name='contactPresonPhone'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            lable="Farmer's Payment Terms"
            name='terms'
            register={register}
            errors={errors}
            className='w-full'

          />
          <TextInput
            lable="Note's"
            name='note'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextAreaInput
            lable="Note's"
            name='note'
            register={register}
            errors={errors}
            isrequerd={false}
          />
          <ToogleInput
            label="Farmer Status"
            name="isActive"
            trueTitle={true}
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoding={Loading}
          ButtonTittle='Create Farmer'
          loddingButtonTiittle='Creating Farmer Please Wait'
          //endPoint="bannerImageUploader"
        />
      </form>
    </div>
  )
}

export default NewCatagory