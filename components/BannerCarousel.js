import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { navigtion } from "swiper";
// Import Swiper styles
import "swiper/css";

export default function BannerCarousel() {
  return (
    <>
      <Swiper navigation={true} className="mySwiper">
     

        <SwiperSlide>
          <img
            alt=""
            className="bannerCarousel"
            src="./banners/banner-1.jpeg"
            style={{
                height:'70vh',
                width: '100%',
                objectFit: 'contain',
                marginTop:8,
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            alt=""
            className="bannerCarousel"
            src="./banners/banner-2.jpg"
            style={{
                height:'70vh',
                width: '100%',
                objectFit: 'contain',
                marginTop:8,
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            alt=""
            className="bannerCarousel"
            src="./banners/banner-3.jpeg"
            style={{
                height:'70vh',
                width: '100%',
                objectFit: 'contain',
                marginTop:8,
            }}
          />
        </SwiperSlide>

     
      </Swiper>
    </>
  );
}
