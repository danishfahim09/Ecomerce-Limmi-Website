'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Link from 'next/link';

function CummunittyTrainnigCarasoule({ training }) {
 

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className="relative pb-6">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="transform 600ms ease-in-out"
        transitionDuration={600}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="px-2 sm:px-4"
        arrows={true}
        renderButtonGroupOutside={true}
        className="carousel-wrapper"
        shouldResetAutoplay={true}
      >
        {
          training?.map((training, i) => {
            return (
              <div key={i} className='border border-gray-200 dark:border-gray-700 rounded-lg mr-3 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200'>
                <Link href={`/blogs/${training.slug}`} className='block'>
                  <Image
                    src={training.imageUrl}
                    alt={training.title}
                    width={330}
                    height={220}
                    className='w-full rounded-t-lg h-48 object-cover'
                  />
                  <div className='p-4'>
                    <h1 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2'>{training.title}</h1>
                    <p className='text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3'>
                      {training.description}
                    </p>
                    <div className='flex gap-3 items-center justify-between'>
                      <Link href={`/blogs/${training.slug}`} className='text-white rounded-md px-4 py-2 bg-lime-700 hover:bg-lime-800 dark:bg-lime-600 dark:hover:bg-lime-700 transition-colors duration-200 text-sm font-medium'>Read more</Link>
                      <Link href='#' className='text-blue-600 dark:text-blue-400 hover:underline text-sm'>Talk to consultant</Link>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        }


      </Carousel>
    </div>
  )
}

export default CummunittyTrainnigCarasoule