import localFont from "@next/font/local";

const Pretender = localFont({
  src: [
    {
      path: "./pretendard/Pretendard-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./pretendard/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./pretendard/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./pretendard/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./pretendard/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./pretendard/Pretendard-Medium.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export default Pretender