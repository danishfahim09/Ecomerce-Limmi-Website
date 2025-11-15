import React from 'react'
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function TextAreaInput({
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
            <Label
                htmlFor={name}
                className='text-sm font-semibold text-foreground mb-2'
            >
                {lable}
            </Label>
            <Textarea
                {...register(`${name}`, { required: isrequerd })}
                name={name}
                rows={3}
                id={name}
                autoComplete={name}
                defaultValue={''}
                placeholder={`Type the ${lable.toLowerCase()}`}
                className="shadow-sm min-h-[80px]"
            />
            {errors[`${name}`] &&
                (<span className='text-sm text-destructive mt-1 block'>{lable} is required</span>
            )}
        </div>
    )
}

export default TextAreaInput
