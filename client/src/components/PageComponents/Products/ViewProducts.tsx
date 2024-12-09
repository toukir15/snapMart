import { getProducts } from "@/src/services/product/query";
import { IProduct } from "@/src/types/product";
import { calculateDiscounnt } from "@/src/utils/calculateDiscount";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ViewProducts({
  brand,
  category,
}: {
  brand: string;
  category: string;
}) {
  const { data } = await getProducts(brand, category);
  return (
    <div className="flex flex-wrap ">
      {data?.map((product: IProduct) => {
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
            <p className="flex items-center text-[#F85606]">৳{dicountPrice}</p>
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
  );
}
