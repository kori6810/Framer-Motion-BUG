// // import "./styles.css";
// // import "../styles/error.css"
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="overflow-hidden w-screen leading-[0.8] margin-0 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="font-[600] w-ful uppercase text-[64px flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        {/* <span>{children} </span> */}
        <span className="block mr-[30px] text-[3rem] lg:text-[5rem] text-white">
          {children}{" "}
        </span>
        <span className="block mr-[30px] text-[3rem] lg:text-[5rem] text-white">
          {children}{" "}
        </span>
        <span className="block mr-[30px] text-[3rem] lg:text-[5rem] text-white">
          {children}{" "}
        </span>
        <span className="block mr-[30px] text-[3rem] lg:text-[5rem] text-white">
          {children}{" "}
        </span>
        <span className="block mr-[30px] text-[3rem] lg:text-[5rem] text-white">
          {children}{" "}
        </span>
        <span className="block mr-[30px] text-[3rem] lg:text-[5rem] text-white">
          {children}{" "}
        </span>
        <span className="block mr-[30px] text-[3rem] lg:text-[5rem] text-white">
          {children}{" "}
        </span>
      </motion.div>
    </div>
  );
}

export default function ErrorPage() {
  const router = useRouter();
  return (
    <section className="bg-black ">
      <Head>
        <title>Error 404</title>
      </Head>

      <div className="w-full h-screen  flex  items-center px-30 overflow-hidden">
        <div className="absolute  w-screen h-full lg:h-screen overflow-hidden">
          <video
            className="w-full h-full  object-cover"
            src="/images/main/bg.mov"
            autoPlay
            loop
            muted
          />
          <div
            className="absolute w-full z-10 h-full lg:h-screen top-0 bottom-0 left-0  right-0 flex items-center justify-center flex-col"
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          >
            <div className="mb-[4rem]">
              <Link href={"/"}>
                <img
                  src="/images/nav/logo2.png"
                  alt="logo"
                  className="h-full w-[18.75rem]"
                />
              </Link>
            </div>
            <div className="w-[85vw] overflow-hidden">
              <ParallaxText baseVelocity={-2}>ERROR 404</ParallaxText>
              <ParallaxText baseVelocity={2}>PAGE NOT FOUND</ParallaxText>
            </div>
            <button
              className="flex select-none items-center gap-3 rounded-lg border border-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-green-500 transition-all hover:opacity-75 focus:ring focus:ring-green-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-[2rem]"
              type="button"
              data-ripple-dark="true"
              onClick={() => router.back()}
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
