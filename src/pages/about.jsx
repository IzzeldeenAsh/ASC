import React from "react";
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import { useMemo } from "react";
import { useLocale } from "@/utils/getLocale";
import aboutData from "@/src/data/sections/aboutUs.json";
import data from "@data/sections/timeline.json";
import Together from "@components/sections/Together";
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
      />

      {/* publication */}
      <section id="blog">
        <div className="container mil-p-120-90">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="mil-text mil-up mil-mb-60"
                style={{ textAlign: "justify" }}
                dangerouslySetInnerHTML={{ __html: getContentHtml }}
              />

              {/* {typeof postData.gallery != "undefined" &&
                      <>
                        {postData.gallery.enabled == 1 &&
                        <>
                          <div className="row">
                              {postData.gallery.items.map((item, key) => (
                              <div className="col-lg-6" key={`gallery-item-${key}`}>

                                  <div className="mil-image-frame mil-horizontal mil-up mil-mb-30">
                                      <img src={item.image} alt={item.alt} />
                                  </div>

                              </div>
                              ))}
                          </div>
                        </>
                        }
                      </>
                      }

                      {typeof postData.additional != "undefined" &&
                        <>
                          {postData.additional.enabled == 1 &&
                          <div className="mil-text mil-up" dangerouslySetInnerHTML={{__html : postData.additional.content}} />
                          }
                        </>
                      } */}
            </div>
          </div>
        </div>
      </section>
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
            <p>{activeLocale ==='ar' ? item.content.arabic :item.content.english }</p>
          </div>
            </div>
          )
        )}
      </section>
      {/* publication end */}
      <Together/>
      {/* <RelatedPostsSection items={props.related} /> */}
    </Layouts>
  );
};

export default about;
