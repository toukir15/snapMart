import React from "react";
import flash3 from "../../../../public/flashSale/flash3.webp";
import Image from "next/image";
import { Button } from "@nextui-org/button";

export default function JustForYou() {
  return (
    <div className="my-12">
      <h3 className="text-2xl ">Just For You</h3>
      <div className="  mt-6 rounded">
        <div className="grid grid-cols-5 gap-4 ">
          <div className="w-[220px] border p-2 rounded hover:shadow-lg bg-[#F7F7F7] transition duration-200">
            <div className="  md:h-[200px] relative flex justify-center items-center">
              <Image src={flash3} alt="banner 1" objectFit="cover" priority />
            </div>
            <p className="text-sm">
              Jordan 4 Retro Mid Military Black Mid Military Black
            </p>
            <p className="flex gap-2 items-center ">
              <span className="text-[#F85606]">৳1,000</span>
              <span className="text-xs text-gray-500">-17%</span>
            </p>
            <div className="flex items-center gap-1 text-xs"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
