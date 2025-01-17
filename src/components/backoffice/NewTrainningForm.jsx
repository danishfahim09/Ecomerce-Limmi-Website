"use client"
import React, { useState } from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/backoffice/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/backoffice/InputForm/SubmitButton'
import TextAreaInput from '@/components/backoffice/InputForm/TextAreaInput'
import { generateSlug } from '@/lib/generateSlug'
import ImageInput from '@/components/backoffice/InputForm/imageInput'
import { makePostRequest } from '@/lib/apiRequest'
import SelectInput from '@/components/backoffice/InputForm/selectInput'
import ToggleInput from '@/components/backoffice/InputForm/ToogleInput'
import "react-quill/dist/quill.snow.css";
import QuillEditor from '@/components/backoffice/InputForm/QuillEditor'
import { useRouter } from 'next/navigation'



function NewTrainingForm({catagories}) {
  const [imageUrl, setimageUrl] = useState('');
  const [Loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const [content, setContent] = useState('');

  {/* Quil Start */ }
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  const router = useRouter();
  function redirect() {
    router.push('/dashboard/comunity')
  }
  const isActive = watch("isActive")
  const isWhole = watch("isActive")

  async function onSubmite(data) {
    const slug = generateSlug(data.title);
    data.slug = slug
    data.content = content
    //setimageUrl('')
    //setContent('')
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(setLoading, "api/training", data, 'Traning', reset,redirect)
  }

  return (
    <div>
      <FormHeading tittle="New Training" />
      <form
        className="w-full max-w-5xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
        onSubmit={handleSubmit(onSubmite)}
      >
        <div className="grid sm:grid-row-2 sm:gap-6">
          <TextInput
            lable='Trianing Tittle'
          name='title'
            register={register}
            errors={errors}
            className='w-full'
          />
          <SelectInput
            lable='Select Category'
            name='categoryId'
            register={register}
            errors={errors}
            options={catagories}
            className='w-full'
          />
          <TextAreaInput
            lable='Training Description'
            name='description'
            register={register}
            errors={errors}
          />
        </div>

        <ImageInput
          imageUrl={imageUrl}
          setimageUrl={setimageUrl}
          endPoint='trainingImageUploader'
          lable="Training ThumbNail"
        />
        {/* Quil End */}
        <QuillEditor
          lable='Blog Content'
          content={content}
          onChange={setContent}
          modules={modules}
        />
        {/* Quil End */}

        <ToggleInput
          label="Publish your Coupone"
          name="isActive"
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
        
        <SubmitButton
          isLoding={Loading}
          ButtonTittle='Create Taining'
          loddingButtonTiittle='Creating Category Please Wait'
          endPoint="TrainingImageUploader"
        />

      </form>
      {/*
      -id
      -tittle
      -slug
      -description
      -image
      */}
    </div>
  )
}

export default NewTrainingForm