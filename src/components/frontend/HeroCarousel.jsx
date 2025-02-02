"use client"
import React from 'react'
import { Carousel } from 'nuka-carousel'
import Image from 'next/image'
import Link from 'next/link'

function HeroCarousel() {

    const DefaultControlsConfig = {
        //containerClassName: 'border-4 border-red-500',
        nextButtonClassName: ' rounded-full',
        nextButtonText: 'Next Btn',
        pagingDotsClassName: 'me-2 w-10 h-10',
        //pagingDotsContainerClassName: 'flex gap-9',
        prevButtonClassName: 'text-white bg-blue-500 px-4 py-2 rounded-md',
        prevButtonText: 'Prev Btn',
    }


    return (
        <Carousel showDots wrapAround showArrows wrapMode="wrap" DefaultControlsConfig={DefaultControlsConfig} className="">
            <Link href="/" className=''>
                <Image src='/pexels-01.jpg'
                    width={1520}
                    height={1710}
                    alt='image'
                    className='object-cover h-[450px]'
                />
            </Link>
            <Image src='/pexels-01.jpg'
                width={1520}
                height={1710}
                alt='image'
                className='object-cover h-[450px]'
            />
            <Image src='/pexels-01.jpg'
                width={1520}
                height={1210}
                alt='image'
                className='object-cover '
            />
            <Image src='/pexels-03.jpg'
                width={1520}
                height={1210}
                alt='image'
                className='object-cover '
            />

        </Carousel>

    )
}

export default HeroCarousel