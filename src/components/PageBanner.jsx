import Head from 'next/head';
import Link from "next/link";
import { useRouter } from 'next/router';
import AppData from "@data/app.json";
import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import { useLocale } from "@/utils/getLocale";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { BackgroundImage } from '@mantine/core';
const PageBanner = ({ pageTitle, breadTitle, anchorLink = 0, paddingBottom, align, headingSize = 1 ,imgUrl,bg}) => {
  const imageURL = imgUrl
  const bgBanner = {
    backgroundImage : `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }
  const bannderOverlay ={
    background: "rgb(255,255,255)",
    background: "-moz-linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(161,161,161,0) 30%, rgba(0,0,0,0.8372141092765231) 100%)",
    background: "-webkit-linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(161,161,161,0) 30%, rgba(0,0,0,0.8372141092765231) 100%)",
    background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(161,161,161,0) 30%, rgba(0,0,0,0.8372141092765231) 100%)",
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#000000',GradientType=1)"
  }
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
        <div className={align == "center" ? "mil-banner-content mil-center mil-up" : "mil-banner-content mil-up"} style={bg ? bgBanner : {} }>
          <div style={bg ? bannderOverlay : {} }>
          <div className="container" >
            <ul  className={bg ? "mil-breadcrumbs-light mil-breadcrumbs mil-mb-60" : "mil-breadcrumbs mil-mb-60 "}   >
              <li className={bg ? "mil-light":""}><Link href="/">Homepage</Link></li>
              {asPath.indexOf('/blog/') != -1 &&
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              }
              {asPath.indexOf('/sectors/') != -1 &&
              <li className= "mil-light">
                <Link href="/sectors">Sectors</Link>
              </li>
              }
              {asPath.indexOf('/services/') != -1 &&
              <li>
                <Link href="/services">Services</Link>
              </li>
              }
              <li  className={bg ? "mil-light":""}><a dangerouslySetInnerHTML={{__html : clearBreadTitle}} /></li>
            </ul>
            {headingSize == 1 &&
             <div className="banner-title-and-image-container">
                <div style={{position:'relative',flex:'1',justifyContent:"space-between"}}>
                    <div className="title-yellow-head">
                    <TitleHead/>
                    </div>
                    <h2 className={bg ? "mil-light mil-mb-60" : "mil-mb-60"} dangerouslySetInnerHTML={{__html : pageTitle}} />
                </div>
               {imageURL &&  <div className='service-image' ref={serviceImageRef}>
                <Image src={imageURL} width={585} height={280} alt="service-image" priority={true} />
                {/* <img src={imageURL}/> */}
                </div>}
            </div>
           
            }
            {headingSize == 2 &&
            <div style={{position:'relative',width:"fit-content",margin:"0 auto"}}>
            <div className="title-yellow-head">
            <TitleHead/>
            </div>
            <h2   className={anchorLink != 0 ? "mil-mb-60" : ""} dangerouslySetInnerHTML={{__html : pageTitle}} />
           </div>
          
            }
            {/* {anchorLink != 0 &&
            <a href={anchorLink} className="mil-link mil-dark mil-arrow-place mil-down-arrow" aria-label={"Link"}>
                <span>{anchorLabel}</span>
                <ArrowIcon />
            </a>
            } */}
          </div>
          </div>
         
        </div>
      </div>
      {/* banner end */}
    </>
  );
};
export default PageBanner;


