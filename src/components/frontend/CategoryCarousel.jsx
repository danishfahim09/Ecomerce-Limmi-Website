"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "@/components/frontend/Product";

function CategoryCarousel({ products, isMarketPage = false }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: isMarketPage ? 3 : 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: isMarketPage ? 2 : 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="relative">
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
        {products?.map((product, i) => {
          return <Product key={i} product={product} />;
        })}
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
