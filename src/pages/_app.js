import React from "react";
import Head from "next/head";
import AppData from "@data/app.json";
import { appWithTranslation } from 'next-i18next';
import '../styles/scss/style.scss';
import "../styles/globals.css";
import nextI18NextConfig from '../../next-i18next.config'
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          {/* seo begin */}
          <title>{AppData.settings.siteName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* seo end */}        
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp,nextI18NextConfig);
