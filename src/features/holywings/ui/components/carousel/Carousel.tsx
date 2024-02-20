"use client";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import StartRating from "../starRating/StartRating";

const Carousel = ({ data, idx, isShow, setIsShow }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    setCurrentIndex(idx);
  }, [idx]);

  return (
    <div
      className={`carousel fixed top-0 z-20 bg-[rgba(0,0,0,0.5)] w-full h-[100vh] flex justify-center items-center ${
        isShow ? "block" : "hidden"
      }`}
    >
      <div className="flex w-full justify-center items-center">
        <div className="bg-white p-8 rounded-lg flex  justify-around items-center gap-6">
          <button onClick={goToPrevious} className="  p-4">
            <FontAwesomeIcon icon={faChevronLeft} className=" text-4xl" />
          </button>

          <div className="carousel-item">
            <Image
              src={data[currentIndex].image_url}
              alt={data[currentIndex].title}
              width={600}
              height={600}
            />
            <div className=" flex my-4 justify-between">
              <h2 className="text-2xl font-bold">{data[currentIndex].title}</h2>
              <div>
                <StartRating
                  totalStars={5}
                  rating={data[currentIndex].rating}
                />
              </div>
            </div>
          </div>

          <button onClick={goToNext} className=" p-4">
            <FontAwesomeIcon icon={faChevronRight} className="text-4xl " />
          </button>
        </div>
      </div>
      <div className="absolute top-6 right-6">
        <button onClick={() => setIsShow(false)}>
          <FontAwesomeIcon icon={faTimes} className="text-4xl text-white " />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
