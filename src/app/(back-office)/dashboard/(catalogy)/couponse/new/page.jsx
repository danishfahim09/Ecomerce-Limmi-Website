"use client"
import React, { useState } from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/backoffice/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/backoffice/InputForm/SubmitButton'
import Generatecouponcode from '@/lib/Generatecouponcode'
import { makePostRequest } from '@/lib/apiRequest'


function NewCoupone() {
const [Loading, setLoading] = useState(false)
const { register, handleSubmit, reset,watch, formState: { errors } } = useForm()

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
    const couponeCode = Generatecouponcode(data.tittle,data.expirydate)
    data.couponeCode= couponeCode
    console.log(data)
    makePostRequest(setLoading,'api/couponse',data,'Coupon',reset)
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
            name='tittle'
            register={register}
            errors={errors}
          />
           <TextInput
            lable='Coupone Expiry Date '
            name='expirydate'
            type='date'
            register={register}
            errors={errors}
            className='w-full'
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