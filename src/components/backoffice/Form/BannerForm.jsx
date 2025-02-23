'use client';
import React, { useState } from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/InputForm/SubmitButton'
import { makePostRequest } from '@/lib/apiRequest'
import { useRouter } from 'next/navigation';
import ImageInput from '@/components/InputForm/imageInput'
import ToogleInput from '@/components/InputForm/ToogleInput'
import { makePutRequest } from '@/lib/apiRequest'

function BannerForm({updateData={}}) {
    const initialImageUrl = updateData?.imageUrl ?? ""
    const id = updateData?.id ?? ""
    const [Loading, setLoading] = useState(false)
    const [imageUrl, setimageUrl] = useState(initialImageUrl);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        defaultValues: {
            isActive: true,
            ...updateData
        },
    });
   

    const router = useRouter();
    function redirect() {
        router.push('/dashboard/banners')
    }
    const isActive = watch("isActive");
    async function onSubmite(data) {
        {
            /*
            id => aouto ()
            tittle Name
            link data 
            image
            */
        }
        data.imageUrl = imageUrl
        console.log(data)
        if (id) {
            //Make Put  Request Update
            data.id = id
            makePutRequest(setLoading, `api/banner/${id}`, data, 'Category', reset, redirect)
            console.log("Update Request", data)
        } else {
            //Make Post Request (Create)
            makePostRequest(setLoading, 'api/banner', data, 'Banner', reset, redirect);
        }
        
    }

    return (
        <form
            className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
            onSubmit={handleSubmit(onSubmite)}
        >
            <div className="grid sm:grid-row-2 sm:gap-6">
                <TextInput
                    lable='Banner Tittle'
                    name='title'
                    register={register}
                    errors={errors}

                />
                <TextInput
                    lable='Banner Link'
                    name='link'
                    type='url'
                    register={register}
                    errors={errors}

                />
                {/*configurre this endpoint in core.js */}
                <ImageInput
                    imageUrl={imageUrl}
                    setimageUrl={setimageUrl}
                    endPoint='bannerImageUploader'
                    lable="Banner"
                />
                <ToogleInput
                    label="Publish your Banner"
                    name="isActive"
                    trueTitle="Active"
                    falseTitle="Draft"
                    register={register}
                />
            </div>
            <SubmitButton
                isLoding={Loading}
                ButtonTittle={id ? 'Update Baner' : 'Create Banner'}
                loddingButtonTiittle={`${id ? 'Updating' : 'Creating'} Banner Please Wait...`}
                //endPoint="bannerImageUploader"
            />
        </form>
    )
}

export default BannerForm