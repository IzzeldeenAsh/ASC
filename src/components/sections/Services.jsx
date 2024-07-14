import Data from "@data/dummy/featured.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import { IconArrowNarrowRight } from '@tabler/icons-react';
import ABQuoations from "@/src/layouts/svg-icons/AB-Quotations";
import Truncate from "../Truncate";

const ServicesSection = () => {
  const { activeLocale, t } = useLocale();
  return (
    <>
      {/* services */}
   
      <section id="servcise" className="mil-soft-bg">
        
        <div className="mi-invert-fix">
        <div className="row flex-column  mil-p-60-90">
            <div className="featured">
              <div className="d-flex">
              {/* <TitleHead /> */}
                <h3 className="mil-h3" >{t("featured")}</h3>
                
                </div>
              <div className="mil-text-accent-dark mil-hover-primary mil-center">
                <Link
                  href="/contact"
                    className="mil-button mil-arrow-place "
                  >
                    <span>
                    {activeLocale === 'ar' ? "المزيد" : "See All"}</span>
                    <div
                      style={
                        activeLocale === "ar"
                          ? { transform: "rotate(180deg)", display: "flex" }
                          : { transform: "rotate(0deg)", display: "flex" }
                      }
                    >
                      <ArrowIcon />
                    </div>
                  </Link>
                
                </div>
            </div>
            <div className="mil-services-grid">
            {Data.featured.map((item, key) => (
                <div
                  key={`services-item-${key}`}
                  className=" mil-services-grid-item p-0 "
                  style={{ position: "relative" }}
                >
                    
                  <Link href={activeLocale === 'ar' ? item.link.ar.replace(/{{locale}}/g, activeLocale) : item.link.en} className="mil-service-card-sm mil-up">
                    <div
                      className="mil-squares service-squares"
                      style={
                        activeLocale === "ar"
                          ? { left: "4px" }
                          : { right: "-4px" }
                      }
                    >
                      <span className="mil-square"></span>
                      <span className="mil-square"></span>
                      <span className="mil-square"></span>
                    </div>
                    <div className="service-image-abs-wrapper">
                    <div className="service-image-abs">
                        <img className="w-100" src={item.image} alt="service-image"/>
                      </div>
                    </div>
                    
                    <h5
                     className="mil-mb-20"
                      dangerouslySetInnerHTML={{ __html: activeLocale ==='en'? item.title.english :item.title.arabic }}/>
                     <div className="quotations" style={activeLocale ==='ar' ? {transformOrigin:'100%'} : {transformOrigin:'0%'}}>
                      <ABQuoations side={'right'}/></div> 
                       <p className="mil-mb-10">{
                      activeLocale ==='en'? <Truncate text={item.text.english} maxLength={50}/> :  <Truncate text={item.text.arabic} maxLength={50}/>
                      }</p> 
                   <div className="d-flex align-items-center gap-10">
                  
                    <div className="mil-button mil-icon-button-sm mil-arrow-place">
                     
                      <div
                        style={
                          activeLocale === "ar"
                            ? { transform: "rotate(180deg)", paddingTop: "5px" }
                            : { transform: "rotate(0deg)", paddingTop: "5px" }
                        }
                      >
                       
                        <ArrowIcon />
                      </div>
                    </div>
                   </div>
                  </Link>
                </div>
              ))}
            </div>
             
            </div>
        </div>
      </section>
      {/* services end */}
    </>
  );
};

export default ServicesSection;
