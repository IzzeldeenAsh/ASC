import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import { useEffect, useState } from "react";
import { useLocale } from "@/utils/getLocale";
import { Accordion } from "../../common/utilits";
import { useRouter } from "next/router";
import servicesData from "@data/dummy/services.json";
import ABQuoations from "@/src/layouts/svg-icons/AB-Quotations";
import ABLogoDark from "@layouts/svg-icons/AB-Logo-Dark";
const ServiceDetail = () => {
  const { activeLocale } = useLocale();
  const router = useRouter();
  const { id } = router.query;
  const [activeAccordion, setActiveAccordion] = useState(0);
  const toggleAccordion = (key) => {
    setActiveAccordion(key === activeAccordion ? -1 : key);
  };
  useEffect(() => {
    Accordion();
  }, []);

  if (!id) return null; // Ensure the id is available

  const service = servicesData.services.find((service) => service.id === id);
  
  if (!service) return <div>Service not found</div>; // Handle service not found

  const pageTitle = activeLocale === "ar" ? service.introTitle.arabic : service.introTitle.english;
  const breadTitle = activeLocale === "ar" ? service.title.arabic : service.title.english;
  const slogan =   activeLocale === "ar" ? service.description.title.arabic: service.description.title.english;
  const content =  activeLocale === "ar"? service.description.content.arabic: service.description.content.english;
  return (
   service && <Layouts>
   <div className="logoStyle">
     <ABLogoDark />
   </div>
  <PageBanner
     pageTitle={pageTitle}
     breadTitle={breadTitle}
     anchorLink="#service"
     imgUrl={service.imgURL}
   />

   {/* service */}
   <section id="service">
    
     <div className="container mil-p-90-90">
       <div className="row justify-content-between">
       <div className="mil-relative mil-mb-60 col-lg-12">
           <div className="position-relative justify-content-between flex-1">
             <ul
               className={ `mil-center mil-mb-30 ${ activeLocale === "en" ? "mil-lines-highlight-en " : "mil-lines-highlight-ar "}`}>
               <li>
                 <h4
                   className="mil-up mil-mb-30 italic "
                   dangerouslySetInnerHTML={{
                     __html:
                     slogan
                   }}
                 />
               </li>
             </ul>

             <div
               className="title-yellow-head">
               <ABQuoations />
             </div>
           </div>

           <p
             className="mil-up mil-mb-30 mil-text-gray-800"
             dangerouslySetInnerHTML={{
               __html:content}}
           />
         </div>
         <div className="col-lg-12">
           {service.list && service.list.items && service.list.items.length > 0 && (
             <>
               {service.list.items.map((item, key) => (
                 <div className="mil-accordion-group mil-up" key={`service-item-${key}`}>
                   <div
                     className={
                       key === activeAccordion
                         ? "mil-accordion-menu mil-active"
                         : "mil-accordion-menu"
                     }
                     onClick={() => toggleAccordion(key)}
                   >
                     <p className="mil-accordion-head">
                       {activeLocale === "ar" ? item.label.arabic : item.label.english}
                     </p>
                     <div className="mil-symbol mil-h3">
                       <div
                         style={{ display: key === activeAccordion ? "none" : "block" }}
                       >
                         +
                       </div>
                       <div
                         style={{ display: key === activeAccordion ? "block" : "none" }}
                       >
                         -
                       </div>
                     </div>
                   </div>
                   <div
                     className="mil-accordion-content mil-text"
                     dangerouslySetInnerHTML={{
                       __html: activeLocale === "ar" ? item.value.arabic : item.value.english,
                     }}
                     style={{ height: key === activeAccordion ? "auto" : "0" }}
                   />
                 </div>
               ))}
             </>
           )}
         </div>
       </div>
     </div>
   </section>
 </Layouts>
  );
};
export default ServiceDetail;

