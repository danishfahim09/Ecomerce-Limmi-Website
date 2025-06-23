'use client';
import React, { useState } from 'react'

import TextInput from '@/components/InputForm/TextInput'
import { useForm } from 'react-hook-form';
import NavButton from '@/components/Checkout/NavButton'
import { Circle, Truck } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateCheckoutFormData } from '../../../../redux/slices/checkoutSlice';


function ShippingDetailesForm() {
  const dispatch = useDispatch()
  const currentStep = useSelector((store) =>   store.checkout.currentStep  )
  const existingFormData = useSelector((store) => store.checkout.checkoutFormData)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      ...existingFormData
    }
  });
  const initialShippingCost = existingFormData.shippingCost || ""
  const [shippingCost, setshippingCost] = useState(initialShippingCost)

  async function processData(data) {
    data.shippingCost = shippingCost
    console.log(data)
    //update the checkout data
    dispatch(updateCheckoutFormData(data))
    //update the current state
    dispatch(setCurrentStep(currentStep + 1))
  }
  //console.log(shippingCost)
  return (
    <form onSubmit={handleSubmit(processData)} className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
    >
      <h2 className='text-xl font-semibold mb-4 dark:text-lime-400'> Shiping Detaile </h2>
      <div className="grid sm:grid-row-2 sm:gap-6">
        <TextInput
          lable='Street Address'
          name='streetAddress'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='City '
          name='city'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Country'
          name='country'
          register={register}
          errors={errors}

        />
        <TextInput
          lable='District'
          name='district'
          register={register}
          errors={errors}
          className='w-full'
        />
      </div>
      {/* Shipping Cost */}

      <div className="col-span-4">
        <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Shipping Cost
        </h3>
        <ul class="grid w-full gap-6 md:grid-rows-2">
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="8"
              class="hidden peer"
              onChange={(e) => { setshippingCost(e.target.value) }}
            />
            <label htmlFor="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              {/* Design */}
              <div className="flex gap-2 items-center">
                <Truck className='w-8 h-8 ms-3 flex-shrink-0' />
                <div className="">
                  <p>UPS</p>
                  <p>Delivery Cost : $8</p>
                </div>
              </div>
              <Circle className='w-5 h-5 ms-3 flex-shrink-0' />
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-big"
              name="hosting"
              value="20"
              class="hidden peer" required
              onChange={(e) => { setshippingCost(e.target.value) }}
            />
            <label

              htmlFor="hosting-big"
              class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"

            >
              <div className="flex gap-2 items-center">
                <Truck className='w-8 h-8 ms-3 flex-shrink-0' />
                <div className="">
                  <p>UPS</p>
                  <p>Delivery Cost : $8</p>
                </div>
              </div>
              <Circle className='w-5 h-5 ms-3 flex-shrink-0' />
            </label>
          </li>
        </ul>
      </div>

      <NavButton />

    </form>
  )
}

export default ShippingDetailesForm