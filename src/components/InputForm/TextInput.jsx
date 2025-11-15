import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function TextInput({
  defaultvalue="",
  lable,
  name,
  register,
  errors,
  isrequerd = true,
  type = 'text',
  className = 'sm:col-span-2',
  id
}) {


  return (

    <div className={className}>
      <Label
        htmlFor={name}
        className='text-sm font-semibold text-foreground mb-2'
      >
        {lable}
      </Label>
      <Input
        {...register(`${name}`, { required: isrequerd })}
        type={type}
        name={name}
        id={id}
        defaultValue={defaultvalue}
        autoComplete={name}
        placeholder={`Type the ${lable.toLowerCase()}`}
        className="shadow-sm"
      />
      {errors[`${name}`] &&
        (<span className='text-sm text-destructive mt-1 block'>{lable} is required</span>)
      }
    </div>
  )
}

export default TextInput