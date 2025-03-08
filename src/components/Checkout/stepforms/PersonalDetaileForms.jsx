'use client';
import React from 'react'

import TextInput from '@/components/InputForm/TextInput'
import TooggleInput from '@/components/InputForm/ToogleInput'
import { useForm } from 'react-hook-form';
import NavButton from '@/components/Checkout/NavButton'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateCheckoutFormData } from '../../../../redux/slices/checkoutSlice';
import { useSession } from 'next-auth/react';


function PersonalDetaileForms() {
  const { data: session, status } = useSession()
  const userId = session?.user?.id
  const currentStep = useSelector((store) => store.checkout.currentStep)
  const existingFormData = useSelector((store) => store.checkout.updateCheckoutFormData)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      ...existingFormData
    }
  });


  const dispatch = useDispatch()
  async function processData(data) {
    if (userId) {
      data.userId = userId
      //update the checkout data
      dispatch(updateCheckoutFormData(data))
      //update the current state
      dispatch(setCurrentStep(currentStep + 1))
      console.log(data)
    }

  }
  return (
    <form onSubmit={handleSubmit(processData)} className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
    >
      <h2 className='text-xl font-semibold mb-4 dark:text-lime-400'> Personal Detaile </h2>
      <div className="grid sm:grid-row-2 sm:gap-6">
        <TextInput
          lable='First Name'
          name='firstName'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Last Name'
          name='lastName'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Email Address'
          name='email'
          type='email'
          register={register}
          errors={errors}

        />
        <TextInput
          lable='Phone Number'
          name='phone'
          register={register}
          errors={errors}
          className='w-full'
        />
      </div>
      <NavButton />

    </form>
  )
}

export default PersonalDetaileForms