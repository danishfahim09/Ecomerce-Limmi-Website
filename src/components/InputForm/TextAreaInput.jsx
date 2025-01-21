import { space } from 'postcss/lib/list'
import React from 'react'

function TextInput({
    lable,
    type,
    name,
    register,
    errors,
    isrequerd = true,
    className = 'sm:col-span-2',
}) {

    return (
        <div className={className}>
            <label
                htmlFor={name}
                className='block text-sm font-semibold leading-6 text-gray-900 mb-2 dark:text-gray-300'
            >
                {lable}
            </label>
            <textarea
                {...register(`${name}`, { required: isrequerd })}
                name={name}
                type={type}
                rows={3}
                id={name}
                autoComplete={name}
                defaultValue={''}
                className='bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-400
                dark:focus:border-gray-500'
                placeholder={`Type the ${lable.toLowerCase()}`}
            />
            {errors[`${name}`] &&
                (<span className='text-sm text-red-800'>{lable} is required</span>)
            }
        </div>
    )
}

export default TextInput