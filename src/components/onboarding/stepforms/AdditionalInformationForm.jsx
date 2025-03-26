'use client';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import NavButton from '@/components/Checkout/NavButton'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updatOnboardingFormData } from '../../../../redux/slices/onboardingSlice';
import TextInput from '@/components/InputForm/TextInput'
import ImageInput from '@/components/InputForm/imageInput'
import TextAreaInput from '@/components/InputForm/TextAreaInput'


function AdditionalInformationForm() {
  const [imageUrl, setimageUrl] = useState("")

  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.onboarding.currentStep)
  const existingFormData = useSelector((store) => store.onboarding.onboardingFormData)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      ...existingFormData
    }
  });
  const initialPaymentMethod = existingFormData.shippingCost || ""
  const [paymentMethod, setpaymentMethod] = useState(initialPaymentMethod)

  async function processData(data) {
    data.profileImageUrl = imageUrl
    
    //update the checkout data
    dispatch(updatOnboardingFormData(data))
    //update the current state
    dispatch(setCurrentStep(currentStep + 1))
  }
  console.log(paymentMethod)
  return (
    <form onSubmit={handleSubmit(processData)} className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
    >
      <h2 className='text-xl font-semibold mb-4 dark:text-lime-400'>
       Additional Information
      </h2>
      {/* Payment Cost */}

      <div className="grid sm:grid-row-2 sm:gap-6">
        {/*Accare */}
         

        {/*configure this endpoint in the core.js*/}
        <ImageInput
          imageUrl={imageUrl}
          setimageUrl={setimageUrl}
          endPoint='farmerProfileUploader'
          lable="Farmer Profile"
        />

        <TextAreaInput
          lable="Farmer's Payment Terms"
          name='terms'
          register={register}
          errors={errors}
          isrequerd={false}
        />
        <TextAreaInput
          lable="Note's"
          name='notes'
          register={register}
          errors={errors}
          isrequerd={false}
        />
      </div>

      <NavButton />

    </form>
  )
}

export default AdditionalInformationForm

