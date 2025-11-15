"use client"
import React, { useState } from 'react'
import TextInput from '@/components/InputForm/TextInput'
import { useForm } from 'react-hook-form'
import SubmitButton from '@/components/InputForm/SubmitButton'
import ImageInput from '@/components/InputForm/imageInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { generateUserCode } from '@/lib/generateUserCode'
import { useRouter } from 'next/navigation'

function CustomerForm({ user }) {

  const [imageUrl, setimageUrl] = useState('');
  const [Loading, setLoading] = useState(false);
  console.log("i am danish id can you hearbme", user)

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
    defaultValues: {
      ...user
    },
  });

  const router = useRouter()
  function redirect() {
    router.push('/dashboard/customers')
  }
  async function onSubmite(data) {
    data.userId = user.id
    data.profileImage = imageUrl
    console.log(data)
    makePutRequest(setLoading, `api/customers/${user.id}`, data, 'Customer Profile', redirect, reset)
    setimageUrl('')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmite)}
      className="w-full max-w-4xl mx-auto p-4 bg-card border border-border rounded-lg shadow-md dark:shadow-lg sm:p-6 md:p-8"
    >
      <h2 className='text-xl font-semibold mb-4 text-foreground'> Personal Details </h2>
      <div className="grid sm:grid-row-2 sm:gap-6 border-b border-border pb-10">
        <TextInput
          lable='Full Name'
          name='name'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Username'
          name='username'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Date Of Birth'
          name='dateOfBirth'
          type='date'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='First Name'
          name='firstName'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Last Name'
          name='lastName'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Email Address'
          name='email'
          type='email'
          register={register}
          errors={errors}

        />
        <TextInput
          lable='Phone Number'
          name='phone'
          register={register}
          errors={errors}
          className='w-full'
        />
        <ImageInput
          imageUrl={imageUrl}
          setimageUrl={setimageUrl}
          endPoint='CustomerProfileUploader'
          lable="Customer Profile Image"
        />
      </div>


      <h2 className='text-xl font-semibold mb-4 text-foreground pt-10'> Shipping Details </h2>
      <div className="grid sm:grid-row-2 sm:gap-6">
        <TextInput
          lable='Street Address'
          name='streetAddress'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='City '
          name='city'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          lable='Country'
          name='country'
          register={register}
          errors={errors}

        />
        <TextInput
          lable='District'
          name='district'
          register={register}
          errors={errors}
          className='w-full'
        />
      </div>
      {/* Shipping Cost */}



      <SubmitButton
        isLoding={Loading}
        ButtonTittle='Create Farmer'
        loddingButtonTiittle='Creating Farmer Please Wait'
      //endPoint="bannerImageUploader"
      />
    </form>
  )
}

export default CustomerForm