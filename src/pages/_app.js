
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import React from "react";
import Head from "next/head";
import AppData from "@data/app.json";
import { appWithTranslation } from 'next-i18next';
import '../styles/scss/style.scss';
import "../styles/globals.css";
import nextI18NextConfig from '../../next-i18next.config'
import { register } from "swiper/element/bundle";
import { Readex_Pro , Outfit } from 'next/font/google'
const readexPro = Readex_Pro({
  subsets: ['latin', 'arabic'], // Include Arabic subset
  variable: '--font-readex-pro',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    fontFamily: outfit.style.fontFamily,
  });
  return (
    <MantineProvider theme={theme}>
      <style jsx global>
        {`
          :root {
            --font-readex-pro: ${readexPro.style.fontFamily}; 
            --font-outfit: ${outfit.style.fontFamily};
          }

          body {
            font-family: var(--font-outfit); /* Default to Outfit */
          }

          /* Target Arabic text using lang attribute */
          :lang(ar) {
            font-family: var(--font-readex-pro); 
          }
        `}
        </style>
    <>
      <Head>
          {/* seo begin */}
          <title>{AppData.settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}        
      </Head>
      <Component {...pageProps} />
    </>
    </MantineProvider>
  );
}

export default appWithTranslation(MyApp,nextI18NextConfig);
