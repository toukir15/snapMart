import React from "react";
import flash3 from "../../../../public/flashSale/flash3.webp";
import Image from "next/image";
import { Button } from "@nextui-org/button";

export default function FlashSale() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl ">Flash Sale</h3>
      <div className="bg-[#F7F7F7] px-4 pb-4 mt-3 rounded">
        <div className="flex justify-between items-center py-4">
          <p className="text-sm text-[#F85606]">On Sell Now</p>
          <Button className="bg-[#F7F7F7] border border-[#F85606] text-[#F85606] ">
            Shop All Product
          </Button>
        </div>
        <div className="flex ">
          <div className="w-[220px] border p-2 rounded hover:shadow-lg transition duration-200">
            <div className="  md:h-[200px] relative flex justify-center items-center">
              <Image src={flash3} alt="banner 1" objectFit="cover" priority />
            </div>
            <p className="text-sm">
              Jordan 4 Retro Mid Military Black Mid Military Black
            </p>
            <p className="flex items-center text-[#F85606]">৳1,000</p>
            <div className="flex items-center gap-1 text-xs">
              <p className="flex items-center  line-through text-[#9a9a9a]">
                ৳500
              </p>
              <p>-17%</p>
            </div>
          </div>
          <div className="w-[220px] border p-2 rounded hover:shadow-lg transition duration-200">
            <div className="  md:h-[200px] relative flex justify-center items-center">
              <Image src={flash3} alt="banner 1" objectFit="cover" priority />
            </div>
            <p className="text-sm">
              Jordan 4 Retro Mid Military Black Mid Military Black
            </p>
            <p className="flex items-center text-[#F85606]">৳1,000</p>
            <div className="flex items-center gap-1 text-xs">
              <p className="flex items-center  line-through text-[#9a9a9a]">
                ৳500
              </p>
              <p>-17%</p>
            </div>
          </div>
          <div className="w-[220px] border p-2 rounded hover:shadow-lg transition duration-200">
            <div className="  md:h-[200px] relative flex justify-center items-center">
              <Image src={flash3} alt="banner 1" objectFit="cover" priority />
            </div>
            <p className="text-sm">
              Jordan 4 Retro Mid Military Black Mid Military Black
            </p>
            <p className="flex items-center text-[#F85606]">৳1,000</p>
            <div className="flex items-center gap-1 text-xs">
              <p className="flex items-center  line-through text-[#9a9a9a]">
                ৳500
              </p>
              <p>-17%</p>
            </div>
          </div>
          <div className="w-[220px] border p-2 rounded hover:shadow-lg transition duration-200">
            <div className="  md:h-[200px] relative flex justify-center items-center">
              <Image src={flash3} alt="banner 1" objectFit="cover" priority />
            </div>
            <p className="text-sm">
              Jordan 4 Retro Mid Military Black Mid Military Black
            </p>
            <p className="flex items-center text-[#F85606]">৳1,000</p>
            <div className="flex items-center gap-1 text-xs">
              <p className="flex items-center  line-through text-[#9a9a9a]">
                ৳500
              </p>
              <p>-17%</p>
            </div>
          </div>
          <div className="w-[220px] border p-2 rounded hover:shadow-lg transition duration-200">
            <div className="  md:h-[200px] relative flex justify-center items-center">
              <Image src={flash3} alt="banner 1" objectFit="cover" priority />
            </div>
            <p className="text-sm">
              Jordan 4 Retro Mid Military Black Mid Military Black
            </p>
            <p className="flex items-center text-[#F85606]">৳1,000</p>
            <div className="flex items-center gap-1 text-xs">
              <p className="flex items-center  line-through text-[#9a9a9a]">
                ৳500
              </p>
              <p>-17%</p>
            </div>
          </div>
          <div className="w-[220px] border p-2 rounded hover:shadow-lg transition duration-200">
            <div className="  md:h-[200px] relative flex justify-center items-center">
              <Image src={flash3} alt="banner 1" objectFit="cover" priority />
            </div>
            <p className="text-sm">
              Jordan 4 Retro Mid Military Black Mid Military Black
            </p>
            <p className="flex items-center text-[#F85606]">৳1,000</p>
            <div className="flex items-center gap-1 text-xs">
              <p className="flex items-center  line-through text-[#9a9a9a]">
                ৳500
              </p>
              <p>-17%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
