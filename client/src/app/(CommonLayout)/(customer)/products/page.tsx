"use client";
import {
  IProductProviderValues,
  ProductContext,
} from "@/src/context/product.provider";
import { useGetProducts } from "@/src/hooks/product.hook";
import { IProduct } from "@/src/types/product";
import { calculateDiscounnt } from "@/src/utils/calculateDiscount";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useContext } from "react";

export default function page() {
  const { productStates } = useContext(
    ProductContext
  ) as IProductProviderValues;
  const { brand, category, searchTerm } = productStates;
  const { data } = useGetProducts({ brand, category, searchTerm });
  const productsData = data?.data.data;
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  // if (!isClient) {
  //   return <div>Loading...</div>;
  // }
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-wrap ">
          {productsData?.map((product: IProduct) => {
            const { name, price, discount, images } = product;
            const dicountPrice = calculateDiscounnt(price, discount);
            return (
              <Link
                href={`/product-details/${product.id}`}
                className="w-[220px] border p-2 rounded hover:shadow-lg transition duration-200"
              >
                <div className="  md:h-[200px] relative flex justify-center items-center">
                  <Image
                    src={images[0]}
                    alt="banner 1"
                    width={500}
                    height={500}
                    objectFit="cover"
                    priority
                  />
                </div>
                <p className="text-sm">{name}</p>
                <p className="flex items-center text-[#F85606]">
                  ৳{dicountPrice}
                </p>
                <div className="flex items-center gap-1 text-xs">
                  <p className="flex items-center  line-through text-[#9a9a9a]">
                    ৳{price}
                  </p>
                  <p>-{discount}%</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Suspense>
    </>
  );
}
