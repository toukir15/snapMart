import React from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import flash3 from "../../../../../../public/flashSale/flash2.png";

import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import { getProduct } from "@/src/services/product/query";
import ProductPreviewImage from "@/src/components/PageComponents/ProductDetails/ProductPreviewImage";
import ProductPreviewImageSlider from "@/src/components/PageComponents/ProductDetails/ProductPreviewImageSlider";
import ProductSize from "@/src/components/PageComponents/ProductDetails/ProductSize";
import ProductCounter from "@/src/components/PageComponents/ProductDetails/ProductCounter";

export default async function ProductDetailsPage({
  params,
}: {
  productId: string;
}) {
  const { data } = await getProduct(params.productId);
  const targetDate = new Date(data.createdAt);

  // Format the date as "Month Day, Year"
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = targetDate.toLocaleDateString("en-US", options);
  return (
    <>
      <div className="mt-[200px] min-h-screen ">
        <div className="flex gap-12 ">
          <div>
            <div className="h-[530px] w-[530px]">
              <ProductPreviewImage initialPreview={data.images[0]} />
              <ProductPreviewImageSlider images={data.images} />
            </div>
          </div>
          <div className="p-6">
            {/* Product Name */}
            <h3 className="text-3xl font-semibold text-gray-800 mb-2">
              {data.name}
            </h3>
            {/* Rating */}
            <Rating
              className="mt-2"
              style={{ maxWidth: 100 }}
              value={data.rating}
              readOnly
            />
            {/* Section Title */}
            <h3 className="text-2xl font-medium text-gray-700 mt-6">Details</h3>
            {/* Product Details */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="text-sm text-gray-500">Colorway</p>
                <p className="mt-1 text-gray-800">{data.color}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Style Code</p>
                <p className="mt-1 text-gray-800">{data.styleCode}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Release Date</p>
                <p className="mt-1 text-gray-800">{formattedDate}</p>
              </div>
            </div>
            {/* Additional Information */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="mt-1 text-gray-800">{data.department}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Brand</p>
                <p className="mt-1 text-gray-800">{data.brand}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Model</p>
                <p className="mt-1 text-gray-800">{data.model}</p>
              </div>
            </div>

            {/* Shoe Size Selection */}
            <ProductSize />

            <ProductCounter />
          </div>
        </div>
        <div>
          <h3 className="mt-20 text-2xl font-medium">Description</h3>
          <p className="mt-4">{data.description}</p>
        </div>
        <div>
          <h3 className="text-xl font-medium mt-8">You may also like</h3>
          <div className="flex gap-4 mt-4 mb-10">
            <div className="w-[220px] border p-2 rounded hover:shadow-lg bg-[#F7F7F7] transition duration-200">
              <div className="  md:h-[200px] relative flex justify-center items-center">
                <Image src={flash3} alt="banner 1" objectFit="cover" priority />
              </div>
              <p className="text-sm">
                Jordan 4 Retro Mid Military Black Mid Military Black
              </p>
              <p className="flex gap-2 items-center mt-1 ">
                <span className="text-[#F85606]">৳1,000</span>
                <span className="text-xs text-gray-500">-17%</span>
              </p>
              <div className="flex items-center gap-1 text-xs">
                <Rating
                  className="mt-1"
                  style={{ maxWidth: 70 }}
                  value={3}
                  readOnly
                />
              </div>
            </div>
            <div className="w-[220px] border p-2 rounded hover:shadow-lg bg-[#F7F7F7] transition duration-200">
              <div className="  md:h-[200px] relative flex justify-center items-center">
                <Image src={flash3} alt="banner 1" objectFit="cover" priority />
              </div>
              <p className="text-sm">
                Jordan 4 Retro Mid Military Black Mid Military Black
              </p>
              <p className="flex gap-2 items-center mt-1 ">
                <span className="text-[#F85606]">৳1,000</span>
                <span className="text-xs text-gray-500">-17%</span>
              </p>
              <div className="flex items-center gap-1 text-xs">
                <Rating
                  className="mt-1"
                  style={{ maxWidth: 70 }}
                  value={3}
                  readOnly
                />
              </div>
            </div>
            <div className="w-[220px] border p-2 rounded hover:shadow-lg bg-[#F7F7F7] transition duration-200">
              <div className="  md:h-[200px] relative flex justify-center items-center">
                <Image src={flash3} alt="banner 1" objectFit="cover" priority />
              </div>
              <p className="text-sm">
                Jordan 4 Retro Mid Military Black Mid Military Black
              </p>
              <p className="flex gap-2 items-center mt-1 ">
                <span className="text-[#F85606]">৳1,000</span>
                <span className="text-xs text-gray-500">-17%</span>
              </p>
              <div className="flex items-center gap-1 text-xs">
                <Rating
                  className="mt-1"
                  style={{ maxWidth: 70 }}
                  value={3}
                  readOnly
                />
              </div>
            </div>
            <div className="w-[220px] border p-2 rounded hover:shadow-lg bg-[#F7F7F7] transition duration-200">
              <div className="  md:h-[200px] relative flex justify-center items-center">
                <Image src={flash3} alt="banner 1" objectFit="cover" priority />
              </div>
              <p className="text-sm">
                Jordan 4 Retro Mid Military Black Mid Military Black
              </p>
              <p className="flex gap-2 items-center mt-1 ">
                <span className="text-[#F85606]">৳1,000</span>
                <span className="text-xs text-gray-500">-17%</span>
              </p>
              <div className="flex items-center gap-1 text-xs">
                <Rating
                  className="mt-1"
                  style={{ maxWidth: 70 }}
                  value={3}
                  readOnly
                />
              </div>
            </div>
            <div className="w-[220px] border p-2 rounded hover:shadow-lg bg-[#F7F7F7] transition duration-200">
              <div className="  md:h-[200px] relative flex justify-center items-center">
                <Image src={flash3} alt="banner 1" objectFit="cover" priority />
              </div>
              <p className="text-sm">
                Jordan 4 Retro Mid Military Black Mid Military Black
              </p>
              <p className="flex gap-2 items-center mt-1 ">
                <span className="text-[#F85606]">৳1,000</span>
                <span className="text-xs text-gray-500">-17%</span>
              </p>
              <div className="flex items-center gap-1 text-xs">
                <Rating
                  className="mt-1"
                  style={{ maxWidth: 70 }}
                  value={3}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
