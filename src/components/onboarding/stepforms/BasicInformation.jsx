'use client';
import React from 'react'

import TextInput from '@/components/InputForm/TextInput'
import { useForm } from 'react-hook-form';
import NavButton from '@/components/Checkout/NavButton'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updatOnboardingFormData } from '../../../../redux/slices/onboardingSlice';
import { useSession } from 'next-auth/react';


function BasicInformation() {
  const currentStep = useSelector((store) => store.onboarding.currentStep)
  const existingFormData = useSelector((store) => store.onboarding.onboardingFormData)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      ...existingFormData
    }
  });

  const dispatch = useDispatch()
  async function processData(data) {

      //update the checkout data
      dispatch(updatOnboardingFormData(data))
      //update the current state
      dispatch(setCurrentStep(currentStep + 1))
      console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(processData)} className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
    >
      <h2 className='text-xl font-semibold mb-4 dark:text-lime-400'>Basic Information</h2>
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
          lable='Phone Number'
          name='phone'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Farmer Physical Address'
          name='physicalAddress'
          type='text'
          register={register}
          errors={errors}
        />
         <TextInput
          lable='Farmer Contact Person'
          name='contactPerson'
          type='text'
          register={register}
          errors={errors}
        />
         <TextInput
          lable='Farmers Contact Persons Phone'
          name='contactPersonPhone'
          type='text'
          register={register}
          errors={errors}
        />
       
      </div>
      <NavButton />

    </form>
  )
}

export default BasicInformation