'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentStep } from '../../../../redux/slices/onboardingSlice'
import { makePostRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation'
import { generateUserCode } from '@/lib/generateUserCode'



function Summary({ farmerId }) {
    const [Loading, setLoading] = useState(false)
    const router = useRouter()
    const currentStep = useSelector((store) => store.onboarding.currentStep)
    const dispatch = useDispatch()
    const onboardingFormData = useSelector((store) => store.onboarding.onboardingFormData)
    function handlePravious() {
        dispatch(setCurrentStep(currentStep - 1))
    }

    async function submitData() {
        const data = {
            ...onboardingFormData
        }
        console.log(data,"i am data ")
        const fullname = `${data.firstName} ${data.lastName}`
        const code = generateUserCode("LLF", fullname)
         data.code = code
        data.userId = farmerId
        console.log("i  am a code ", code)
        makePostRequest(setLoading, "api/farmers", data, 'Category', reset, redirect)
        // setimageUrl('')
    }
    return (
        <div className="my-6">
            <h2 className='text-xl font-semibold mb-4 dark:text-lime-400'>
                Order Summary
            </h2>
            <div className="flex">
                <h2>Here are your detaile</h2>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <button onClick={handlePravious}
                    type='button'
                    className='inline-flex  items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium 
                    text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200
                     dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600
                      dark:hover:bg-lime-900'>
                    <ChevronLeft className='w-5 h-5 mr-2' />
                    <span>Pravious</span>
                </button>
                {
                    Loading ?
                        (<button
                            disabled
                            onClick={submitData}
                            className='inline-flex  items-center px-6 py-3 mt-4
                                    sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4
                                    focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-900'>
                            <ChevronRight className='w-5 h-5 mr-2' />
                            <span>Proceeding Please Wait...</span>
                        </button>)
                        :
                        (<button
                            onClick={submitData}
                            className='inline-flex  items-center px-6 py-3 mt-4
                                    sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4
                                    focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-900'>
                            <span>Submite Data</span>
                            <ChevronRight className='w-5 h-5 mr-2' />
                        </button>)
                }

            </div>
        </div>
    )
}

export default Summary