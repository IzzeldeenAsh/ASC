import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import React, { useEffect, useState } from "react";
import Head from "next/head";
import AppData from "@data/app.json";
import { appWithTranslation } from 'next-i18next';
import '../styles/scss/style.scss';
import "../styles/globals.css";
import nextI18NextConfig from '../../next-i18next.config'
import { register } from "swiper/element/bundle";
import { IBM_Plex_Sans_Arabic, Outfit } from 'next/font/google';
import NProgress from 'nprogress'; // Import NProgress
import 'nprogress/nprogress.css'; // Import NProgress styles
import Router from 'next/router';
import Loader from '@components/Loader'; // Import your custom Loader component
import SearchBar from '../components/SearchBar';

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['latin', 'arabic'], // Include Arabic subset
  weight: ['200', '300', '400', '500', '600', '700'], // Specify available weights
  variable: '--font-ibm-plex-sans-arabic',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false); // State to manage loading

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
      NProgress.start();
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
      NProgress.done();
    };

    const handleRouteChangeError = () => {
      setLoading(false);
      NProgress.done();
    };

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);

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

          html:lang(ar) {
            font-weight: 400;
          }

          body:lang(ar) {
            font-weight: 400;
          }

          /* Customize NProgress */
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: #F5D74C; /* Change the color */
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }

          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #F5D74C, 0 0 5px #F5D74C;
            opacity: 1.0;
            transform: rotate(3deg) translate(0px, -4px);
          }

          #nprogress .spinner {
            display: none; /* Hide the default spinner */
          }
        `}
      </style>
      <>
        <Head>
          {/* SEO begin */}
          <title>{AppData.settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* SEO end */}
        </Head>
        {loading && <Loader />} {/* Conditionally render Loader */}
        <SearchBar/>
        <Component {...pageProps} />
      </>
    </MantineProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
