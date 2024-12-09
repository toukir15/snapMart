import React from "react";
import Image from "next/image";
import { getCategories } from "@/src/services/category/query";
import { ICategory } from "@/src/types/category";

export default async function Category() {
  const { data: categoriesData } = await getCategories();
  return (
    <div className="mt-12">
      <h3 className="text-2xl ">Categories</h3>
      <div className="bg-[#F7F7F7]  mt-3 rounded">
        <div className="grid grid-cols-7 ">
          {categoriesData.map((category: ICategory) => {
            return (
              <div
                key={category.id}
                className="w-[180px] border py-2 rounded hover:shadow-lg flex justify-center items-center transition text-center duration-200"
              >
                <div>
                  <div className="  md:h-[140px] w-[140] relative flex justify-center items-center">
                    <Image
                      src={category.image}
                      height={500}
                      width={500}
                      alt="banner 1"
                      objectFit="cover"
                      priority
                    />
                  </div>
                  <p className="text-sm">{category.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
