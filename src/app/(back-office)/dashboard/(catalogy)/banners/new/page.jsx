'use client';
import React, { useState } from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/backoffice/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/backoffice/InputForm/SubmitButton'
import { makePostRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation';
import ImageInput from '@/components/backoffice/InputForm/imageInput'
import ToogleInput from '@/components/backoffice/InputForm/ToogleInput'

function NewCoupone() {
  const [Loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const [imageUrl, setimageUrl] = useState('');

  const router = useRouter();
  function redirect() {
    router.push('/dashboard/couponse')
  }
  const isActive = watch("isActive");
  async function onSubmite(data) {
    {
      /*
      id => aouto ()
      Coupone Name
      code => aouto()
      validity data 
      image
      */
    }
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(setLoading, 'api/banner', data, 'Banner', reset, redirect);
  }

  return (
    <div>

      {/* Heading */}
      <FormHeading tittle="New Coupone" />
      <form
        className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
        onSubmit={handleSubmit(onSubmite)}
      >
        <div className="grid sm:grid-row-2 sm:gap-6">
          <TextInput
            lable='Banner Tittle'
            name='title'
            register={register}
            errors={errors}
          />
          <TextInput
            lable='Banner Link'
            name='link'
            register={register}
            errors={errors}
            className='w-full'
          />
          <ImageInput
            imageUrl={imageUrl}
            setimageUrl={setimageUrl}
            endPoint='bannerImageUploader'
            lable="Banner"
          />
          <ToogleInput
            label="Publish your Product"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoding={Loading}
          ButtonTittle='Create Banner'
          loddingButtonTiittle='Creating Banner Please Wait'
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

export default NewCoupone