'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Link from 'next/link';
import { BaggageClaim } from 'lucide-react';

function CategoryCarousel({ products }) {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const slides = [
        {}, {}, {}, {}, {}, {}, {}, {}, {}
    ]
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
                    products.map((product, i) => {
                        return (
                            <div key={i} href="#" className='border-1 border-gray-200 dark:border-gray-700 rounded-lg mr-3 bg-white dark:bg-slate-800 overflow-hidden'>
                                <Link href="#">
                                    <Image
                                        src={product.imageUrl}
                                        alt=""
                                        width={556}
                                        height={556}
                                        className='w-full rounded-t-lg h-48'
                                    />
                                </Link>
                                <div className="px-2 ">
                                    <Link href="#">
                                        <h2 className='  my-2 text-gray-700 text-center dark:text-gray-300 mb-2 font-semibold'>
                                            {product.title}
                                        </h2>
                                    </Link>
                                    <div className="flex items-center justify-between my-2">
                                        <p className='text-gray-700 dark:text-gray-300'>UGX {product.salePrice}</p>
                                        <button className='flex items-center space-x-2 text-white bg-lime-700 px-3 py-2 rounded-md'>
                                            <BaggageClaim />
                                             <p>Add</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </Carousel>
        </div>
    )
}

export default CategoryCarousel