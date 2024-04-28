import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import { useState } from "react";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";
import { useLocale } from "@/utils/getLocale";
import LightEnglishLogo from"@layouts/svg-icons/LightEnglishLogo"
import LightLogoArabic from"@layouts/svg-icons/LightLogoArabic"
const HeroOne = () => {
    const [toggle, setToggle] = useState(false);
    const {activeLocale , t} = useLocale();
    return ( 
        <>
            {/* banner */}
            <section className="mil-banner mil-dark-bg-hero ">
           {activeLocale === 'ar' ?
              <>
              <div className="" style={{position:'absolute',top:'40px' , right : '60px', zIndex:10}}>
                 <LightEnglishLogo/>
                </div>
                <div className="pointer" style={{position:'absolute',top:'53px' , left : '60px', zIndex:5}}>
                   <div
              className="mil-menu-btn-hero " 
             >
               <span style={{backgroundColor:'#fff'}} />
             </div>
                   </div>
                </>
           :
         <>
           <div className="" style={{position:'absolute',top:'35px' , left : '60px', zIndex:10}}>
                <LightEnglishLogo/>
                </div>
                   <div className="pointer" style={{position:'absolute',top:'53px' , right : '60px', zIndex:5}}>
                   <div
              className="mil-menu-btn-hero " 
             >
               <span style={{backgroundColor:'#fff'}} />
             </div>
                   </div></>
          } 
                <div className="mi-invert-fix">
                    {/* <div className="mil-animation-frame">
                        <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6">
                            <Pentagon />
                        </div>
                        <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1">
                            <Pentagon />
                        </div>
                        <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1">
                            <Pentagon />
                        </div>
                    </div> */}

                    <div className="mil-gradient" />

                    <div className="container"> 
                   
                        <div className="mil-banner-content mil-up">
                       
                           <div className="py-5">
                           <h2 className=" mil-h2  mil-muted " dangerouslySetInnerHTML={{__html : t("heroTitle")}} />
                           </div>
                            <div className="row">
                                <div className="col-md-7 col-lg-5">
                                    <p className="mil-light-soft mil-mb-60">{t("heroDescription")}</p>
                                </div>
                            </div>

                            <Link href={Data.button1.link} className="mil-button mil-arrow-place mil-btn-space">
                                <span>{t("heroButton1")}</span>
                                <div style={ activeLocale === 'ar' ? {'transform' : 'rotate(180deg)' , 'paddingTop' : '7px'} : {'transform' : 'rotate(0deg)' , 'paddingTop' : '7px'}} >
                                <ArrowIcon />
                                </div>
                            </Link>

                            <Link href={Data.button2.link} className="mil-link mil-muted mil-arrow-place">
                                <span>{t("heroButton2")}</span>
                                <div style={ activeLocale === 'ar' ? {'transform' : 'rotate(180deg)'} : {'transform' : 'rotate(0deg)'}} >
                                <ArrowIcon  />
                                </div>
                            </Link>

                            <div className="mil-circle-text" style={ activeLocale === 'ar' ? {'left' : '0px'} : {'right' : '0px'}}>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve" className="mil-ct-svg mil-rotate" data-value="360">
                                    <defs>
                                        <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                                    </defs>
                                    <circle cx="150" cy="100" r="75" fill="none" />
                                    <g>
                                        <use xlinkHref="#circlePath" fill="none" />
                                        <text style={{"letterSpacing": "6.5px"}} textAnchor={activeLocale === 'ar' ? 'end' : 'start'}>
                                          
                                            {/* <textPath xlinkHref="#circlePath">Scroll down - Scroll down - </textPath> */}
                                        </text>
                                    </g>
                                </svg>
                                <a href="#servcise" className="mil-button mil-arrow-place mil-icon-button mil-arrow-down" style={{padding:'5px', height:'50px'}}>
                                    <ArrowIcon />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
}
export default HeroOne;