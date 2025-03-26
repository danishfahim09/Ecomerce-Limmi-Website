"use client"
import React from 'react'
import Summary from '@/components/onboarding/stepforms/Summary'
import AdditionalInformationForm from '@/components/onboarding/stepforms/AdditionalInformationForm'
import BasicInformation from '@/components/onboarding/stepforms/BasicInformation'
import FarmDetailsFarm from '@/components/onboarding/stepforms/FarmDetailsFarm'
import { useSelector } from 'react-redux'

function StepForm({farmerId}) {
    const currentStep = useSelector((store)=>store.onboarding.currentStep)
    function renderFormByStep(step) {
        if (step === 1) {
            return  <BasicInformation/>
        } else if (step === 2) {
            return <FarmDetailsFarm/>
        } else if (step === 3) {
            return <AdditionalInformationForm/>
        } else if (step === 4) {
            return <Summary farmerId={farmerId}/>
        }
    }
    return <div>{renderFormByStep(currentStep)}</div>

}

export default StepForm