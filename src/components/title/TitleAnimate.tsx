"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useLayoutEffect, useRef } from "react";

const TitleAnimate: React.FC<{
  direction: string;
  children: any;
  className?: string;
}> = ({ direction, children, className }) => {
  const title = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(title.current, { opacity: 0 });
    gsap.to(title.current, {
      delay: 0.3,
      ease: "power2",
      onComplete: animationTitle,
    });
  }, []);

  const animationTitle = () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: title.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
    tl.set(title.current, {
    //   opacity: 0,
      translateX: direction === "left" ? "-300px" : "300px",
    });
    tl.to(title.current, { opacity: 1, translateX: "0px", ease: "none" });
  };

  return (
    <div className={className} ref={title}>
      {children}
    </div>
  );
};

export default TitleAnimate;
