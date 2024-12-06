/* eslint-disable prettier/prettier */
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import banner1 from "../../../../public/banner/banner1.webp";
import banner2 from "../../../../public/banner/banner2.webp";
import banner3 from "../../../../public/banner/banner3.webp";
import banner5 from "../../../../public/banner/banner5.jpg";
import banner6 from "../../../../public/banner/banner6.jpg";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full h-auto overflow-hidden mt-12">
      <Swiper
        className="mySwiper"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true} // Adds looping for a better user experience
      >
        {/* First Slide */}
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[400px] relative">
            <Image
              src={banner5}
              alt="banner 1"
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the container
              priority // Improves loading for the first slide
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[400px] relative">
            <Image
              src={banner6}
              alt="banner 1"
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the container
              priority // Improves loading for the first slide
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[400px] relative">
            <Image
              src={banner1}
              alt="banner 1"
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the container
              priority // Improves loading for the first slide
            />
          </div>
        </SwiperSlide>

        {/* Second Slide */}
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[400px] relative">
            <Image
              src={banner2}
              alt="banner 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[400px] relative">
            <Image
              src={banner3}
              alt="banner 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
