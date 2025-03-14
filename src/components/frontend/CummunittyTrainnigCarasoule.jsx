'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Link from 'next/link';

function CummunittyTrainnigCarasoule({ training }) {
console.log("i am training",(training))

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
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        //autoPlay={true}
        //autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="px-4"
      >
        {
          training.map((training, i) => {
            return (
              <div key={i} className=' border-1 rounded-lg mr-3 dark:hover:bg-slate-600 dark:hover:opacity-70'>
                <Link href="#" className=''>
                  <Image
                    src={training.imageUrl}
                    alt={training.description}
                    width={330}
                    height={220}
                    className='w-full rounded-t-lg h-48'
                  />
                  <div className='mt-2 mb-6 text-slate-300  dark:text-slate-400    dark:hover:bg-slate-600 '>
                    <h1 className='p-2 text-slate-300 text-center'>{training.title}</h1>
                    <p className='px-4 py-2'>
                      {training.description}
                    </p>
                    <div className='flex gap-3 text-center py-1 justify-center'>
                      <Link href='#' className='  text-slate-50 rounded-md px-4 py-2 hover:bg-lime-800 dark:hover:bg-lime-600 dark:bg-lime-700 bg-lime-900 duration-300 transition-all'>Read more</Link>
                      <Link href='#' className='text-blue-400 flex items-center justify-center '>talk to counsaltant...</Link>
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