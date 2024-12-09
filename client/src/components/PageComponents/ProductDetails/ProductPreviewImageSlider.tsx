"use client";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import {
  IProductProviderValues,
  ProductContext,
} from "@/src/context/product.provider";

export default function ProductPreviewImageSlider({
  images,
}: {
  images: string[];
}) {
  const { productStates } = useContext(
    ProductContext
  ) as IProductProviderValues;
  const { setSelectedProductPreview, selectedProductPreview } = productStates;

  return (
    <div className="mt-2">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => {
          if (!selectedProductPreview && index == 0) {
            setSelectedProductPreview(image);
          }
          return (
            <SwiperSlide>
              <div
                onClick={() => setSelectedProductPreview(image)}
                className={`cursor-pointer border  ${selectedProductPreview == image ? "border-orange-500" : "border-gray-500"}`}
              >
                <div className="w-full h-[70px] relative">
                  <Image
                    src={image}
                    alt="banner 1"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
