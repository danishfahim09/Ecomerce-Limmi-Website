'use client';
import React, { useState } from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/InputForm/SubmitButton'
import Generatecouponcode from '@/lib/Generatecouponcode'
import { makePostRequest } from '@/lib/apiRequest'
import generateIsoFormattedDate from '@/lib/GenerateISOStringFormatedDate'
import { useRouter } from 'next/navigation';
import TooggleInput from '@/components/InputForm/ToogleInput'
import { makePutRequest } from '@/lib/apiRequest'
import { ConvertIsoDateToNormal } from '@/lib/ConvertIsoDateToNormal'

function CouponeForm({ updateData = {} }) {
    const expiryDateNormal = ConvertIsoDateToNormal(updateData.expiryDate)
    updateData.expiryDate = expiryDateNormal
    const id = updateData?.id ?? ""
    const [Loading, setLoading] = useState(false)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        defaultValues: {
            isActive: true,
            ...updateData
        },
    });

    const isActive = watch("isActive");
    const router = useRouter();
    function redirect() {
        router.push('/dashboard/couponse')
    }
    async function onSubmite(data) {
        // Generate coupone Code
        const couponeCode = Generatecouponcode(data.title, data.expiryDate)
        data.couponCode = couponeCode

        //convert Date To Iso Formated Date
        const isoFormatedDate = generateIsoFormattedDate(data.expiryDate)
        data.expiryDate = isoFormatedDate
        
        if (id) {
            //Make Put  Request Update
            data.id = id
            makePutRequest(setLoading, `api/couponse/${id}`, data, 'Couponse', reset, redirect)
        } else {
            //Make Post Request (Create)
            makePostRequest(setLoading, 'api/couponse', data, 'Coupon', reset, redirect);
        }
    }

    return (
        <form className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
            onSubmit={handleSubmit(onSubmite)}
        >
            <div className="grid sm:grid-row-2 sm:gap-6">
                <TextInput
                    lable='Coupone Tittle'
                    name='title'
                    register={register}
                    errors={errors}
                />
                <TextInput
                    lable='Coupone Expiry Date '
                    name='expiryDate'
                    type='date'
                    register={register}
                    errors={errors}
                    className='w-full'
                />
                <TooggleInput
                    label="Publish your Coupone"
                    name="isActive"
                    trueTitle="Active"
                    falseTitle="Draft"
                    register={register}
                />
            </div>
            <SubmitButton
                isLoding={Loading}
                ButtonTittle={id ? 'Update Coupone' : 'Create Coupone'}
                loddingButtonTiittle={`${id ? 'Updating' : 'Creating'} Coupone Please Wait...`}
                endPoint="bannerImageUploader"
            />
        </form>
    )
}

export default CouponeForm