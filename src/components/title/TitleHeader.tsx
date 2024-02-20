// import gsap from "gsap";
import { Barlow_Condensed } from "next/font/google";
import React from "react";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const TitleHeader: React.FC<{ text: string; size?: string }> = ({
  text,
  size = "reguler",
}) => {
  // const ref: any = useRef(null);
  // useLayoutEffect(() => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".titleHeader",
  //       scrub: false,
  //       start: "-400% center",
  //       end: "400% center",
  //       // markers: true,
  //     },
  //   });

  //   tl.fromTo(ref.current, { y: "200%" }, { y: "0%", delay:0.2, duration:0.5 });
  // }, []);

  return (
    <div className="titleHeader overflow-hidden ">
      <h1
        className={`${size === "large" ? "text-6xl md:text-7xl xl:text-9xl font-extrabold" : "text-4xl md:text-5xl xl:text-7xl font-bold"} ${
          barlow.style
        }   mb-6 z-20 relative uppercase text-center`}
        // ref={ref}
      >
        {text}
      </h1>
    </div>
  );
};

export default TitleHeader;
