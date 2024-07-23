import React from 'react';
import Data from "@data/sections/hero-2.json";
import Layouts from "@layouts/Layouts";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Link from "next/link";
import { useLocale } from "@/utils/getLocale";
import Pentagon from "@layouts/pentagon/Index";
import { NextSeo } from 'next-seo';

const CEOWord = () => {
  const { activeLocale } = useLocale();

  const pageTitle = activeLocale === 'ar' ? "كلمة الرئيس التنفيذي - A&B للاستشارات" : "CEO's Word - A&B Consulting";
  const description = activeLocale === 'ar' ? "كلمة الرئيس التنفيذي - A&B للاستشارات" : "CEO's Word - A&B Consulting";
  const keywords = activeLocale === 'ar' ? "الرئيس التنفيذي, A&B للاستشارات, القيادة, استراتيجية الأعمال" : "CEO, A&B Consulting, leadership, business strategy";

  return (
    <>
      {/* SEO Metadata */}
      <NextSeo
        title={pageTitle}
        description={description}
        canonical="https://asc-seven-liard.vercel.app/ceo-word"
        openGraph={{
          url: "https://asc-seven-liard.vercel.app/ceo-word",
          title: pageTitle,
          description: description,
          images: [
            {
              url: Data.image.url,
              width: 800,
              height: 600,
              alt: pageTitle,
              type: 'image/jpeg',
            },
          ],
          siteName: 'A&B Alokab Consulting',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords,
          },
        ]}
      />

      {/* Page Content */}
      <Layouts>
        <div className={activeLocale === "ar" ? "arrow-ar-ceo" : "arrow-en-ceo"}>
          <Link href="/" legacyBehavior>
            <a className="mil-link mil-dark mil-arrow-place">
              <div style={activeLocale === 'en' ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }}>
                <ArrowIcon />
              </div>
            </a>
          </Link>
        </div>

        <section className="mil-banner-personal">
          <div className="mil-animation-frame">
            <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="7" data-value-2="1.4" style={{ right: "25%" }}>
              <Pentagon />
            </div>
          </div>
          <div className="container">
            <div className="mil-banner-content mil-up">
              <div className="row align-items-start">
                <div className="col-lg-6">
                  <div className="mil-personal-text">
                    <p className="mil-mb-90">{activeLocale === 'ar' ? Data.subtitle.arabic : Data.subtitle.english}</p>
                    <h1 className="mil-mb-30" dangerouslySetInnerHTML={{ __html: activeLocale === 'ar' ? Data.title.arabic : Data.title.english }} />
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <span style={{ opacity: "0.7" }} className="mil-suptitle mil-suptitle-dark mil-mb-60" dangerouslySetInnerHTML={{ __html: activeLocale === 'ar' ? Data.text.arabic : Data.text.english }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div className="mil-portrait-frame">
                  <img src={Data.image.url} alt={Data.image.alt} />
                </div>
                <div className="mil-banner-panel">
                  <h5 dangerouslySetInnerHTML={{ __html: activeLocale === 'ar' ? Data.bottom.title.arabic : Data.bottom.title.english }} />
                  <p dangerouslySetInnerHTML={{ __html: activeLocale === 'ar' ? Data.bottom.content.arabic : Data.bottom.content.english }} />
                  <h5 dangerouslySetInnerHTML={{ __html: activeLocale === 'ar' ? Data.bottom.ending.arabic : Data.bottom.ending.english }} />
                  <div className="text-dark" style={{ display: "flex", flexDirection: "column", fontWeight: "bolder" }}>
                    <span>{activeLocale === 'ar' ? "الرئيس التنفيذي، A&B للاستشارات" : "CEO, A&B Consulting"}</span>
                    <span>{activeLocale === 'ar' ? "خلدون زعمط" : "KHALDUN ZOMOT"}</span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layouts>
      {/* banner end */}
    </>
  );
}

export default CEOWord;
