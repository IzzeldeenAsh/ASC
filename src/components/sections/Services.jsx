import Data from "@data/sections/services.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import ABQuoations from "@layouts/svg-icons/AB-Quotations";
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Truncate from "../Truncate";
import Image from "next/image";
const ServicesSection = () => {
  const { activeLocale, t } = useLocale();
  return (
    <>
      {/* services */}
      <section id="servcise">
        <div className="mi-invert-fix">
          <div className="container mil-p-120-0 d-flex flex-column align-items-center">
            <div className="mil-mb-120">
              <div className="row">
                <div className="col-lg-10">
                  <span 
                    className="mil-suptitle-right mil-suptitle mil-suptitle-dark mil-up"
                    style={{opacity: "0.7"}}
                    dangerouslySetInnerHTML={{ __html: t("servicesSubtitle1") }}
                  />
                </div>
              </div>

              <div
                className="mil-complex-text  justify-content-center mil-up mil-mb-15"
                style={
                  activeLocale === "ar"
                    ? { flexDirection: "row", gap: "10px" }
                    : { flexDirection: "column", gap: "10px" }}>
                <span className="d-flex" style={{ position: "relative" }}>
                  <div
                    className="title-yellow-head">
                    <TitleHead />
                  </div>
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
         
            <div className="row mil-services-grid m-0">
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
              {Data.items.slice(0, 4).map((item, key) => (
                <div
                  key={`services-item-${key}`}
                  className="col-md-6 col-lg-3 mil-services-grid-item p-0 "
                  style={{ position: "relative" }}
                >
                    
                  <Link href={item.link} className="mil-service-card-sm mil-up">
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
                        <img className="w-100" src={item.miniImage} alt="service-image"/>
                      </div>
                    </div>
                    
                    <h5
                     className="mil-mb-20"
                      dangerouslySetInnerHTML={{ __html: activeLocale ==='en'? item.title.english :item.title.arabic }}/>
                    {/* <div className="quotations" style={activeLocale ==='ar' ? {transformOrigin:'100%'} : {transformOrigin:'0%'}}>
                      <ABQuoations side={'right'}/></div> */}
                      {/* <p className="mil-mb-10">{
                      activeLocale ==='en'? <Truncate text={item.text.english} maxLength={10}/> :  <Truncate text={item.text.arabic} maxLength={10}/>
                      }</p> */}
                   <div className="d-flex align-items-center gap-10">
                   <span className="mil-text-xs discover"> 
                   {activeLocale ==='en'? 'Discover' :'اكتشف'}
                   </span>
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
