"use client"
import React, { useState } from 'react'
import TextInput from '@/components/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/InputForm/SubmitButton'
import TextAreaInput from '@/components/InputForm/TextAreaInput'
import { generateSlug } from '@/lib/generateSlug'
import ImageInput from '@/components/InputForm/imageInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import SelectInput from '@/components/InputForm/selectInput'
import { useRouter } from 'next/navigation';
import ArrayitemInput from '@/components/InputForm/ArrayitemInput'
import ToggleInput from '@/components/InputForm/ToogleInput'
import { generateUserCode } from '@/lib/generateUserCode'

function NewProductForm({ catagories, farmers, updateData = {} }) {
  const initialImageUrl = updateData?.imageUrl ?? ""
  const initialTags = updateData?.tags ?? []
  const id = updateData?.id ?? ""
  const [imageUrl, setimageUrl] = useState(initialImageUrl);
  const [tags, settags] = useState(initialTags)
  const [Loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
    defaultValues: {
      isWholeSale: false,
      isActive: true,
      ...updateData
    }
  });

  const router = useRouter();
  function redirect() {
    router.push('/dashboard/products')
  }

  const isActive = watch("isActive")
  const isWholeSale = watch("isWholeSale")

  {/* Onsubmited All Data OF New Product Page */ }
  async function onSubmite(data) {
    const slug = generateSlug(data.title);
    const productCode = generateUserCode("LLP", data.title)
    data.productCode = productCode
    data.tags = tags
    data.slug = slug
    data.qty = 1
    data.imageUrl = imageUrl
    console.log(data)

    if (id) {
      //Make Put  Request Update
      data.id = id
      makePutRequest(setLoading, `api/products/${id}`, data, 'Product', reset, redirect)
      //console.log("Update Request", data)
    } else {
      //Make Post Request (Create)
      makePostRequest(setLoading, "api/products", data, 'Product', reset, redirect)
    }

    //setimageUrl("")
  }

  return (


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
          name="barCode"
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Product Price (Before Discount)'
          name="productPrice"
          type="number"
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Product Sale Price (Discount)'
          type="number"
          name="salePrice"
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Product Stock'
          type="number"
          name="productStock"
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Unit of Measurement (eg kilogram)'
          name="unit"
          register={register}
          errors={errors}
          className='w-full'
        />

        <SelectInput
          lable='Select category'
          name='categoryId'
          register={register}
          errors={errors}
          options={catagories}
          className='w-full'
        />
        <SelectInput
          lable='Select Farmer'
          name='farmerId'
          register={register}
          errors={errors}
          options={farmers}
          className='w-full'
        />
        <ToggleInput
          label="Supports WholeSale Selling"
          name="isWholeSale"
          trueTitle="Supported"
          falseTitle="Not Supported"
          register={register}
        />
        {isWholeSale && (
          <>
            <TextInput
              lable='Whole Sale Price'
              type="number"
              name="wholeSalePrice"
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              lable='Minimum Whole Qty'
              type="number"
              name="wholeSaleQty"
              register={register}
              errors={errors}
              className='w-full'
            />
          </>
        )}

      </div>
      <ImageInput
        imageUrl={imageUrl}
        setimageUrl={setimageUrl}
        endPoint='ProductImageUploader'
        lable="Product Image "
      />

      {/* Tags Page */}
      <ArrayitemInput items={tags} setitems={settags} />

      <TextAreaInput
        lable='Product Description'
        name='description'
        register={register}
        errors={errors}
      />
      <ToggleInput
        label="Supports WholeSale Selling"
        name="isActive"
        trueTitle="Supported"
        falseTitle="Not Supported"
        register={register}
      />
      <SubmitButton
        isLoding={Loading}
        ButtonTittle={id ? 'Update Product' : 'Create Product'}
        loddingButtonTiittle={`${id ? 'Updating' : 'Creating'} Product Please Wait...`}
        endPoint="ProductImageUploader"
      />
    </form>
  )
}

export default NewProductForm