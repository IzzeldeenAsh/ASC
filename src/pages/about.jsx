import React from "react";
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import { useMemo } from "react";
import { useLocale } from "@/utils/getLocale";
import aboutData from "@/src/data/sections/aboutUs.json";
import data from "@data/sections/timeline.json";
import Together from "@components/sections/Together";
import CustomizedTimeline from "@components/mobile-timeline";
import Link from "next/link";
const about = () => {
  const postData = aboutData;
  const { activeLocale } = useLocale();
  const timelines = data.timeline
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

  return (
    <Layouts>
      <PageBanner
        pageTitle={bannerData.pageTitle}
        breadTitle={bannerData.breadTitle}
        align={"center"}
        headingSize={2}
        paddingBottom={0}
      />

      {/* publication */}
      <section id="blog">
        <div className="container mil-p-30-0">
        <div className="row justify-content-center">
            <div className="col-lg-8">
            <ul    className="mil-text mil-up mil-mb-60 d-flex gap-20 justify-content-center">
          <li><span>Mission</span></li>
          <li><span>Vision</span></li>
          <li><a href="#timeline" className="mil-hover-primary"><span>History</span></a></li>
          <li><Link href={"/team"} className="mil-hover-primary"><span>Leaders</span></Link></li>
          <li><span>News</span></li>
          <li><span>A&B Philosophy</span></li>
        </ul>
            </div>
        </div>  
       
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="mil-text mil-up mil-mb-60"
                style={{ textAlign: "justify" }}
                dangerouslySetInnerHTML={{ __html: getContentHtml }}/>
            </div>
          </div>
        </div>
      </section>
      <h3 className="mil-center  mil-mb-30"> <span className="mil-thin">Our</span> History</h3>
      <section id="timeline">
        {
         timelines.map((item,key)=>(
            <div className="tl-item" key={`time-line-item-${key}`}>
          <div
            className="tl-bg"
            style={{backgroundImage: "url(https://placeimg.com/801/801/nature)"}}
          ></div>

          <div className="tl-year">
            <p className="f2 heading--sanSerif">{item.year}</p>
          </div>

          <div className="tl-content">
            <p>
              <img src={item.logo} alt="logo"></img>
            </p>
            <h1>{activeLocale ==='ar' ? item.title.arabic :item.title.english }</h1>
            <p className="mil-text-sm">{activeLocale ==='ar' ? item.content.arabic :item.content.english }</p>
          </div>
            </div>
          )
        )}
      </section>
      <section >
      <CustomizedTimeline/>
      </section>
 
      {/* publication end */}
      <Together/>
      {/* <RelatedPostsSection items={props.related} /> */}
    </Layouts>
  );
};

export default about;
