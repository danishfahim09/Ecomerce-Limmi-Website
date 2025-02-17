'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';
import Link from 'next/link';

function MarketCarousole({ markets }) {
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
                    markets.map((market, i) => {
                        return (
                            <Link key={i} href="#" className='rounded-lg mr-3 bg-red-400 overflow-'>
                                <Image
                                    src={market.logoUrl}
                                    alt={market.title}
                                    width={330}
                                    height={220}
                                    className='w-[400px] h-[150px] rounded-lg'
                                />
                                <h2 className='mt-2 text-slate-300 text-center dark:text-slate-200'>
                                    {market.title}
                                </h2>
                            </Link>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default MarketCarousole