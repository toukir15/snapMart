import React from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import { Rating } from "@smastrom/react-rating";
import { getProduct, getSuggestedProduct } from "@/src/services/product/query";
import ProductPreviewImage from "@/src/components/PageComponents/ProductDetails/ProductPreviewImage";
import ProductPreviewImageSlider from "@/src/components/PageComponents/ProductDetails/ProductPreviewImageSlider";
import ProductSize from "@/src/components/PageComponents/ProductDetails/ProductSize";
import ProductCounter from "@/src/components/PageComponents/ProductDetails/ProductCounter";
import { calculateDiscounnt } from "@/src/utils/calculateDiscount";
import ProductSuggestion from "@/src/components/PageComponents/ProductDetails/ProductSuggestion";
import AdditionalInformation from "@/src/components/PageComponents/ProductDetails/AdditionalInformation";
import ProductDetails from "@/src/components/PageComponents/ProductDetails/ProductDetails";

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
            <ProductDetails data={data} />

            {/* Additional Information */}
            <AdditionalInformation data={data} />

            {/* Shoe Size Selection */}
            <ProductSize />

            {/* add to cart counter  */}
            <ProductCounter data={data} />
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
