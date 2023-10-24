import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { AboutData } from "@/data/about/AboutData";
import Head from "next/head";
import {
  useScroll,
  useTransform,
  motion,
  useViewportScroll,
} from "framer-motion";
import { useRef } from "react";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
/**
 * History tab in About Page
 */

const History = () => {
  const [selected, setSelected] = React.useState<string>("");
  const [data, setData] = useState<any>([]);
  const [viewportSize, setViewportSize] = useState<any>(null); // Track viewport width

  const router = useRouter();
  const { t } = useTranslation("about");

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  console.log(scrollYProgress);

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div>
      <Head>
        <title>매니지온 | History</title>
      </Head>
      <div>
        <h3 className="text-[2.3rem] lg:text-[2.625rem] font-[700] text-center mt-[5rem] w-full tracking-tighter">
          History
        </h3>
        <p className=" text-[1rem] md:text-[1.8rem] lg:text-[2.0625rem] text-[#1f1f1f] mx-auto mt-[1rem] mb-[7rem] xl:mt-[5rem] xl:mb-[9.375rem] ">
          Title Main
          <span
            className="bg bg-no-repeat bg-center  "
            style={{
              backgroundImage: "url(/images/sub/gr-underline02.png)",
              backgroundSize: "100%",
              backgroundPosition: "bottom",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            voluptas illo recusandae eaque reiciendis. Illum repellendus harum
            dicta maxime placeat reiciendis. Dolore?
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          facilis officia ut!
        </p>
      </div>
      <div ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <p className="absolute top-[10%] font-[700] left-6 md:hidden">
          <ArrowBackIcon /> Swipe Left
        </p>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];

export default History;
