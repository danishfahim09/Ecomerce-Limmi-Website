"use client"
import React, { useState } from 'react'
import FormHeading from '@/components/backoffice/FormHeader'
import TextInput from '@/components/backoffice/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/InputForm/SubmitButton'
import TextAreaInput from '@/components/InputForm/TextAreaInput'
import { makePostRequest } from '@/lib/apiRequest'
import SelectInput from '@/components/InputForm/selectInput'
import ToggleInput from '@/components/InputForm/ToogleInput'
import "react-quill/dist/quill.snow.css";
import Generatecouponcode from '@/lib/Generatecouponcode'


function NewTraining() {
  const [Loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isactive, setisactive] = useState(true)

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

  {/* Quil End */ }

  const categories = [
    {
      id: 1,
      title: 'Category 1'
    },
    {
      id: 2,
      title: 'Category 2'
    },
    {
      id: 3,
      title: 'Category 3'
    },
  ]

  {
    /*
    Staff Full Name
    Password
    Staffs_Email_Eddress
    Staffs_Phone_Num
    Phusical_Edress
    Notes
    Staff_member_status
    username: danishfahim0908
    password: Dd0908070605
    */
  }

  async function onSubmite(data) {
    const code = Generatecouponcode('LSM',data.name)
    if (isactive) {
      data.isactive = 'active '
    } else {
      data.isactive = 'isactive'
    }
    data.code = code
    console.log(data)
    makePostRequest(setLoading, "api/staff", data, 'Traning', reset)
  }
  const ToggleChanging = () => {
    setisactive(!isactive)
   
  }

  return (
    <div>
      <FormHeading tittle="New Training" />
      <form
        className="w-full max-w-4xl mt-16 mx-auto h-auto dark:bg-slate-800 bg-gray-100 dark:border-gray-700 p-4
         sm:p-6 md:p-8 rounded-lg dark:text-gray-400 text-gray-700 my-5 shadow-lg dark:shadow-sm dark:shadow-gray-500 shadow-gray-300"
        onSubmit={handleSubmit(onSubmite)}
      >
        <div className="grid sm:grid-row-2 sm:gap-6">
          <TextInput
            type='text'
            name='name'
            lable='Staff Full Name'
            register={register}
            errors={errors}
            
          />
          <TextInput
            type='password'
            name='password'
            lable='Password'
            register={register}
            errors={errors}
            className='w-full'
            
          />
          <TextInput
            name='nin'
            lable='Nin (ID_Num)'
            register={register}
            errors={errors}
            className='w-full'
          
          />
          <TextInput
            type='date'
            name='dob'
            lable='Date Of Birth'
            register={register}
            errors={errors}
            className='w-full'
            
          />
          <TextInput
            type='text'
            name='email'
            lable='Staff Email Eddress'
            register={register}
            errors={errors}
            className='w-full'
            
          />
          <TextInput
            type='text'
            name='phone'
            lable='Staff Phone Number'
            register={register}
            errors={errors}
            className='w-full'
            
          />
          <TextInput
            type='text'
            name='physical_eddress'
            lable='Phisical eddress'
            register={register}
            errors={errors}
            className='w-full'
            
          />
          <TextInput
            type='text'
            name='notes'
            lable='Note'
            register={register}
            errors={errors}
            className='w-full'
           
          />
          <SelectInput
            lable='Select Category'
            name='category'
            register={register}
            errors={errors}
            options={categories}
            className='w-full'
          />
          <TextAreaInput
            lable='Training Description'
            name='description'
            register={register}
            errors={errors}
          />
        </div>

        <ToggleInput
          lable='Publish Your Training'
          type='checkbox'
          name='isactive'
          ToggleChanging={ToggleChanging}
          isactive={isactive}
          register={register}
        />

        <SubmitButton
          isLoding={Loading}
          ButtonTittle='Create Taining'
          loddingButtonTiittle='Creating Category Please Wait'
          endPoint="TrainingImageUploader"
        />

      </form>
    </div>
  )
}

export default NewTraining