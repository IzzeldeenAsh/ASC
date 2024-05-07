import PageBannerDark from "@components/PageBannerDark";
import Layouts from "@layouts/Layouts";
import CallToActionSection from "@components/sections/CallToAction";
import Link from "next/link";
import LightEnglishLogo from"@layouts/svg-icons/LightEnglishLogo"
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
import { useState , useEffect} from "react";
import servicesData from "@data/dummy/services.json"
const Services = () => {
const {activeLocale , t} = useLocale();
const LogoStyleAr= {
    position:"absolute",
    top:'45px',
    right:'64px',
    zIndex:'100'
}
const LogoStyleEn= {
    position:"absolute",
    top:'45px',
    left:'64px',
    zIndex:'100'
}
const [isMounted,setIsMounted] = useState(false); // Need this for the react-tooltip
const props =servicesData;
if(!props){
  return <div>...Loading</div>
}
useEffect(() => {
    setIsMounted(true);
},[]);
  const imageURL = "https://res.cloudinary.com/dsiku9ipv/image/upload/v1714471419/eng-light-okab-logo_1_1_xxoju9.png"
  return (isMounted &&
    <Layouts>
    <div style={activeLocale ==='ar' ? LogoStyleAr : LogoStyleEn}>
    <LightEnglishLogo url={imageURL}/>
    </div>
  {/* banner */}
  <div className="mil-dark-bg" style={{backgroundColor:"#f5e4cf"}}>
      <PageBannerDark pageTitle={"Service List"} breadTitle={"Services"} anchorLabel={"Our services"} anchorLink={"#services"} />

      {/* services */}
      <section id="services">
          <div className="mi-invert-fix">
              <div className="container mil-p-120-60">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="row">
                              {props.services.map((item, key) => (
                              <div className="col-md-4 col-lg-4 mil-mb-60" key={`services-item-${key}`}>
                                  <Link href={`/services/${item.id}`} className= "mil-service-card-lg mil-more mil-accent-cursor ">
                                      <h4 className="mil-muted mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : activeLocale === 'en' ? item.preview_title.english :item.preview_title.arabic }} />
                                      <p className="mil-descr mil-light-soft mil-up mil-mb-30">{ activeLocale === 'en' ? item.short.english :item.short.arabic }</p>
                                      <ul className="mil-service-list mil-light mil-mb-30">
                                        {item.list.items.slice(0, 4).map((list_item, list_key) => (
                                        <li className="mil-up" key={`services-item-${key}-list-${list_key}`}>{ activeLocale === 'en' ? list_item.label.english :list_item.label.arabic }</li>
                                        ))}
                                      </ul>
                                      <div className="mil-link mil-accent mil-arrow-place mil-up">
                                          <span>Read more</span>
                                          <div  style={ activeLocale === 'ar' ? {'transform' : 'rotate(180deg)', display:'flex'} : {'transform' : 'rotate(0deg)', display:'flex'}} >
                        <ArrowIcon  />
                        </div>
                                      </div>
                                  </Link>
                              </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
  {/* services end */}

  <CallToActionSection />
  
</Layouts>
  
  );
};
export default Services;

// export async function getStaticProps() {
//   const allServices = getSortedServicesData();

//   return {
//     props: {
//       services: allServices,
    
//     }
//   }
// }



