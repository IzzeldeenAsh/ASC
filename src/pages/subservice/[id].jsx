

import data from "@data/dummy/subservices.json";
import { useLocale } from "@/utils/getLocale";
import { useRouter } from "next/router";
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import InfographManager from "@/src/components/infographs/InfographManager";
import Image from 'next/image';
import ABLogoDark from "@/src/layouts/svg-icons/AB-Logo-Dark";
const subservice = ( props ) => {

  const { activeLocale } = useLocale();
  const router = useRouter();
  const { id } = router.query; // Extract section and sectionKey from query parameters
  if (!id) return null; // Ensure the id is available
  const subservice = data.subservices.find((subservice) => subservice.id === id);
  
 
  return (
    <Layouts>
             <div className="logoStyle">
     <ABLogoDark />
   </div>
      <PageBanner pageTitle={subservice.introTitle.english} breadTitle={subservice.title.english} align={"center"} headingSize={2} />
      
      {/* publication */}
      <section id="blog">
          <div className="container mil-p-60-0">
              <div className="row justify-content-center">
                  <div className="col-lg-12">
                  {subservice.image && (
                     <div className="mil-image-frame mil-horizontal mil-up">
                     <img src={subservice.image} alt={subservice.title.english}  className="mil-scale" data-value-1=".90" data-value-2="1.15" />
                 </div>
                  )}
                     
                      <div className="mil-info mil-up mil-mb-90">
                          <div><span className="mil-text-gray-600">Service</span>: &nbsp; <Link   href={`/services/${subservice.service.id}`}><span className="mil-dark">{subservice.service.name}&nbsp;</span></Link></div>
                      </div>

                  </div>
                  <div className="col-lg-12 mil-mb-90">

                      <div className={`mil-text mil-up mil-text-lg`} dangerouslySetInnerHTML={{__html : subservice.contentHtml.english}} />
                      
                      {typeof subservice.gallery != "undefined" &&
                      <>
                        {subservice.gallery.enabled == 1 &&
                        <>
                          <div className="row">
                              {subservice.gallery.items.map((item, key) => (
                              <div className="col-lg-6" key={`gallery-item-${key}`}>

                                  <div className="mil-image-frame mil-horizontal mil-up mil-mb-30">
                                      <img src={item.image} alt={item.alt} />
                                  </div>

                              </div>
                              ))}
                          </div>
                        </>
                        }
                      </>
                      }

                      {typeof subservice.additional != "undefined" &&
                        <>
                          {subservice.additional.enabled == 1 &&
                          <div className="mil-text mil-up" dangerouslySetInnerHTML={{__html : subservice.additional.content}} />
                          }
                        </>
                      }
                      {typeof subservice.infograph != "undefined" &&
                        <>
                          {subservice.infograph.enabled == 1 &&
                           <div className="mil-mb-60"> <InfographManager service={subservice.id}/></div>
                          }
                        </>
                      }
                  </div>
              </div>
          </div>
      </section>
      {/* publication end */}
      {/* <RelatedPostsSection items={props.related} /> */}
    </Layouts>
  );
};
export default subservice;

