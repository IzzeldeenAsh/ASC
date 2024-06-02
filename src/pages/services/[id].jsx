import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import { useEffect, useState } from "react";
import { useLocale } from "@/utils/getLocale";
import { Accordion } from "../../common/utilits";
import Link from "next/link";
import { useRouter } from "next/router";
import servicesData from "@data/dummy/services.json";
import ABQuoations from "@/src/layouts/svg-icons/AB-Quotations";
import ABLogoLight from "@/src/layouts/svg-icons/AB-Logo-Light";

const ServiceDetail = () => {
  const { activeLocale } = useLocale();
  const router = useRouter();
  const { id, section, sectionKey } = router.query; // Extract section and sectionKey from query parameters
  const [activeAccordion, setActiveAccordion] = useState(-1); // Default to no accordion open

  const toggleAccordion = (key) => {
    setActiveAccordion(key === activeAccordion ? -1 : key);
  };

  useEffect(() => {
    Accordion();
  }, []);

  useEffect(() => {
    if (section && sectionKey !== undefined) {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
        setActiveAccordion(parseInt(sectionKey));
      }
    }else{
      setActiveAccordion(0);
    }
  }, [section, sectionKey]);

  if (!id) return null; // Ensure the id is available

  const service = servicesData.services.find((service) => service.id === id);

  if (!service) return <div>Service not found</div>; // Handle service not found

  const pageTitle = activeLocale === "ar" ? service.introTitle.arabic : service.introTitle.english;
  const breadTitle = activeLocale === "ar" ? service.title.arabic : service.title.english;
  const slogan = activeLocale === "ar" ? service.description.title.arabic : service.description.title.english;
  const content = activeLocale === "ar" ? service.description.content.arabic : service.description.content.english;
  const logoColor = "light";
  const breadColor = "light";

  return (
    service && (
      <Layouts>
        <div className="logoStyle">
          <ABLogoLight />
        </div>
        <PageBanner
          pageTitle={pageTitle}
          breadTitle={breadTitle}
          breadColor={breadColor}
          anchorLink="#service"
          bg={service.imgURL}
          isService={true}
        />

        {/* service */}
        <section id="service">
          <div className="container mil-p-90-90">
            <div className="row justify-content-between">
              <div className="mil-relative mil-mb-60 col-lg-12">
                <div className="position-relative justify-content-between flex-1">
                  <ul className={`mil-center mil-mb-30 ${activeLocale === "en" ? "mil-lines-highlight-en " : "mil-lines-highlight-ar "}`}>
                    <li>
                      <h4
                        className="mil-up mil-mb-30 italic"
                        dangerouslySetInnerHTML={{ __html: slogan }}
                      />
                    </li>
                  </ul>
                  <div className="title-yellow-head">
                    <ABQuoations />
                  </div>
                </div>
                <p className="mil-up mil-mb-30 mil-text-gray-800" dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          </div>
        </section>

        {service.list && service.list.items && service.list.items.length > 0 && (
          <>
            {service.list.items.map((item, key) => (
              <section key={`service-item-${key}`} id={item.id} className={service.list.items.length-1 === (key) ? "mil-mb-60" : ""}>
                <div className="col-lg-12">
                  <div className="container">
                    <div className="mil-accordion-group mil-up">
                      <div
                        className={key === activeAccordion ? "mil-accordion-menu mil-active" : "mil-accordion-menu"}
                        onClick={() => toggleAccordion(key)}
                      >
                        <p className="mil-accordion-head">
                          {activeLocale === "ar" ? item.label.arabic : item.label.english}
                        </p>
                        <div className="d-flex align-items-center gap-20">
                          {key === activeAccordion && (
                            <Link href="/" className="mil-hover-primary mil-text-sm fw-bold">
                              ASK AN EXPERT
                            </Link>
                          )}
                          <div className="mil-symbol mil-h3">
                            <div style={{ display: key === activeAccordion ? "none" : "block" }}>+</div>
                            <div style={{ display: key === activeAccordion ? "block" : "none" }}>-</div>
                          </div>
                        </div>
                      </div>
                      <div   className="mil-accordion-content mil-text" style={{ height: key === activeAccordion ? "auto" : "0" }}>
                      <div className="mil-mb-20"
                      dangerouslySetInnerHTML={{ __html: activeLocale === "ar" ? item.value.arabic : item.value.english }}
                    />
                      {item.isSubService && (<div className="mil-button mil-button-sm mil-mb-30"><Link href={`/subservice/${item.id}`}>Read More</Link></div>)}
                      </div>
                      
                     
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </>
        )}
      </Layouts>
    )
  );
};

export default ServiceDetail;
