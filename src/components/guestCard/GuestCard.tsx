import Image from "next/image";
import React from "react";

const GuestCard: React.FC<{}> = () => {
  return (
    <div className="  w-full h-full rounded-xl hover:outline outline-2 outline-transparent hover:outline-wibu-50 hover:border-black border-transparent border-4 transition-all duration-100 delay-150">
      <div className="relative h-[370px] md:h-[450px] lg:h-[400px] responsive-lg:h-[375px] responsive-xl:h-[443px] responsive-2xl:h-[517px] w-full">
        <Image
          alt=""
          src={"/guests/hakaosan.6397957.webp"}
          fill
          objectFit="cover"
          className="rounded-md"
        />
        <div className="absolute w-full h-1/2 flex items-end justify-center pb-6 px-4 bottom-0 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)]">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Hakaosan</h1>
            <p className="mt-2">
              <span>Cosplayer</span> <span>Nov 4-5</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestCard;
