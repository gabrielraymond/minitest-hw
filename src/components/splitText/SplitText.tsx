import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    outlineColor: "white",
  },
};

const SplitText = () => {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });

  return (
    <div className="text-white">
      {/* <motion.h1
        className=" z-30 text-white font-medium text-[8vw] uppercase whitespace-nowrap"
        // data-scroll
        // data-scroll-speed="0.7"
        transition={{ staggerChildren: 0.1 }}
        initial="hidden"
        animate="visible"
        // style={{ x: textY }}
      >
        {"Gabriel Raymond".split("").map((char, idx) => (
          <motion.span variants={defaultAnimations} key={idx}>
            {char}
          </motion.span>
        ))}
      </motion.h1> */}
    </div>
  );
};

export default SplitText;
