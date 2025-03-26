import React from 'react'
import Steps from '@/components/Checkout/Steps'
import CartBanner from '@/components/Checkout/CartBanner'
import StepForm from '@/components/Checkout/StepForm'

function page() {
    const steps = [
        {
            number: 1,
            title: "Personal Information",
        },
        {
            number: 2,
            title: "Production detail",
        },
        {
            number: 3,
            title:   "Other Details",
        },
        {
            number: 4,
            title:  "Order Summary",
        },
    ];
    return (
        <div className='bg-slate-200 dark:bg-slate-950 min-h-screen'>
            <div className="max-w-3xl my-6 mx-auto   border border-slate-700 p-6 rounded-lg">
                {/* Steps */}
                <Steps steps={steps} />
                <div className='w-full  p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
                    {/* Banner */}
                    <CartBanner />

                    {/* Form */}
                    <StepForm />
                </div>
                {/* Forms */}
            </div>
        </div>
    )
}

export default page