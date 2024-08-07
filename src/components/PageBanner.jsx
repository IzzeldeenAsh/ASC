
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
import { FaShareAlt } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from 'next-share';

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
              {asPath.indexOf('/services/') !== -1 &&
                <li className={breadColor === "light" ? "mil-light" : ""}>
                  <Link href="/services">
                    {activeLocale === 'ar' ? "الخدمات" : "Services"}
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
                       { asPath.indexOf('/sectors/') !== -1 && <p style={{ paddingInlineStart: "50px" }} className={bg ? "mil-light mil-mb-15 max-w-600px mil-text-xl" : "mil-mb-15"} dangerouslySetInnerHTML={{ __html: subtext }} />}
                
             
               
                  
                  
                  {isService &&
                    <div className="d-flex align-items-end " >
                      <ul className="service-banner-links p-inline-start-40 mil-text mil-up d-flex gap-20 justify-content-start mil-light " style={{position:"relative"}}>
                        <li><span>{activeLocale === 'ar' ? labels.arabic.experts : labels.english.experts}</span></li>
                        <li><span>{activeLocale === 'ar' ? labels.arabic.relatedArticles : labels.english.relatedArticles}</span></li>
                        <li><span>{activeLocale === 'ar' ? labels.arabic.projects : labels.english.projects}</span></li>
                      </ul>
                    </div>
                  }
                   {
                  ( asPath.indexOf('/sectors/') !== -1 || asPath.indexOf('/services/') !== -1 || asPath.indexOf('/subservice/') !== -1) && 
                    <div className='mil-share d-flex' >
                    <span className='share-icon'>  <FaShareAlt color="#0A1B2F" style={{paddingBottom:"1px"}}/></span>
                     <div className="d-flex gap-10 share-icons">
                     <FacebookShareButton 
                     className='social-media-btn' 
                     url={shareUrl} 
                     quote={breadTitle} 
                     hashtag="#consulting" 
                     media={bg ? bg : imgUrl}>
                     <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#0A1B2F"/>
<path d="M16.347 16.721V22.0648H13.8923V16.721H11.853V14.5542H13.8923V13.7658C13.8923 10.839 15.115 9.30005 17.7019 9.30005C18.495 9.30005 18.6932 9.42751 19.1275 9.53136V11.6745C18.6413 11.5896 18.5044 11.5424 17.9993 11.5424C17.3998 11.5424 17.0788 11.7123 16.7861 12.0475C16.4934 12.3826 16.347 12.9633 16.347 13.7941V14.5589H19.1275L18.3817 16.7257H16.347V16.721Z" fill="white"/>
</svg>



                      </FacebookShareButton>
                      <TwitterShareButton 
                      className='social-media-btn' 
                      url={shareUrl} 
                      title={shareTitle}  
                      hashtag="#consulting" 
                      media={bg ? bg : imgUrl}>
                      <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.9647" cy="15.5" r="15.5" fill="#0A1B2F"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13.5374 9.84705H9.39996L14.3055 16.2928L9.71377 21.7H11.8353L15.3082 17.6104L18.392 21.6624H22.5294L17.4813 15.0293L17.4902 15.0408L21.8367 9.92234H19.7152L16.4874 13.7234L13.5374 9.84705ZM11.6837 10.9759H12.9718L20.2456 20.5335H18.9576L11.6837 10.9759Z" fill="white"/>
</svg>

                      </TwitterShareButton>
                      <LinkedinShareButton className='social-media-btn' url={shareUrl} title={shareTitle}  source={shareUrl}>
                      <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16.1058" cy="15.5" r="15.5" fill="#0A1B2F"/>
<path d="M12.6058 13.4976H9.93854V22.0033H12.6058V13.4976Z" fill="white"/>
<path d="M19.8209 13.313C19.7226 13.3007 19.6181 13.2946 19.5136 13.2884C18.0202 13.227 17.1783 14.112 16.8833 14.493C16.8034 14.5975 16.7665 14.6589 16.7665 14.6589V13.522H14.216V22.0277H16.7665H16.8833C16.8833 21.1611 16.8833 20.3007 16.8833 19.4342C16.8833 18.9671 16.8833 18.5 16.8833 18.033C16.8833 17.4553 16.8402 16.8407 17.1291 16.3122C17.3749 15.8697 17.8174 15.6484 18.3152 15.6484C19.7902 15.6484 19.8209 16.982 19.8209 17.105C19.8209 17.1111 19.8209 17.1172 19.8209 17.1172V22.0646H22.4882V16.515C22.4882 14.6159 21.5233 13.4974 19.8209 13.313Z" fill="white"/>
<path d="M11.2722 12.3975C12.1275 12.3975 12.8209 11.7041 12.8209 10.8488C12.8209 9.99344 12.1275 9.30005 11.2722 9.30005C10.4168 9.30005 9.72345 9.99344 9.72345 10.8488C9.72345 11.7041 10.4168 12.3975 11.2722 12.3975Z" fill="white"/>
</svg>

                      </LinkedinShareButton>
                      <WhatsappShareButton className='social-media-btn' url={shareUrl} title={shareTitle} separator=":: ">
                      <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15.5" cy="15.5" r="15.5" fill="#0A1B2F"/>
<path d="M21.4482 12.9725C21.1238 12.2558 20.6582 11.6123 20.0671 11.0578C19.4759 10.5085 18.7906 10.0743 18.0268 9.77088C17.2369 9.45699 16.3998 9.30005 15.5367 9.30005C14.6735 9.30005 13.8364 9.45699 13.0465 9.77088C12.2827 10.0743 11.5974 10.5033 11.0062 11.0578C10.4151 11.6123 9.94948 12.2558 9.62514 12.9725C9.29032 13.7154 9.11768 14.5106 9.11768 15.3267C9.11768 16.7548 9.65128 18.1255 10.6296 19.2136L10.1064 22.0648L12.8895 20.8249C13.7213 21.1806 14.6055 21.3585 15.5314 21.3585C16.3946 21.3585 17.2316 21.2016 18.0216 20.8877C18.7854 20.5843 19.4707 20.1553 20.0619 19.6007C20.653 19.0462 21.1186 18.4027 21.4429 17.686C21.7778 16.9432 21.9504 16.148 21.9504 15.3319C21.9556 14.5106 21.783 13.7206 21.4482 12.9725Z" fill="white"/>
<path d="M18.1419 16.5298C17.8699 16.3938 17.6711 16.3101 17.5299 16.2578C17.4409 16.2264 17.2317 16.1322 17.1584 16.1898C16.9282 16.3781 16.6824 16.9117 16.4208 17.0111C15.7721 16.8856 15.1705 16.4409 14.6996 15.9858C14.4904 15.787 14.1033 15.222 14.0196 15.0703C14.0039 14.9133 14.2864 14.7041 14.3491 14.5837C14.6735 14.2175 14.4276 13.9874 14.3858 13.8356C14.3125 13.6787 14.187 13.3962 14.0771 13.166C13.9829 13.0143 13.962 12.7894 13.7946 12.7057C13.0831 12.3395 12.6751 13.0719 12.5077 13.4537C11.498 15.8864 17.5665 20.5162 18.8011 17.325C18.8639 17.0477 18.8377 16.9431 18.7435 16.8176C18.5552 16.6868 18.3355 16.6292 18.1419 16.5298Z" fill="#0A1B2F"/>
</svg>

</WhatsappShareButton>
                     </div>
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
