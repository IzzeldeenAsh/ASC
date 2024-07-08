import React, { useMemo } from "react";
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import { useLocale } from "@/utils/getLocale";
import aboutData from "@/src/data/sections/aboutUs.json";
import data from "@data/sections/timeline.json";
import Together from "@components/sections/Together";
import CustomizedTimeline from "@components/mobile-timeline";
import ABLogoLight from "../layouts/svg-icons/AB-Logo-Light";
import { NextSeo } from 'next-seo';
import {HeaderMegaMenu} from "@components/HeeaderMegaMenu";
const About = () => {
  const postData = aboutData;
  const { activeLocale } = useLocale();
  const timelines = data.timeline;
  const bannerData = useMemo(
    () => ({
      pageTitle:
        activeLocale === "ar"
          ? postData.introTitle.arabic
          : postData.introTitle.english,
      breadTitle:
        activeLocale === "ar" ? postData.title.arabic : postData.title.english,
    }),
    [postData, activeLocale]
  );
  const getContentHtml = useMemo(() => {
    return activeLocale === "ar"
      ? postData.contentHtml.arabic
      : postData.contentHtml.english;
  }, [postData, activeLocale]);
  const pageTitle = activeLocale === "ar" ? postData.introTitle.arabic : postData.introTitle.english;
  const description = activeLocale === "ar" ? postData.contentHtml.arabic : postData.contentHtml.english;
  const keywords = "consulting, business growth, strategic solutions, efficiency, productivity, profitability";

  return (
    <Layouts>
      <NextSeo
        title={pageTitle}
        description={description}
        canonical="https://alokab.co/about"
        openGraph={{
          url: "https://alokab.co/about",
          title: pageTitle,
          description: description,
          images: [
            {
              url: postData.image,
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

      <div className="logoStyle">
        <ABLogoLight />
      </div>
      <PageBanner
        pageTitle={bannerData.pageTitle}
        breadColor={"light"}
        breadTitle={bannerData.breadTitle}
        align={"center"}
        headingSize={1}
        paddingBottom={0}
        bg={postData.image}
      />
   <div className="hero-nav">
        <HeaderMegaMenu/>
        </div>
        <div className="nav-shadow"></div>
      {/* publication */}
      <section id="blog">
        <div className="container mil-p-90-90">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="mil-text mil-up mil-mb-60"
                style={{ textAlign: "justify" }}
                dangerouslySetInnerHTML={{ __html: getContentHtml }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="mil-mb-30">
        <div style={{ backgroundColor: "#f2f2f2" }}>
          {activeLocale === 'ar' ? 
            <h2 className="mil-center mil-p-60-0">
              تاريخنا
              <div style={{ width: "300px", height: '3px', backgroundColor: '#F5D74C', margin: '20px auto', display: "block" }}></div>
            </h2> 
            :
            <h2 className="mil-center mil-p-60-0">
              <span className="mil-thin">Our</span> History
              <div style={{ width: "300px", height: '3px', backgroundColor: '#F5D74C', margin: '20px auto', display: "block" }}></div>
            </h2>
          }
        </div>
        
        <div className="d-flex">
          {timelines.map((item, key) => (
            <div className="tl-item" key={`time-line-item-${key}`}>
              <div
                className="tl-bg"
                style={{ backgroundImage: "url(https://placeimg.com/801/801/nature)" }}
              ></div>

              <div className="tl-year">
                <p className="f2 heading--sanSerif">{item.year}</p>
              </div>

              <div className="tl-content">
                <p>
                  <img src={item.logo} alt="logo"></img>
                </p>
                <h1>{activeLocale === 'ar' ? item.title.arabic : item.title.english}</h1>
                <p className="mil-text-sm">{activeLocale === 'ar' ? item.content.arabic : item.content.english}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mil-mb-30">
        <CustomizedTimeline />
      </section>

      <section id="mission">
        <div className="container mil-p-0-90">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="mil-mb-30">
                {activeLocale === 'ar' ? 
                  <h2 className="mil-center mil-p-60-0">
                    رسالتنا و رؤيتنا
                    <div style={{ width: "300px", height: '3px', backgroundColor: '#F5D74C', margin: '20px auto', display: "block" }}></div>
                  </h2> 
                  :
                  <h2 className="mil-center mil-p-60-0">
                    Mission <span className="mil-thin">and</span> Vision
                    <div style={{ width: "300px", height: '3px', backgroundColor: '#F5D74C', margin: '20px auto', display: "block" }}></div>
                  </h2>
                }
              </div>
              <div
                className="mil-center mil-up mil-mb-60"
                style={{ textAlign: "center" }}
                dangerouslySetInnerHTML={{ __html: activeLocale === 'ar' ? postData.mission.arabic : postData.mission.english }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mil-soft-bg">
        <Together />
      </section>
    </Layouts>
  );
};

export default About;
