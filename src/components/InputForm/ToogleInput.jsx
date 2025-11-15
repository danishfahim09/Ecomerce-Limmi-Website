import React from "react";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function ToggleInput({
  label,
  name,
  trueTitle = "Active",
  falseTitle = "Inactive",
  register,
  isactive,
  ToggleChanging,
  className = "sm:col-span-2 flex flex-wrap items-center gap-4",
}) {
  return (
    <div className={className}>
      <Label className="text-sm font-semibold text-foreground">
        {label}
      </Label>
      <div className="flex items-center gap-3">
        <Switch
          {...register(`${name}`)}
          checked={isactive}
          onCheckedChange={ToggleChanging}
        />
        <span className="text-sm text-muted-foreground">
          {isactive ? trueTitle : falseTitle}
        </span>
      </div>
    </div>
  );
}