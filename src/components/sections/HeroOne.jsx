import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import { useState } from "react";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
import ABLogoLight from"@layouts/svg-icons/AB-Logo-Light"
const HeroOne = () => {
    const [toggle, setToggle] = useState(false);
    const {activeLocale , t} = useLocale();
    const LogoStyleAr= {
        position:"absolute",
        top:'45px',
        width:'70px',
        height:'51px',
        right:'64px',
        zIndex:'100'
    }
    const LogoStyleEn= {
        position:"absolute",
        top:'45px',
        left:'64px',
        zIndex:'100',
        width:'70px',
        height:'51px',
    }

    const bgImageEn = "https://res.cloudinary.com/dsiku9ipv/image/upload/v1715501825/image_1_v34uc9.webp"
    const bgImageAr = "https://res.cloudinary.com/dsiku9ipv/image/upload/v1715502208/hero-banner-ar_yv4mu0.jpg"
    return ( 
        <>
           <div style={activeLocale ==='ar' ? LogoStyleAr : LogoStyleEn}>
          <ABLogoLight/>
        </div>
  
            {/* banner */}
            <section className="mil-banner mil-dark-bg " style={{backgroundColor:"#f5e4cf"}}>
            <div className="hero-image" style={{backgroundImage: `url(${activeLocale ==='ar' ? bgImageAr:bgImageEn})`}}></div>
                <div className="mi-invert-fix">
                    <div className="mil-gradient" />
                    <div className="container"> 
                        <div className="mil-banner-content mil-up">
                       
                           <div className="py-5">
                           <h2 className=" mil-h2  mil-muted " dangerouslySetInnerHTML={{__html : t("heroTitle")}} style={activeLocale==='ar' ? {lineHeight:'1.5'} :  {lineHeight:'1.1'} } />
                           </div>
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

                            <Link href={Data.button2.link} className="mil-link mil-muted mil-arrow-place">
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