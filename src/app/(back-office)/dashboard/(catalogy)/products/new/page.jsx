"use client"
import React, { useState } from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/backoffice/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/backoffice/InputForm/SubmitButton'
import TextAreaInput from '@/components/backoffice/InputForm/TextAreaInput'
import { generateSlug } from '@/lib/generateSlug'
import ImageInput from '@/components/backoffice/InputForm/imageInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import SelectInput from '@/components/backoffice/InputForm/selectInput'

import ArrayitemInput from '@/components/backoffice/InputForm/ArrayitemInput'


function NewProduct() {
  const [imageUrl, setimageUrl] = useState('');
  const [tags, settags] = useState(["tag1", "tag2",])
  const [Loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  {/* All Farmers*/ }
  const Farmers = [
    {
      id: 1,
      title: 'Farmer 1'
    },
    {
      id: 2,
      title: 'Farmer 1'
    },
    {
      id: 3,
      title: 'Farmer 1'
    },
  ]

  {/* Categories */ }
  const category = [
    {
      id: 1,
      title: 'Categrie 1'
    },
    {
      id: 2,
      title: 'Categrie 1'
    },
    {
      id: 3,
      title: 'Categrie 1'
    },
  ]

  {/* Onsubmited All Data OF New Product Page */ }
  async function onSubmite(data) {
    const slug = generateSlug(data.title);
    data.tags = tags
    data.slug = slug
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(setLoading, "api/products", data, 'Product', reset)
    setimageUrl("")
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
            lable='Product Tittle'
            name="title"
            register={register}
            errors={errors}

          />
          <TextInput
            lable='Product Sku'
            name="sku"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            lable='Product BarCode'
            name="barcode"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            lable='Product Price (Before Discount)'
            name="productprice"
            type="number"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            lable='Product Sale Price (Discount)'
            type="number"
            name="saleprice"
            register={register}
            errors={errors}
            className='w-full'
          />

          <SelectInput
            lable='Select category'
            name='categoryId'
            register={register}
            errors={errors}
            options={category}
            className='w-full'
          />
          <SelectInput
            lable='Select Farmer'
            name='farmerId'
            register={register}
            errors={errors}
            options={Farmers}
            className='w-full'
          />
        </div>
        <ImageInput
          imageUrl={imageUrl}
          setimageUrl={setimageUrl}
          endPoint='ProductImageUploader'
          lable="Product Image "
        />

        {/* Tags Page */}
        <ArrayitemInput items={tags} setitems={settags}/>

        <TextAreaInput
          lable='Product Description'
          name='description'
          register={register}
          errors={errors}
        />

        {/* Submited Btn */}
        <SubmitButton
          isLoding={Loading}
          ButtonTittle='Create Catagory'
          loddingButtonTiittle='Creating Producr Please Wait'
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

export default NewProduct