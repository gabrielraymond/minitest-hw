import React from "react";

const Container = ({ children, className }: any) => {
  return (
    <div
      className={`${className} max-w-xl md:max-w-3xl lg:max-w-[1024px] responsive-lg:max-w-[1280px] responsive-xl:max-w-[1500px] responsive-2xl:max-w-[1800px] px-4 responsive-2xl:px-12 mx-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
