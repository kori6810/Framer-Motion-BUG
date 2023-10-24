import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AnimatedDiv from "@/components/atoms/animationedComponents/AnimatedDiv";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import History from "@/components/History";
import { useRouter } from "next/router";
import { useTranslation, UseTranslation } from "next-i18next";
function About() {
  const router = useRouter();
  const { t } = useTranslation("about");
  const getTab = () => {
    switch (router.query.tab) {
      case "history":
        return 0;
      case "vision":
        return 1;
      case "business":
        return 2;
      case "location":
        return 3;
      default:
        return 0;
    }
  };
  const [tabIndex, setTabIndex] = useState<number>(getTab());

  useEffect(() => {
    setTabIndex(getTab());
  }, [router.query]);

  const dynamicRouting = (tabIndex: number, tabName: string) => {
    router.push({
      pathname: "/about",
      query: { tab: tabName },
    });
    setTabIndex(tabIndex);
  };
  return (
    <>
      <div className=" scroll-smooth relative w-screen h-screen overflow-x-hidden bg-white">
        <div className="flex justify-center pt-[4.5rem] h-[24.0625rem] xl:h-[38.75rem]">
          <Image
            className="w-full h-[24.0625rem] xl:h-[38.75rem] absolute top-0 left-0 object-cover"
            src="/images/sub/nav_bg01.jpg"
            alt="bg"
            width={4000}
            height={1568}
          />
          {/* Hero */}
          <div className="flex flex-col items-center justify-center z-10 h-full">
            <AnimatedDiv>
              <h2 className=" font-extrabold text-[2rem] md:text-[3rem] xl:text-[4.8rem] text-white leading-[5.625rem]">
                About Us
              </h2>
            </AnimatedDiv>
            <div className="text-white flex items-center gap-2 text-[0.8rem] md:text-[1rem] md:mt-[1rem] xl:mt-[2.5rem]">
              <Image
                src="/icons/homebtn.png"
                alt="home"
                width={15}
                height={15}
                style={{ width: "auto", height: "auto" }}
              />
              <p className="home">HOME</p>
              <p className="home">/</p>
              <p className="dept1">About Us</p>
            </div>
            {/* Header end */}
          </div>
        </div>
        <Tabs
          defaultIndex={0}
          index={tabIndex}
          colorScheme="green"
          align="center"
          isLazy
          className="bg-white"
        >
          <TabList borderBottomColor={"#ddd"}>
            <Tab>
              <p
                onClick={() => dynamicRouting(0, "history")}
                className="md:text-[1.18rem]  md:px-[2.75rem] py-[.5rem] xl:px-[4.625rem] xl:py-[1.5rem]"
              >
                History
              </p>
            </Tab>
            <Tab>
              <p
                onClick={() => dynamicRouting(1, "vision")}
                className="md:text-[1.18rem]  md:px-[2.75rem] py-[.5rem] xl:px-[4.625rem] xl:py-[1.5rem]"
              >
                Vision
              </p>
            </Tab>
            <Tab>
              <p
                onClick={() => dynamicRouting(2, "business")}
                className="md:text-[1.18rem]  md:px-[2.75rem] py-[.5rem] xl:px-[4.625rem] xl:py-[1.5rem]"
              >
                Business
              </p>
            </Tab>
            <Tab>
              <p
                onClick={() => dynamicRouting(3, "location")}
                className="md:text-[1.18rem]  md:px-[2.75rem] py-[.5rem] xl:px-[4.625rem] xl:py-[1.5rem]"
              >
                Location
              </p>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel padding={0}>
              <History />
            </TabPanel>
            <TabPanel padding={0}>
              {/* <Vision /> */}
              some content
            </TabPanel>
            <TabPanel padding={0}>
              {/* <Business /> */}
              some content
            </TabPanel>
            <TabPanel>
              {/* <Location /> */}
              some content
            </TabPanel>
          </TabPanels>
        </Tabs>

      </div>
    </>
  );
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["about", "footer"])),
  },
});
export default About;
