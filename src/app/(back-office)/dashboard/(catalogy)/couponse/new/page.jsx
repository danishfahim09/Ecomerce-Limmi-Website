'use client';
import React, { useState } from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/backoffice/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/backoffice/InputForm/SubmitButton'
import Generatecouponcode from '@/lib/Generatecouponcode'
import { makePostRequest } from '@/lib/apiRequest'
import generateIsoFormattedDate from '@/lib/GenerateISOStringFormatedDate'
import { useRouter } from 'next/navigation';
import TooggleInput from '@/components/backoffice/InputForm/ToogleInput'

function NewCoupone() {
  const [Loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
      defaultValues: {
        isActive: true,
      },
    });

    const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push('/dashboard/couponse')
  }
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
    const GenerateCouponCode = Generatecouponcode(data.title, data.expiryDate)
    data.couponCode = GenerateCouponCode
    const isoFormatedDate = generateIsoFormattedDate(data.expiryDate)
    data.expiryDate = isoFormatedDate
    console.log(data)
    makePostRequest(setLoading, 'api/couponse', data, 'Coupon', reset, redirect);
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
            lable='Coupone Tittle'
            name='title'
            register={register}
            errors={errors}
          />
          <TextInput
            lable='Coupone Expiry Date '
            name='expiryDate'
            type='date'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TooggleInput
            label="Publish your Coupone"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoding={Loading}
          ButtonTittle='Create Coupone'
          loddingButtonTiittle='Creating Coupone Please Wait'
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