"use client"
import React from 'react'
import OrderSummary from '@/components/Checkout/stepforms/OrderSummary'
import PaymentMethodForm from '@/components/Checkout/stepforms/PaymentMethodForm'
import PersonalDetaileForms from '@/components/Checkout/stepforms/PersonalDetaileForms'
import ShippingDetailesForm from '@/components/Checkout/stepforms/ShippingDetailesForm'
import { useSelector } from 'react-redux'

function StepForm() {
    const currentStep = useSelector((store)=>store.checkout.currentStep)
    function renderFormByStep(step) {
        if (step === 1) {
            return  <PersonalDetaileForms/>
        } else if (step === 2) {
            return <ShippingDetailesForm/>
        } else if (step === 3) {
            return <PaymentMethodForm/>
        } else if (step === 4) {
            return <OrderSummary/>
        }
    }
    return <div>{renderFormByStep(currentStep)}</div>

}

export default StepForm