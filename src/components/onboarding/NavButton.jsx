import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentStep } from '../../../redux/slices/checkoutSlice'

function NavButton() {
    const currentStep = useSelector((store) => store.onbording.currentStep)
    const dipatch = useDispatch()
    function handlePravious() {
        dipatch(setCurrentStep(currentStep - 1))
    }
    return (
        <div className='flex justify-between items-center'>
            {currentStep > 1 && (
                <button onClick={handlePravious}
                    type='button'
                    className='inline-flex  items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium 
                    text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200
                     dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600
                      dark:hover:bg-lime-900'>
                    <ChevronLeft className='w-5 h-5 mr-2' />
                    <span>Pravious</span>
                </button>
            )}
            <button
                type='submite'
                className='inline-flex  items-center px-6 py-3 mt-4
            sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4
            focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-900'>
                <ChevronRight className='w-5 h-5 mr-2' />
                <span>Next</span>
            </button>

        </div>
    )
}

export default NavButton