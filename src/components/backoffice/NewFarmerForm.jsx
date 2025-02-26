"use client"
import React, { useState } from 'react'
import TextInput from '@/components/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/InputForm/SubmitButton'
import TextAreaInput from '@/components/InputForm/TextAreaInput'
import ImageInput from '@/components/InputForm/imageInput'
import { makePostRequest } from '@/lib/apiRequest'
import ToogleInput from '@/components/InputForm/ToogleInput'
import { generateUserCode } from '@/lib/generateUserCode'
import ArrayitemInput from '@/components/InputForm/ArrayitemInput'
import { useRouter } from 'next/navigation'


function NewFarmerForm({ users }) {

    const [imageUrl, setimageUrl] = useState('');
    const [Loading, setLoading] = useState(false);
    const [product, setproduct] = useState([]);

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        defaultValues: {
            isActive: true,
            ...users
        },
    });
    const isActive = watch("isActive")

    const router =useRouter()
    function redirect(){
        router.push('/login')
    }
    async function onSubmite(data) {
        data.product = product
        data.userId = users.id
        const code = generateUserCode("LLF", data.name)
        console.log("i  am a code ",code)
        data.code = code
        data.profileImageUrl = imageUrl
        console.log(data)
        makePostRequest(setLoading, "api/farmers", data, 'Category', reset, redirect )
        setimageUrl('')
    }

    return (
        <form
            className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
                         sm:p-6 md:p-10 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
            onSubmit={handleSubmit(onSubmite)}
        >
            <div className="grid sm:grid-row-2 sm:gap-6">
                <TextInput
                    lable="User Id"
                    name='id'
                    register={register}
                    errors={errors}
                    className='w-full'
                />
                <TextInput
                    lable="Farmer's Full Name"
                    name='name'
                    register={register}
                    errors={errors}
                    className='w-full'
                />
                <TextInput
                    lable='Farmer Phone'
                    name='phone'
                    type='tel'
                    register={register}
                    errors={errors}
                    className='w-full'
                />
                <TextInput
                    lable='Farmer Email Address'
                    name='email'
                    register={register}
                    errors={errors}
                    className='w-full'
                />
                <TextInput
                    lable="Farmer's Physical Edress"
                    name='physicalAddress'
                    register={register}
                    errors={errors}
                    className='w-full'
                />
                <TextInput
                    lable="Farme's Contact Preson"
                    name='contactPerson'
                    register={register}
                    errors={errors}
                    className='w-full'
                />

                <TextInput
                    lable='Farmer Contact Preson Phone'
                    name='contactPersonPhone'
                    register={register}
                    type='tel'
                    errors={errors}
                    className='w-full'
                />

                {/*Accare */}
                <TextInput
                    lable="What is the size of your land inn Accers"
                    name='landSize'
                    type='number'
                    register={register}
                    errors={errors}
                    className='w-full'
                />
                <TextInput
                    lable="What is your main crop that you cultivate "
                    name='mainCrop'
                    type='number'
                    register={register}
                    errors={errors}
                    className='w-full'
                />
                <ArrayitemInput items={product} setitems={setproduct}
                    tittle="Add Product" />

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
                <ToogleInput
                    label="Farmer Status"
                    name="isActive"
                    trueTitle={true}
                    falseTitle="Draft"
                    register={register}
                />
            </div>
            <SubmitButton
                isLoding={Loading}
                ButtonTittle='Create Farmer'
                loddingButtonTiittle='Creating Farmer Please Wait'
            //endPoint="bannerImageUploader"
            />
        </form>
    )
}

export default NewFarmerForm