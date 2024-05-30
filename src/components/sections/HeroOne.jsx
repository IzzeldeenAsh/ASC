import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import { useState } from "react";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
import ABLogoLight from"@layouts/svg-icons/AB-Logo-Light"
import {HeaderMegaMenu} from "@components/HeeaderMegaMenu"
const HeroOne = () => {
    const [toggle, setToggle] = useState(false);
    const {activeLocale , t} = useLocale();
  
    const bgImageEn = "https://res.cloudinary.com/dahiaq28x/image/upload/v1716280978/image_wjct1x.webp"
    const bgImageAr = ""
    return ( 
        <>
        <div className="hero-nav">
        <HeaderMegaMenu/>
        </div>
        <div className="bottom-border-nav"></div>
           <div className="logoStyle">
          <ABLogoLight/>
        </div>
  
            {/* banner */}
            <section className="mil-banner mil-dark-bg " >
            <div className="hero-image" style={{backgroundImage: `url(${activeLocale ==='ar' ? bgImageAr:bgImageEn})`}}></div>
                <div className="mi-invert-fix">
                    <div className="mil-gradient" />
                    <div className="container"> 
                        <div className="mil-banner-content mil-up">
                       
                           <h2 className="mil-h2 mil-muted hero-title mil-mb-60" dangerouslySetInnerHTML={{__html : t("heroTitle")}} style={activeLocale==='ar' ? {lineHeight:'1.5'} :  {lineHeight:'1.1'} } />
                            <div className="row">
                                <div className="col-md-7 col-lg-5">
                                    <p className="mil-light-soft mil-mb-60" style={{fontSize:'18px'}}>{t("heroDescription")}</p>
                                </div>
                            </div>

                            <Link href={Data.button1.link} className="mil-button mil-arrow-place mil-btn-space">
                                <span>{t("heroButton1")}</span>
                                <div style={ activeLocale === 'ar' ? {'transform' : 'rotate(180deg)' , 'paddingTop' : '7px'} : {'transform' : 'rotate(0deg)' , 'paddingTop' : '7px'}} >
                                <ArrowIcon />
                                </div>
                            </Link>

                            <Link href={"/"} className="mil-link mil-muted mil-arrow-place">
                                <span>{t("heroButton2")}</span>
                                <div style={ activeLocale === 'ar' ? {'transform' : 'rotate(180deg)'} : {'transform' : 'rotate(0deg)'}} >
                                <ArrowIcon  />
                                </div>
                            </Link>

                         

                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
        
    );
}
export default HeroOne;