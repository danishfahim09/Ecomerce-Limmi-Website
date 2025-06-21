"use client"
import React from 'react'
import { Carousel } from 'nuka-carousel'
import Image from 'next/image'
import Link from 'next/link'

function HeroCarousel({ banners }) {
    const config = {
        nextButtonClassName: 'rounded-full bg-gray-800 text-white px-4 py-2',
        nextButtonText: 'Next',
        pagingDotsClassName: 'me-2 w-6 h-6', // ⬆️ Size bara kiya
        pagingDotsContainerClassName: 'bg-green-500',
        prevButtonClassName: 'w-[16px] h-[16px] bg-red-500 !important',
        prevButtonText: 'Prev',
        pagingDotsStyle: {
            fill: "red",
            width: "16px", // ⬆️ Size bara kiya
            height: "16px" // ⬆️ Size bara kiya
        }
    }

    return (
        <Carousel
            showDots
            slideCount={2}
            //autoplay
            wrapAround
            defaultControlsConfig={config}  // ✅ Sahi naam yeh hai
            className="rounded-md flex  overflow-hidden">

            {banners?.map((banner, i) => {
                return (
                    <Image key={i} src={banner.imageUrl}
                        alt='image'
                        width={780}
                        height={384}
                        className="w-[810px] h-[357px] object-cover"
                    />
                )
            })}

        </Carousel>

    )
}

export default HeroCarousel