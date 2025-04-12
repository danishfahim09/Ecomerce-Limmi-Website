'use client'
import Image from 'next/image'
import React, { useState } from 'react' // ✅ useState import کیا
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function ProductImageCarousel({ productImages = [], thumbnail }) {
console.log(productImages,"i am all product immages ")
    const [thumbsSwiper, setThumbsSwiper] = useState(null); // ✅ useState استعمال

    return (
        <div className="col-span-3 ">
            {
                productImages.length <= 0 ? (
                    <Image
                        className='bg-red-200 w-64 h-72'
                        src={thumbnail}
                        width={500}
                        height={500}
                        alt=""
                    />
                ) : (
                    <>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            {productImages.map((image, i) => (
                                <SwiperSlide key={i}>
                                    <img src={image} alt={`Image ${i}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* ✅ Inner Swiper باہر لے آیا */}
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper mt-4"
                        >
                            {productImages.map((image, i) => (
                                <SwiperSlide key={i}>
                                    <img src={image} alt={`Thumb ${i}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                )}
        </div>
    );
}

export default ProductImageCarousel
