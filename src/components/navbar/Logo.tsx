import Image from "next/image";
import React from "react";

const Logo: React.FC<{ size?: string }> = ({ size = "reguler" }) => {
  const sizeClasses: any = {
    large: "w-[223px] h-[72px]",
    reguler: "w-[200px] h-[56px]",
    small: "",
  };

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      <Image
        alt=""
        src={"/logo/icc-dgcon--logoatas.png"}
        fill
        objectFit="contain"
      />
    </div>
  );
};

export default Logo;
