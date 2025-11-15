"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

function MarketCarousole({ markets }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="relative py-4 pb-6">
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
        itemClass="px-2"
        arrows={true}
        renderButtonGroupOutside={false}
        className="carousel-wrapper"
        shouldResetAutoplay={true}
      >
        {markets?.map((market, i) => {
          return (
            <div key={i} className="h-full">
              <Link
                href={`/market/${market.slug}`}
                className="block h-full rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative w-full h-[150px] overflow-hidden">
                  <Image
                    src={market.logoUrl}
                    alt={market.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <div className="p-3 min-h-[60px] flex items-center justify-center bg-white dark:bg-gray-800">
                  <h2 className="text-gray-900 dark:text-gray-100 text-center font-semibold text-sm line-clamp-2">
                    {market.title}
                  </h2>
                </div>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default MarketCarousole;
