import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";

function SelectInput({
  lable,
  name = "title",
  control,
  register,
  errors,
  options = [],
  multiple = false,
  className = "sm:col-span-2",
}) {
  return (
    <div className={className}>
      <Label
        htmlFor={name}
        className="text-sm font-semibold text-foreground mb-2"
      >
        {lable}
      </Label>
      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="shadow-sm">
                <SelectValue placeholder={`Select ${lable.toLowerCase()}`} />
              </SelectTrigger>
              <SelectContent>
                {options?.map((option, i) => (
                  <SelectItem key={i} value={option.id}>
                    {option.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      ) : (
        <select
          multiple={multiple}
          name={name}
          id={name}
          {...register(`${name}`)}
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
        >
          {options?.map((option, i) => {
            return (
              <option value={option.id} key={i}>
                {option.title}
              </option>
            );
          })}
        </select>
      )}

      {errors[`${name}`] && (
        <span className="text-sm text-destructive mt-1 block">
          {lable} is required
        </span>
      )}
    </div>
  );
}

export default SelectInput;
