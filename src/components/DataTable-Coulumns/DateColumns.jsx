import React from 'react'

function DateColumns({row,accessorKey}) {
    const createdAt = row.getValue(`${accessorKey}`)

    const originalDate = new Date(createdAt);
    const day = originalDate.getDate()
    const month = originalDate.toLocaleString('default', {
        month: 'short'
    })
    const year = originalDate.getFullYear()
    const formated = `${day} ${month} ${year}`
    return (
        <div className="shrink-0 text-sm text-muted-foreground font-medium">
            {formated}
        </div>
    )
}

export default DateColumns