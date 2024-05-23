import Head from 'next/head';
import Link from "next/link";
import { useRouter } from 'next/router';
import AppData from "@data/app.json";
import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import Image from 'next/image';
import { useEffect, useRef, useMemo } from 'react';
const PageBanner = ({ pageTitle, breadTitle, anchorLink = 0, paddingBottom, align, headingSize = 1 ,imgUrl,bg}) => {
  const bgBanner = useMemo(() => ({
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }), [bg]);

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
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      
      {/* banner */}
      <div className={paddingBottom ? "mil-inner-banner mil-p-0-120" : "mil-inner-banner"}>
        <div className={align == "center" ? "mil-banner-content mil-center mil-up" : "mil-banner-content mil-up"} style={bg ? bgBanner : {} }>
          <div  className={bg ? "bannderOverlay" : ""}>
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
             <div className={`banner-title-and-image-container ${align ==="center" ? "d-flex justify-content-center" :""}`}>
                <div  className={`heading-1 ${align == "center" ?"max-width-fit" :"" }`}>
                    <div className="title-yellow-head">
                    <TitleHead/>
                    </div>
                    <h2  className={bg ? "mil-light mil-mb-60" : "mil-mb-60"} dangerouslySetInnerHTML={{__html : pageTitle}} />
                </div>
               {imgUrl &&  <div className='service-image' ref={serviceImageRef}>
               <Image src={imgUrl} width={585} height={280} alt="service-image" priority fetchPriority="high" />
                {/* <img src={imgUrl}/> */}
                </div>}
            </div>
           
            }
            {headingSize == 2 &&
              <div className={`banner-title-and-image-container ${align ==="center" ? "d-flex justify-content-center" :""}`}>
                  <div className={`heading-1 ${align == "center" ?"max-width-fit" :"" }`}>
            <div className="title-yellow-head">
            <TitleHead/>
            </div>
            <h2   className={anchorLink != 0 ? "mil-mb-60" : ""} dangerouslySetInnerHTML={{__html : pageTitle}} />
           </div>
              </div>
          
            }
           
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageBanner;


