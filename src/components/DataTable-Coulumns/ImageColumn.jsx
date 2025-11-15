import React from 'react'
import Image from 'next/image'

function ImageColumn({row , accessorKey}) {
    const imageUrl = row.getValue(`${accessorKey}`)
    return (
        <div className="shrink-0">
            <Image
                src={imageUrl}
                width={500}
                height={500}
                alt={`${accessorKey}`}
                className="w-12 h-12 rounded-lg object-cover border border-border shadow-sm"
            />
        </div>
    )
}

export default ImageColumn