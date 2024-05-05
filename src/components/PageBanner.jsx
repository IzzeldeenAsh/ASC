import Head from 'next/head';
import Link from "next/link";
import { useRouter } from 'next/router';
import AppData from "@data/app.json";
import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";
import { useLocale } from "@/utils/getLocale";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
const PageBanner = ({ pageTitle, breadTitle, anchorLabel, anchorLink = 0, paddingBottom, align, headingSize = 1 ,imgUrl}) => {
  const imageURL = imgUrl
  const serviceImageRef = useRef(null)
  useEffect(()=>{
    if(serviceImageRef.current){
      serviceImageRef.current.classList.add("reveal")
    }
  },[])
  const { asPath } = useRouter();
  let clearBreadTitle;
  const {activeLocale , t} = useLocale();
  if ( breadTitle != undefined ) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }

  const headTitle = `${AppData.settings.siteName} - ${clearBreadTitle}`;
  
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      
      {/* banner */}
      <div className={paddingBottom ? "mil-inner-banner mil-p-0-120" : "mil-inner-banner"}>
        <div className={align == "center" ? "mil-banner-content mil-center mil-up" : "mil-banner-content mil-up"}>
          {/* <div className="mil-animation-frame">
            <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="6" data-value-2="1.4"><Pentagon /></div>
          </div> */}
          <div className="container">
            <ul className={align == "center" ? "mil-breadcrumbs mil-center mil-mb-60" : "mil-breadcrumbs mil-mb-60"}>
              <li><Link href="/">Homepage</Link></li>
              {asPath.indexOf('/blog/') != -1 &&
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              }
              {asPath.indexOf('/projects/') != -1 &&
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              }
              {asPath.indexOf('/services/') != -1 &&
              <li>
                <Link href="/services">Services</Link>
              </li>
              }
              <li><a dangerouslySetInnerHTML={{__html : clearBreadTitle}} /></li>
            </ul>
            {headingSize == 1 &&
             <div className="banner-title-and-image-container">
                <div style={{position:'relative',flex:'1',justifyContent:"space-between"}}>
                    <div className="title-yellow-head"
                    style={activeLocale ==='ar' ? {right : '-40px', transform:'rotateY(180deg)'} : {left:'-40px'}}
                    >
                    <TitleHead/>
                    </div>
                    <h2 className=" mil-mb-60" dangerouslySetInnerHTML={{__html : pageTitle}} />
                </div>
               {imageURL &&  <div className='service-image' ref={serviceImageRef}>
                <Image src={imageURL} width={585} height={280} alt="service-image" priority={true} />
                {/* <img src={imageURL}/> */}
                </div>}
            </div>
           
            }
            {headingSize == 2 &&
            <div style={{position:'relative'}}>
            <div className="title-yellow-head"
            style={activeLocale ==='ar' ? {right : '-40px', transform:'rotateY(180deg)'} : {left:'-40px'}}
            >
            <TitleHead/>
            </div>
            <h2 className={anchorLink != 0 ? "mil-mb-60" : ""} dangerouslySetInnerHTML={{__html : pageTitle}} />
           </div>
          
            }
            {anchorLink != 0 &&
            <a href={anchorLink} className="mil-link mil-dark mil-arrow-place mil-down-arrow" aria-label={"Link"}>
                <span>{anchorLabel}</span>
                <ArrowIcon />
            </a>
            }
          </div>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};
export default PageBanner;


