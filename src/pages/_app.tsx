import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion as m } from "framer-motion";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import nextI18NextConfig from "../../next-i18next.config";
import Pretender from "@/styles/fonts/fonts";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* google analytics */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-WD3H1V6NHH"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  `}
      </Script>
      <main className={Pretender.className}>
        <ChakraProvider>
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </ChakraProvider>
      </main>
    </>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
