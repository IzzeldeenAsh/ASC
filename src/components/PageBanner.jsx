import Head from 'next/head';
import { useRouter } from 'next/router';
import AppData from "@data/app.json";
import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import Image from 'next/image';
import { useEffect, useRef, useMemo } from 'react';
import { useLocale } from '@/utils/getLocale';
import aboutData from "@data/sections/about.json";
import AboutContent from './AboutContent';
import aboutDataContent from "@/src/data/sections/aboutUs.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { FaShareAlt } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

const PageBanner = ({ pageTitle, breadTitle, shareTitle, shareDescription, breadColor, subtext = "", anchorLink = 0, paddingBottom, align, headingSize = 1, imgUrl, bg, isService, service }) => {
  const { activeLocale } = useLocale();
  const bgBanner = useMemo(() => ({
    position: 'relative',
    overflow: 'hidden',
    minHeight: '35em',
    backgroundColor: "#0a1b30",
    height: "88vh"
  }), []);

  const labels = {
    english: {
      experts: "Experts",
      relatedArticles: "Related articles",
      projects: "Projects",
    },
    arabic: {
      experts: "الخبراء",
      relatedArticles: "مقالات ذات صلة",
      projects: "مشاريع",
    },
  };

  const bgBannerBefore = useMemo(() => ({
    content: '""',
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transform: activeLocale === 'ar' ? 'scaleX(-1)' : 'none',
  }), [bg, activeLocale]);

  const serviceImageRef = useRef(null);
  useEffect(() => {
    if (serviceImageRef.current) {
      serviceImageRef.current.classList.add("reveal");
    }
  }, []);

  const { asPath } = useRouter();
  let clearBreadTitle;
  if (breadTitle != undefined) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }

  const headTitle = `${AppData.settings.siteName} - ${clearBreadTitle}`;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className={paddingBottom ? "mil-inner-banner mil-p-0-120 position-relative" : "mil-inner-banner position-relative"}>
      <div className={align == "center" ? "mil-banner-content mil-up" : "mil-banner-content mil-up"} style={bg ? bgBanner : {}}>
        {bg && <div style={bgBannerBefore} className='d-none d-sm-block' />}
        <div className={bg ? "bannderOverlay" : ""}>
          <div className={paddingBottom ? "container mil-p-0-30" : "container"}>
            <ul className={breadColor === "light" ? "mil-breadcrumbs-light mil-breadcrumbs mil-mb-120" : "mil-breadcrumbs mil-mb-120"}>
              <li className={breadColor === "light" ? "mil-light" : ""}>
                <Link href="/">{activeLocale === 'ar' ? "الرئيسية" : "Homepage"}</Link>
              </li>
              {asPath.indexOf('/sectors/') !== -1 &&
                <li className={breadColor === "light" ? "mil-light" : ""}>
                  <Link href="/sectors">
                    {activeLocale === 'ar' ? "القطاعات" : "Sectors"}
                  </Link>
                </li>
              }
              {service?.id &&
                <li className={breadColor === "light" ? "mil-light" : ""}>
                  <Link href={`/services/${service.id}`}>
                    {activeLocale === 'ar' ? service.name.arabic : service.name.english}
                  </Link>
                </li>
              }
              <li className={breadColor === "light" ? "mil-light" : ""}>
                <a href='/' dangerouslySetInnerHTML={{ __html: clearBreadTitle }} />
              </li>
            </ul>
            {headingSize === 1 &&
              <div className={`banner-title-and-image-container ${align === "center" ? "d-flex justify-content-center" : ""}`}>
                <div className={` heading-1  ${align === "center" ? "max-width-fit" : ""}`}>
                  {pageTitle &&
                    <div className='d-flex'>
                      <TitleHead />
                      <h2 className={bg ? "mil-light mil-mb-20 pt-2" : " pt-2"} dangerouslySetInnerHTML={{ __html: pageTitle }} />
                    </div>
                  } 
                  <div className='mil-share d-flex'>
                  <span className='share-icon'>  <FaShareAlt style={{paddingBottom:"1px"}}/></span>
                   <div className="d-flex gap-10 share-icons">
                   <FacebookShareButton className='social-media-btn' url={shareUrl} quote={shareTitle} hashtag="#consulting" description={shareDescription} media={imgUrl}>
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton className='social-media-btn' url={shareUrl} title={shareTitle}  hashtag="#consulting" description={shareDescription} media={imgUrl}>
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <LinkedinShareButton className='social-media-btn' url={shareUrl} title={shareTitle} summary={shareDescription} source={shareUrl}>
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                   </div>
                  </div>
                  <p style={{ paddingInlineStart: "50px" }} className={bg ? "mil-light mil-mb-60 max-w-600px mil-text-xl" : "mil-mb-60"} dangerouslySetInnerHTML={{ __html: subtext }} />
                  {isService &&
                    <div className="d-flex align-items-end ">
                      <ul className="service-banner-links p-inline-start-40 mil-text mil-up d-flex gap-20 justify-content-start mil-light">
                        <li><span>{activeLocale === 'ar' ? labels.arabic.experts : labels.english.experts}</span></li>
                        <li><span>{activeLocale === 'ar' ? labels.arabic.relatedArticles : labels.english.relatedArticles}</span></li>
                        <li><span>{activeLocale === 'ar' ? labels.arabic.projects : labels.english.projects}</span></li>
                      </ul>
                    </div>
                  }
                </div>
                {imgUrl && <div className='service-image' ref={serviceImageRef}>
                  <Image src={imgUrl} width={585} height={280} alt="service-image"  fetchPriority="high" />
                </div>}
              </div>
            }
            {headingSize === 2 &&
              <div className={`banner-title-and-image-container ${align === "center" ? "d-flex justify-content-center" : ""}`}>
                <div className={`d-flex heading-1 ${align === "center" ? "max-width-fit" : ""}`}>
                  <TitleHead />
                  <h2 className={anchorLink !== 0 ? "mil-mb-60" : ""} dangerouslySetInnerHTML={{ __html: pageTitle }} />
                </div>
              </div>
            }
            {asPath.indexOf('/about') !== -1 &&
              <div className="row justify-content-center">
                <div className="col-lg-8 mil-light">
                  <ul className="service-banner-links mil-text mil-up d-flex gap-20 justify-content-center mil-light">
                    {aboutData.sections.map((section, key) => (
                      section.title.english === 'Leaders' ?
                        <li key={key}><a className='mil-hover-primary' style={{ textTransform: "uppercase" }} href={`/?section=leaders`}>
                          {activeLocale === 'ar' ? section.title.arabic : section.title.english}</a>
                        </li>
                        :
                        <li key={key}><a className='mil-hover-primary' style={{ textTransform: "uppercase" }} href={`#${section.anchor}`}>
                          {activeLocale === 'ar' ? section.title.arabic : section.title.english}</a>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
      {asPath.indexOf('/about') !== -1 &&
       <div className='about-banner'>
        <AboutContent content={  activeLocale === "ar"
           ? aboutDataContent.contentHtml.arabic
           : aboutDataContent.contentHtml.english} opacity={1} />
        </div>
      }
     
    </div>
  );
};

export default PageBanner;
