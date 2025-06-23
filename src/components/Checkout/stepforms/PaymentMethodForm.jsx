'use client';
import React, { useState } from 'react'

import { useForm } from 'react-hook-form';
import NavButton from '@/components/Checkout/NavButton'
import { Circle, CreditCard, HeartHandshakeIcon, Truck } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateCheckoutFormData } from '../../../../redux/slices/checkoutSlice';

function PaymentMethodForm() {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.checkout.currentStep)
  const existingFormData = useSelector((store) => store.checkout.checkoutFormData)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      ...existingFormData
    }
  });
  const initialPaymentMethod = existingFormData.shippingCost || ""
  const [paymentMethod, setpaymentMethod] = useState(initialPaymentMethod)

  async function processData(data) {
    data.paymentMethod = paymentMethod
    console.log(data)

    //update the checkout data
    dispatch(updateCheckoutFormData(data))
    //update the current state
    dispatch(setCurrentStep(currentStep + 1))
  }
  console.log(paymentMethod)
  return (
    <form onSubmit={handleSubmit(processData)} className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
    >
      <h2 className='text-xl font-semibold mb-4 dark:text-lime-400'>
        Payment Method
      </h2>
      {/* Payment Cost */}
      <div className="col-span-4">
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Which Payment Method Do You You prefer ?
        </h3>
        <ul class="grid w-full gap-6 md:grid-cols-2">
          <li>
            <input
              type="radio"
              id="hosting-small"
              name="hosting"
              value="Cash On Delivery"
              className="hidden peer"
              onChange={(e) => { setpaymentMethod(e.target.value) }}
            />
            <label htmlFor="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              {/* Design */}
              <div className="flex gap-4 items-center">
                <HeartHandshakeIcon className='w-8 h-8 ms-3 flex-shrink-0' />
                <p>Cash On Delivery </p>
              </div>
              <Circle className='w-5 h-5 ms-3 flex-shrink-0' />
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-big"
              name="hosting"
              value="Credit Card"
              class="hidden peer" required
              onChange={(e) => { setpaymentMethod(e.target.value) }}
            />
            <label

              htmlFor="hosting-big"
              class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"

            >
              <div className="flex gap-6 items-center">
                <CreditCard
                  className='w-8 h-8 ms-3 flex-shrink-0' />
                <p>Credit Card</p>
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

export default PaymentMethodForm

