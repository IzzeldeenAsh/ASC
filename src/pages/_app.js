import React from "react";
import Head from "next/head";
import AppData from "@data/app.json";
import { appWithTranslation } from 'next-i18next';
import '../styles/scss/style.scss';
import "../styles/globals.css";
import nextI18NextConfig from '../../next-i18next.config'
import { register } from "swiper/element/bundle";
import { Readex_Pro , Outfit } from 'next/font/google'
const readexPro = Readex_Pro({ subsets: ['latin'], variable: '--font-readex-pro' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-readex-pro' });
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {

  return (
    <>
   <style global jsx>
        {`
          html {
            font-family: ${readexPro.style.fontFamily}
          }
          html[lang='en'] { 
          font-family: ${outfit.style.fontFamily}, sans-serif;
        }
        `}
      </style>
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
