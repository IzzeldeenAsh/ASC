import React from 'react'
import Data from "@data/sections/hero-2.json";
import Layouts from "@layouts/Layouts";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Link from "next/link";
import { useLocale } from "@/utils/getLocale";
import Pentagon from "@layouts/pentagon/Index";
const CEOWord = () => {
    const LogoStyleAr = {
        position: "absolute",
        top: "45px",
        right: "64px",
        zIndex:3
      };
      const LogoStyleEn = {
        position: "absolute",
        top: "45px",
        left: "64px",
        zIndex:3
      };
    const { activeLocale, t } = useLocale();
  return (
    <>
    {/* banner */}

    <Layouts>
    <div style={activeLocale === "ar" ? LogoStyleAr : LogoStyleEn}>
    <Link href={"/"} className="mil-link mil-dark  mil-arrow-place">
                                <div style={ activeLocale === 'en' ? {'transform' : 'rotate(180deg)'} : {'transform' : 'rotate(0deg)'}} >
                                <ArrowIcon  />
                                </div>
    </Link>

      </div>
    <section className="mil-banner-personal">
        <div className="mil-animation-frame">
            <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="7" data-value-2="1.4" style={{"right": "25%"}}>
                <Pentagon />
            </div>
        </div>
        <div className="container">
            <div className="mil-banner-content mil-up">

                <div className="row align-items-start">
                    <div className="col-lg-6">
                        <div className="mil-personal-text">
                            <p className="mil-mb-60">{Data.subtitle}</p>
                            <h1 className="mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <span     style={{opacity: "0.7"}} className="mil-suptitle mil-suptitle-dark mil-mb-60" dangerouslySetInnerHTML={{__html : Data.text}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{position:"relative"}}>
                    <div className="mil-portrait-frame" >
                                <img src={Data.image.url} alt={Data.image.alt} />
                            </div>
                            <div className="mil-banner-panel">
                    <h5 dangerouslySetInnerHTML={{__html:Data.bottom.title.english}}/>
                    <p  dangerouslySetInnerHTML={{__html:Data.bottom.content.english}}/>
                    <h5 dangerouslySetInnerHTML={{__html:Data.bottom.ending.english}}/>
                    <div className="text-dark" style={{display:"flex" , flexDirection:"column",fontWeight:"bolder"}}>
                        <span>CEO, A&B Consulting</span>
                        <span>KHALDUN ZOMOT</span>
                        </div>
                    <div></div>
                </div>
                </div>
               

            </div>
        </div>

    </section>
    </Layouts>
    {/* banner end */}
</>
  )
}

export default CEOWord