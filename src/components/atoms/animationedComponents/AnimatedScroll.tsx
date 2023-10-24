import { motion as m, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimatedScroll = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const mounted = useRef(false);
  useEffect(() => {
    // Function to animate the div going up and then coming back down
    const animateDiv = async () => {
      // Go up with opacity 1
      await controls.start({ y: -30, opacity: 1 });

      // Then come back down with opacity 0 (duration of 1 second)
      await controls.start({ y: 0, opacity: 0 }, { duration: 1 });
    };

    const interval = setInterval(() => {
      if (mounted.current) {
        animateDiv();
      } else {
        mounted.current = true;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div
      ref={ref}
      className="hidden md:block z-20 mx-auto mt-full mb-4 self-end"
    >
      <div className="w-[32px] relative h-[46px] rounded-3xl border border-white flex items-end justify-center">
        <m.div
          className="z-20 w-[5px] h-[5px] -translate-y-2 rounded-[50%] bg-white"
          animate={controls}
        ></m.div>
      </div>
      <p className="text-[14px] text-white">scroll</p>
    </div>
  );
};

export default AnimatedScroll;
