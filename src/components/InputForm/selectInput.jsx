import React from 'react'

function SelectInput({
    lable,
    name = 'title',
    register,
    errors,
    options = [],
    multiple=false,
    className = 'sm:col-span-2',
}) {
    return (
        <div className={className}>

            {/* Lable  */}
            <label
                htmlFor={name}
                className='block text-sm font-semibold leading-6 text-gray-900 mb-2 dark:text-gray-300'
            >
                {lable}
            </label>

            {/* Selecl Optiion */}
            <select
                multiple = {multiple}
                name={name}
                id={name}
                {...register(`${name}`)}
                className='bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-400
                dark:focus:border-gray-500'
            >
                {options?.map((option, i) => {
                    return (
                        <option value={option.id} key={i}>
                            {option.title}
                        </option>
                    )
                })
                }
            </select>

            {/* Selecl Optiion  Error Message*/}
            {errors[`${name}`] &&
                (<span className='text-sm text-red-800'>{lable} is required</span>)
            }
        </div>
    )
}

export default SelectInput