import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const HeroSession = () => {
  return (
    <Container>
      <div className="w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="relative py-16 row-span-2 flex items-end">
            <div className="relative w-full">
              <div>
                <p className="uppercase text-white">
                  Indonesia comic con 2023 ⚡️
                </p>
                <h1 className="text-6xl font-extrabold">
                  Bringing <br /> the best <br /> pop culture experience
                </h1>
              </div>
              <div className="flex gap-2 mt-6">
                <Button size="large">
                  <span>Get your ticket</span>
                </Button>
                <Button size="large" style="outlined">
                  Be part of ICC
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-wibu-200 rounded-xl">
            <div className="relative py-12 px-4 ">
              <div className="">
                <div className="text-center">
                  <h1
                    className={`text-4xl font-bold mt-6 font-barlow ${barlow.className}`}
                  >
                    Nov 4-5, 2023
                  </h1>
                  <p className=" mt-3">
                    Jakarta Convention Center (JCC) Senayan, Assembly,
                    Cendrawasih, and Plenary Hall
                  </p>
                  <p className="mt-3">10 AM - 9 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-wibu-100 rounded-xl">
            <div className="relative py-12 px-4 ">
              <div className="">
                <div className="text-center text-black">
                  <p className=" ">
                    The biggest event in the year to celebrate
                  </p>
                  <h1
                    className={`text-5xl font-extrabold mt-3 ${barlow.className}`}
                  >
                    5 POP CULTURE
                    <br /> PILLARS
                  </h1>

                  <p className="mt-3 text-white text-4xl font-extrabold">
                    Games
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl relative">
            <div className="relative">
              <div className="absolute w-full z-40 h-[270px] transition-all duration-300 hover:rotate-3">
                <Image
                  alt=""
                  src={
                    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  // width={800}
                  // height={200}
                  fill
                  objectFit="cover"
                  className="rounded-xl"
                ></Image>
              </div>
              <div className="absolute mt-10 z-30 w-full h-[270px] transition-all duration-300 scale-90 hover:rotate-3">
                <Image
                  alt=""
                  src={
                    "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  // width={800}
                  // height={200}
                  fill
                  objectFit="cover"
                  className="rounded-xl"
                ></Image>
              </div>
              <div className="absolute mt-20 z-20 w-full h-[270px] transition-all duration-300 scale-[80%] hover:rotate-3">
                <Image
                  alt=""
                  src={
                    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  // width={800}
                  // height={200}
                  fill
                  objectFit="cover"
                  className="rounded-xl"
                ></Image>
              </div>
            </div>
            <div className="absolute bottom-0 flex justify-center mx-auto w-full">
              <Link href="/">
                View the last edition of ICC&apos;s excitement{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </div>
          </div>
          <div className="relative ">
            <div className="relative">
              <div className="flex flex-col gap-2">
                <div className=" bg-gradient-to-r from-wibu-200 to-black rounded-lg p-[1px] ">
                  <div className=" py-4 px-6 bg-gradient-to-r from-slate-800 to-slate-950 rounded-lg flex justify-between items-center ">
                    <div>
                      <h1 className={`text-3xl font-bold ${barlow.className}`}>
                        DG Awards 2023
                      </h1>
                      <p className="text-sm mt-2">
                        The biggest gaming award event in Indonesia is coming.
                      </p>
                    </div>
                    <div className="bg-white w-[80px] h-[80px] rounded-full text-black flex justify-center items-center hover:scale-110 transition-all duration-200 ">
                      <div className="w-[20px] h-[20px] rotate-45">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" bg-gradient-to-r from-wibu-100 to-black rounded-lg p-[1px] ">
                  <div className=" py-4 px-6 bg-gradient-to-r from-slate-800 to-slate-950 rounded-lg flex justify-between items-center ">
                    <div>
                      <h1 className={`text-3xl font-bold ${barlow.className}`}>
                        DG Awards 2023
                      </h1>
                      <p className="text-sm mt-2">
                        The biggest gaming award event in Indonesia is coming.
                      </p>
                    </div>
                    <div className="bg-white w-[80px] h-[80px] rounded-full text-black flex justify-center items-center hover:scale-110 transition-all duration-200 ">
                      <div className="w-[20px] h-[20px] rotate-45">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" bg-gradient-to-r from-wibu-300 to-black rounded-lg p-[1px] ">
                  <div className=" py-4 px-6 bg-gradient-to-r from-slate-800 to-slate-950 rounded-lg flex justify-between items-center ">
                    <div>
                      <h1 className={`text-3xl font-bold ${barlow.className}`}>
                        DG Awards 2023
                      </h1>
                      <p className="text-sm mt-2">
                        The biggest gaming award event in Indonesia is coming.
                      </p>
                    </div>
                    <div className="bg-white w-[80px] h-[80px] rounded-full text-black flex justify-center items-center hover:scale-110 transition-all duration-200 ">
                      <div className="w-[20px] h-[20px] rotate-45">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSession;
