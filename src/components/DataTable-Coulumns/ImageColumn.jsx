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
                className="w-10 h-10 rounded-full object-fill"
            />
        </div>
    )
}

export default ImageColumn