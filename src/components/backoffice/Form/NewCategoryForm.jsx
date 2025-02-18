'use client'
import React, { useState } from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/InputForm/SubmitButton'
import TextAreaInput from '@/components/InputForm/TextAreaInput'
import { generateSlug } from '@/lib/generateSlug'
import ImageInput from '@/components/InputForm/imageInput'
import { makePostRequest } from '@/lib/apiRequest'
import ToogleInput from '@/components/InputForm/ToogleInput'
import { useRouter } from 'next/navigation'


function NewCatagoryForm({ updateData = {} }) {
    const initialImageUrl = updateData?.imageUrl ?? ""
    const id = updateData?.id ?? ""
    const [imageUrl, setimageUrl] = useState(initialImageUrl);
    const [Loading, setLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            isActive: true,
            ...updateData
        },
    });
    const router = useRouter();
    function redirect() {
        router.push('/dashboard/catagories')
    }

    async function onSubmite(data) {
        const slug = generateSlug(data.title);
        data.slug = slug
        data.danish = 'danish'
        data.imageUrl = imageUrl
        console.log(data)
        if (id) {
            //Make Put  Request Update
            data.id = id
            makePostRequest(setLoading, `"api/categories/${id}"`, data, 'Category', reset, redirect)
            console.log("Update Request", data)
        } else {
            //Make Post Request (Create)
            makePostRequest(setLoading, "api/categories", data, 'Category', reset, redirect)
        }
        //setimageUrl("")
    }
    return (
        <form
            className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
            onSubmit={handleSubmit(onSubmite)}
        >
            <div className="grid sm:grid-row-2 sm:gap-6">
                <TextInput
                    lable='Category Tittle'
                    name='title'
                    register={register}
                    errors={errors}
                    className='w-full'
                />
                <TextAreaInput
                    lable='Cetagory Description'
                    name='description'
                    register={register}
                    errors={errors}
                />
            </div>
            <ImageInput
                imageUrl={imageUrl}
                setimageUrl={setimageUrl}
                endPoint='bannerImageUploader'
                lable="Catagorey"
            />
            <ToogleInput
                label="Publish your Category"
                name="isActive"
                trueTitle="Active"
                falseTitle="Draft"
                register={register}
            />
            <SubmitButton
                isLoding={Loading}
                ButtonTittle={id?'Update Catagory':'Create Catagory'}
                loddingButtonTiittle={`${id?'Updating':'Creating'} Category Please Wait...`}
                endPoint="bannerImageUploader"
            />
        </form>
    )
}

export default NewCatagoryForm