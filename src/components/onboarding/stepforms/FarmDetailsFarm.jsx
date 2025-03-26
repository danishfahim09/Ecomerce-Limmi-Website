'use client';
import React, { useState } from 'react'
import ArrayitemInput from '@/components/InputForm/ArrayitemInput'
import TextInput from '@/components/InputForm/TextInput'
import { useForm } from 'react-hook-form';
import NavButton from '@/components/Checkout/NavButton'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updatOnboardingFormData } from '../../../../redux/slices/onboardingSlice';


function FarmDetailsFarm() {
  const dispatch = useDispatch()
  const currentStep = useSelector((store) => store.onboarding.currentStep)
  const existingFormData = useSelector((store) => store.onboarding.onboardingFormData)
  console.log(existingFormData, "existingFormData")
  const [products, setProducts] = useState([]);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      ...existingFormData
    }
  });
  // const initialShippingCost = existingFormData.shippingCost || ""
  // const [shippingCost, setshippingCost] = useState(initialShippingCost)

  async function processData(data) {
    //update the checkout data
    data.product = products
    dispatch(updatOnboardingFormData(data))
    //update the current state
    dispatch(setCurrentStep(currentStep + 1))
  }
  //console.log(shippingCost)
  return (
    <form onSubmit={handleSubmit(processData)} className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
    >
      <h2 className='text-xl font-semibold mb-4 dark:text-lime-400'> Farm Detaile</h2>
      <div className="grid sm:grid-row-2 sm:gap-6">
        <TextInput
          lable='what Is The Size of Your  Land In Access'
          name='landSize'
          type='number'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='what Is The Main Crop You Cultivate'
          name='mainCrop'
          register={register}
          errors={errors}
          className='w-full'
        />


      </div>
      {/* Shipping Cost */}

      <div className="mt-5">

        <ArrayitemInput
          items={products}
          setitems={setProducts}
          itemTitle="Product"
        />
      </div>

      <NavButton />

    </form>
  )
}

export default FarmDetailsFarm