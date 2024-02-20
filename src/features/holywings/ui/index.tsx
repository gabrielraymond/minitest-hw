"use client";
import React, { useState } from "react";
import Autocomplete from "./components/autocomplete/Autocomplete";
import data from "../hooks/images.json";
import Image from "next/image";
import Carousel from "./components/carousel/Carousel";
import Tooltip from "./components/tooltip/Tooltip";
import { useSearchParams } from "next/navigation";

const Holywings = () => {
  const [isCarouselActive, setIsCarouselActive] = useState<boolean>(false);
  const [idxImage, setIdxImage] = useState<number | null>(0);

  const searchParams = useSearchParams();
  const search = searchParams.get("title");

  const handleDetail = (id: number) => {
    setIdxImage(id);
    setIsCarouselActive(true);
  };

  const filteredItems = data.filter((item: any) =>
    item.title.toLowerCase().includes(search ? search?.toLowerCase() : "")
  );
  return (
    <div>
      <div className="w-full min-h-[20vh] bg-slate-600 flex justify-center items-center">
        <div>
          <h1 className="text-white text-xl font-bold text-center mb-6">
            Mini Test Holywings
          </h1>
          <div>
            <Autocomplete option={data} />
          </div>
        </div>
      </div>
      <div className="my-8">
        <div className="flex flex-wrap justify-around gap-4">
          {filteredItems.map((item: any, idx: number) => (
            <Tooltip text={item.title} key={idx}>
              <div
                className="p-4 bg-white rounded-lg shadow-lg cursor-pointer"
                onClick={() => handleDetail(idx)}
                key={idx}
              >
                <Image alt="" src={item.image_url} width={250} height={250} />
              </div>
            </Tooltip>
          ))}
        </div>
      </div>

      <Carousel
        data={data}
        idx={idxImage}
        isShow={isCarouselActive}
        setIsShow={setIsCarouselActive}
      />
    </div>
  );
};

export default Holywings;
