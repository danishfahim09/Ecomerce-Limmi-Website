"use client"
import React from 'react'
import { Carousel } from 'nuka-carousel'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function HeroCarousel({ banners }) {
    const config = {
        nextButtonClassName: 'hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 z-10',
        nextButtonText: <ChevronRight className='w-6 h-6' />,
        prevButtonClassName: 'hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 z-10',
        prevButtonText: <ChevronLeft className='w-6 h-6' />,
        pagingDotsClassName: 'w-2 h-2 rounded-full mx-1 transition-all duration-300',
        pagingDotsContainerClassName: 'bottom-4',
        pagingDotsStyle: {
            fill: "rgba(255, 255, 255, 0.5)",
            width: "8px",
            height: "8px"
        }
    }

    return (
        <div className="relative w-full h-full">
            <Carousel
                showDots
                autoplay={true}
                autoplayInterval={5000}
                wrapAround={true}
                speed={800}
                easing="easeInOutCubic"
                pauseOnHover={true}
                defaultControlsConfig={config}
                className="rounded-md overflow-hidden"
                renderCenterLeftControls={({ previousSlide }) => (
                    <button
                        onClick={previousSlide}
                        className="hidden sm:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className='w-6 h-6' />
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button
                        onClick={nextSlide}
                        className="hidden sm:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight className='w-6 h-6' />
                    </button>
                )}
            >
                {banners?.map((banner, i) => {
                    return (
                        <div key={i} className="relative w-full h-[357px] sm:h-[400px]">
                            <Image
                                src={banner.imageUrl}
                                alt={banner.title || 'Banner image'}
                                fill
                                priority={i === 0}
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                            />
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default HeroCarousel