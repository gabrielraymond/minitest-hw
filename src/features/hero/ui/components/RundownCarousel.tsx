"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GuestCard from "@/components/guestCard/GuestCard";
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "@/components/button/Button";
import Image from "next/image";

const RundownCarousel = () => {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    // className: "center",
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 4,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesPerRow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesPerRow: 1,
        },
      },
    ],
  };
  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div>
      <div className=" w-full pl-24 mt-12">
        <div className="">
          <Slider {...settings} ref={sliderRef}>
            <div className=" flex justify-center items-center p-2 w-full">
              <div className="relative w-full h-full">
                <Image
                  alt=""
                  src={"/schedule/Day1-SuperStage.webp"}
                  width={400}
                  height={600}
                  className="w-full h-full"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className=" flex justify-center items-center p-2 w-full">
              <div className="relative w-full h-full">
                <Image
                  alt=""
                  src={"/schedule/Day1-WonderStage.webp"}
                  width={400}
                  height={600}
                  className="w-full h-full"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className=" flex justify-center items-center p-2 w-full">
              <div className="relative w-full h-full">
                <Image
                  alt=""
                  src={"/schedule/Day2-SuperStage.webp"}
                  width={400}
                  height={600}
                  className="w-full h-full"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className=" flex justify-center items-center p-2 w-full">
              <div className="relative w-full h-full">
                <Image
                  alt=""
                  src={"/schedule/Day2-WonderStage.webp"}
                  width={400}
                  height={600}
                  className="w-full h-full"
                  objectFit="contain"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 w-full mt-16">
        <div className="flex justify-center w-full gap-4 ">
          <div
            className=" w-14 h-14 bg-wibu-700 flex justify-center items-center rounded-full"
            onClick={goToPrev}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className=" w-14 h-14 bg-wibu-700 flex justify-center items-center rounded-full"
            onClick={goToNext}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div>
          <Link href={"/"}>
            <Button style="transparent">
              View all guests
              <span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-1 -rotate-45"
                />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RundownCarousel;
