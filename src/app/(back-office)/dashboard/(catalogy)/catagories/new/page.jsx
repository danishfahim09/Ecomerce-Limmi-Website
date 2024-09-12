"use client"
import React from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/backoffice/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/backoffice/InputForm/SubmitButton'
import TextAreaInput from '@/components/backoffice/InputForm/TextAreaInput'

function NewCatagory() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  async function submite(data) {
    console.log(data)
  }

  return (
    <div>
      <FormHeading tittle="New Catagorey" />
      <form
        className="w-full max-w-4xl mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
        onSubmit={handleSubmit(submite)}
      >
        <div className="grid sm:grid-row-2 sm:gap-6">
          <TextInput
            lable='Category Tittle'
            name='tittle'
            register={register}
            errors={errors}
          />
          <TextAreaInput
            lable='Cetagory Description'
            name='textarera'
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoding={false}
          ButtonTittle='Create Catagory'
          loddingButtonTiittle='Creating Category Please Wait'
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

export default NewCatagory