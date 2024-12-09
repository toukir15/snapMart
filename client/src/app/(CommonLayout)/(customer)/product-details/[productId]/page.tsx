import React from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import flash3 from "../../../../../../public/flashSale/flash2.png";

import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import { getProduct, getSuggestedProduct } from "@/src/services/product/query";
import ProductPreviewImage from "@/src/components/PageComponents/ProductDetails/ProductPreviewImage";
import ProductPreviewImageSlider from "@/src/components/PageComponents/ProductDetails/ProductPreviewImageSlider";
import ProductSize from "@/src/components/PageComponents/ProductDetails/ProductSize";
import ProductCounter from "@/src/components/PageComponents/ProductDetails/ProductCounter";
import { IProduct } from "@/src/types/product";
import { calculateDiscounnt } from "@/src/utils/calculateDiscount";
import Link from "next/link";
import ProductSuggestion from "@/src/components/PageComponents/ProductDetails/ProductSuggestion";

export default async function ProductDetailsPage({
  params,
}: {
  productId: string;
}) {
  const { data } = await getProduct(params.productId);
  const { data: productSuggestedData } = await getSuggestedProduct(data.id);
  return (
    <>
      <div className="mt-[200px] min-h-screen ">
        <div className="flex gap-12 ">
          {/* product view images */}
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
            <p className="text-sm text-gray-700">{data.category?.name}</p>
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
                <p className="text-sm text-gray-500">Price</p>
                <p className="mt-1 text-gray-800">
                  ৳{calculateDiscounnt(data.price, data.discount)}
                </p>
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

            {/* add to cart counter  */}
            <ProductCounter />
          </div>
        </div>

        {/* description  */}
        <div>
          <h3 className="mt-20 text-2xl font-medium">Description</h3>
          <p className="mt-4">{data.description}</p>
        </div>

        {/* products suggestion */}
        <ProductSuggestion productSuggestedData={productSuggestedData} />
      </div>
    </>
  );
}
