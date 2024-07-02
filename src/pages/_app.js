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
import { IBM_Plex_Sans_Arabic, Outfit } from 'next/font/google'

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['latin', 'arabic'], // Include Arabic subset
  weight: [ '400', '500', '600', '700'], // Specify available weights
  variable: '--font-ibm-plex-sans-arabic',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify available weights if needed
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
            --font-ibm-plex-sans-arabic: ${ibmPlexSansArabic.style.fontFamily}; 
            --font-outfit: ${outfit.style.fontFamily};
          }

          body {
            font-family: var(--font-outfit); /* Default to Outfit */
          }

          /* Target Arabic text using lang attribute */
          :lang(ar) {
            font-family: var(--font-ibm-plex-sans-arabic); 
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

export default appWithTranslation(MyApp, nextI18NextConfig);
