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
   
      <section id="servcise">
        
        <div className="mi-invert-fix">
          <div className="container mil-p-60-0 d-flex flex-column align-items-center">
          <div className="row mil-services-grid mil-mb-120">
            <div className="featured">
              <div>{t("featured")}</div>
              <div  className="anchor-link ">
                <Link href="/services" className="d-flex align-items-center">
               <div >{t("seeAll")}</div>
                <div className="d-flex align-items-center left-right-arrow ">
                  <div className="see-all-arrow">
                  <IconArrowNarrowRight color="#336AEA"/>
                  </div>
                </div>
                </Link>
              </div>
            </div>
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
            <div className="mil-mb-120">
              <div
                className="mil-complex-text  justify-content-center mil-up mil-mb-15"
                style={
                  activeLocale === "ar"
                    ? { flexDirection: "row", gap: "10px" }
                    : { flexDirection: "column", gap: "10px" }}>
                <span className="d-flex" style={{ position: "relative" }}>
                 
                    <TitleHead />
                  <h2
                    className="mil-h2  mil-center"
                    dangerouslySetInnerHTML={{ __html: t("servicesTitle1") }}/>
                </span>
                <h2
                  className="mil-h2 mil-center"
                  dangerouslySetInnerHTML={{ __html: t("servicesTitle2") }}
                />
              </div>
            </div>
         
            {/* <div className="row">
                <div className="col-lg-12">
                  <span 
                    className="mil-suptitle-right mil-suptitle mil-suptitle-dark mil-up"
                    style={{opacity: "0.7"}}
                    dangerouslySetInnerHTML={{ __html: t("servicesSubtitle1") }}
                  />
                </div>
              </div> */}

          </div>
        </div>
      </section>
      {/* services end */}
    </>
  );
};

export default ServicesSection;
