import Head from 'next/head';
import Link from "next/link";
import { useRouter } from 'next/router';
import AppData from "@data/app.json";
import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import Image from 'next/image';
import { useEffect, useRef, useMemo } from 'react';
import { useLocale } from '@/utils/getLocale';
import aboutData from "@data/sections/about.json"
const PageBanner = ({ pageTitle, breadTitle, breadColor,subtext="",anchorLink = 0, paddingBottom, align, headingSize = 1 ,imgUrl,bg,isService}) => {
  const { activeLocale } = useLocale();
  const bgBanner = useMemo(() => ({
    position: 'relative',
    overflow: 'hidden',
    minHeight: '35em',
    backgroundColor:"#0a1b30"
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
  
  const serviceImageRef = useRef(null)
  useEffect(()=>{
    if(serviceImageRef.current){
      serviceImageRef.current.classList.add("reveal")
    }
  },[])
  const { asPath } = useRouter();
  let clearBreadTitle;
  if ( breadTitle != undefined ) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }

  const headTitle = `${AppData.settings.siteName} - ${clearBreadTitle}`;
  
  return (
    <div className={paddingBottom ? "mil-inner-banner mil-p-0-120" : "mil-inner-banner"}>
      <div className={align == "center" ? "mil-banner-content mil-center mil-up" : "mil-banner-content mil-up"} style={bg ? bgBanner : {}}>
        {bg && <div style={bgBannerBefore} className='d-none d-sm-block' />}
        <div className={bg ? "bannderOverlay" : ""}>
          <div className={paddingBottom ? "container mil-p-0-30" : "container"}>
            <ul className={breadColor === "light" ? "mil-breadcrumbs-light mil-breadcrumbs mil-mb-120" : "mil-breadcrumbs mil-mb-120"}>
             
              <li className={breadColor === "light" ? "mil-light" : ""}>
                <Link href="/">{activeLocale === 'ar' ? "الرئيسية" : "Homepage"}</Link>
              </li>
              {asPath.indexOf('/blog/') !== -1 &&
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              }
              {asPath.indexOf('/sectors/') !== -1 &&
                <li className={breadColor === "light" ? "mil-light" : ""}>
                  <Link href="/sectors">
                 {activeLocale ==='ar' ? "القطاعات" : "Sectors"}
                  </Link>
                </li>
              }
              {asPath.indexOf('/services/') !== -1 &&
                <li className='mil-light'>
                  <Link href="/services">   {activeLocale ==='ar' ? "الخدمات" : "Services"}</Link>
                </li>
              }
              <li className={breadColor === "light" ? "mil-light" : ""}><a dangerouslySetInnerHTML={{ __html: clearBreadTitle }} /></li>
            </ul>
            {headingSize === 1 &&
              <div className={`banner-title-and-image-container ${align === "center" ? "d-flex justify-content-center" : ""}`}>
                <div className={` heading-1  ${align === "center" ? "max-width-fit" : ""}`}>
                {/* <div className='d-flex'>
                <TitleHead style={{width:"40px", height:"10px"}} />
                <h2 className={bg ? "mil-light mil-mb-20 pt-3" : "mil-mb-60  pt-3"} dangerouslySetInnerHTML={{ __html: pageTitle }} />
                </div> */}
                {pageTitle &&
                  <div className='d-flex'>
                  <TitleHead  />
                  <h2 className={bg ? "mil-light mil-mb-20 pt-2" : " pt-2"} dangerouslySetInnerHTML={{ __html: pageTitle }} />
                  </div>
                  }
              
                  <p style={{paddingInlineStart:"50px"}} className={bg ? "mil-light mil-mb-60 max-w-600px mil-text-lg" : "mil-mb-60"} dangerouslySetInnerHTML={{ __html: subtext }} />
                  {isService &&
    <div className="d-flex align-items-end " >
      <ul className=" service-banner-links p-inline-start-40 mil-text mil-up d-flex gap-20 justify-content-start mil-light">
        <li><span>{activeLocale === 'ar' ? labels.arabic.experts : labels.english.experts}</span></li>
        <li><span>{activeLocale === 'ar' ? labels.arabic.relatedArticles : labels.english.relatedArticles}</span></li>
        <li><span>{activeLocale === 'ar' ? labels.arabic.projects : labels.english.projects}</span></li>
      </ul>
    </div>
  }
                </div>
                {imgUrl && <div className='service-image' ref={serviceImageRef}>
                  <Image src={imgUrl} width={585} height={280} alt="service-image" priority fetchPriority="high" />
                </div>}
              </div>
            }
            {headingSize === 2 &&
              <div className={`banner-title-and-image-container ${align === "center" ? "d-flex justify-content-center" : ""}`}>
                <div className={` d-flex heading-1 ${align === "center" ? "max-width-fit" : ""}`}>
                  <div className="title-yellow-head">
                    <TitleHead />
                  </div>
                  <h2 className={anchorLink !== 0 ? "mil-mb-60" : ""} dangerouslySetInnerHTML={{ __html: pageTitle }} />
                </div>
              </div>
            }
            {asPath.indexOf('/about') !== -1 &&
              <div className="row justify-content-center">
                <div className="col-lg-8 mil-light">
                  <ul className="mil-text mil-up mil-mb-60 d-flex flex-column flex-sm-row gap-20 justify-content-start align-items-start align-items-md-center justify-content-md-center">
                    {aboutData.sections.map((section, key) => (
                      <li key={key}><a className='mil-hover-primary' href={`#${section.anchor}`}>{activeLocale === 'ar' ? section.title.arabic : section.title.english}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageBanner;


