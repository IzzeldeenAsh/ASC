import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import { useEffect, useState } from "react";
import { useLocale } from "@/utils/getLocale";
import { Accordion } from "../../common/utilits";
import Link from "next/link";
import { useRouter } from "next/router";
import servicesData from "@data/dummy/services.json";
import ABLogoLight from "@/src/layouts/svg-icons/AB-Logo-Light";
import Truncate from "@/src/components/Truncate";
import { Image } from '@mantine/core';
import RequestService from "@components/sections/RequestService";
import { NextSeo } from 'next-seo';
import { HeaderMegaMenu } from "@components/HeeaderMegaMenu";
import QuotesIcons from "@/src/layouts/svg-icons/Quotes";
import { IconArrowDown } from "@tabler/icons-react";
const ServiceDetail = () => {
  const { activeLocale } = useLocale();
  const router = useRouter();
  const { id, section, sectionKey } = router.query;
  const [activeAccordion, setActiveAccordion] = useState(-1);

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
    } else {
      setActiveAccordion(0);
    }
  }, [section, sectionKey]);

  if (!id) return null;

  const service = servicesData.services.find((service) => service.id === id);

  if (!service) return <div>Service not found</div>;

  const metaTitle = activeLocale === "ar" ? service.title.arabic : service.title.english;
  const pageTitle = activeLocale === "ar" ? service.introTitle.arabic : service.introTitle.english;
  const breadTitle = activeLocale === "ar" ? service.title.arabic : service.title.english;
  const slogan = activeLocale === "ar" ? service.description.title.arabic : service.description.title.english;
  const content = activeLocale === "ar" 
    ? service.description.content.arabic.replace(/{{locale}}/g, activeLocale) 
    : service.description.content.english;
  const keywords = service.keywords.join(", ");
  const description = activeLocale === "ar" ? service.short.arabic : service.short.english;
  const imageUrl = service.imgURL;

  const handleScrollToService = (e) => {
    e.preventDefault();
    const element = document.getElementById("service");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layouts>
      <NextSeo
        title={metaTitle}
        description={description}
        canonical={`https://alokab.co/services/${id}`}
        openGraph={{
          url: `https://alokab.co/services/${id}`,
          title: pageTitle,
          description: description,
          images: [
            {
              url: imageUrl,
              width: 800,
              height: 600,
              alt: pageTitle,
              type: 'image/jpeg',
            },
          ],
          siteName: 'A&B Alokab Consulting',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords,
          },
        ]}
      />

      <div className="logoStyle">
        <ABLogoLight />
      </div>
      <PageBanner
        pageTitle={pageTitle}
        breadTitle={breadTitle}
        breadColor="light"
        anchorLink="#service"
        bg={service.imgURL}
        isService={true}
      />
      <div className="hero-nav">
        <HeaderMegaMenu />
      </div>
      <div className="nav-shadow"></div>

      <section id="service">
        <div className="slogan-bg">
          <div className="slogan-container container">
            <span className="slogan-text" dangerouslySetInnerHTML={{ __html: slogan }} />
            <div className="quotes-icons"><QuotesIcons side="right" /></div>
            <a
              href="#service"
              className=""
              onClick={handleScrollToService}
              style={{
                padding: "5px",
                height: "48px",
                position: "absolute",
                top: "28px",
                zIndex: "10",
                ...(activeLocale === "ar" ? { left: "0px" } : { right: "0px" }),
              }}
            >
              <IconArrowDown color="#0A1B2F" size={"40px"} className="scroll-down-arrow" />
            </a>
          </div>
        </div>
        <div className="container mil-p-30-30">
          <div className="row justify-content-between">
            <div className="mil-relative mil-mb-30 col-lg-12">
              <div className="position-relative justify-content-between flex-1"></div>
              <p className="mil-up mil-mb-30 mil-text-xl mil-p-120-0" dangerouslySetInnerHTML={{ __html: content }} />
              {service.infograph && (
                <div className="infograph d-flex flex-column justify-content-center align-items-center">
                  <div className="responsive-image">
                    <Image
                      src={service.infograph.english}
                      alt="infograph"
                      priority
                      width={service.infograph.width}
                      height={service.infograph.height}
                    />
                  </div>
                  <div className="mil-center mil-text-xs">{service.infograph.name}</div>
                </div>
              )}
           
            </div>
          </div>
        </div>
      </section>

      {service.list && service.list.items && service.list.items.length > 0 && (
        <>
          {service.list.items.map((item, key) => (
            <section key={`service-item-${key}`} id={item.id} className={service.list.items.length - 1 === key ? "mil-mb-60" : ""}>
              <div className="col-lg-12">
                <div className="container">
                  <div className="mil-accordion-group mil-up">
                    <div
                      className={key === activeAccordion ? "mil-accordion-menu mil-active" : "mil-accordion-menu"}
                      onClick={() => toggleAccordion(key)}
                    >
                      <div className="mil-accordion-head ">
                      {activeLocale === "ar" ? item.label.arabic : item.label.english}
                       
                      </div>
                      <div className="d-flex align-items-center gap-20">
                        <div className="mil-symbol mil-h3 ">
                          <div style={{ display: key === activeAccordion ? "none" : "block" }}>+</div>
                          <div style={{ display: key === activeAccordion ? "block" : "none" }}>-</div>
                        </div>
                      </div>
                    </div>
                    <div className="mil-accordion-content mil-text " style={{ height: key === activeAccordion ? "auto" : "0" }}>
                    <div className="d-flex gap-40 flex-column flex-md-row mil-mb-20">
                     {item.image &&
                      
                      <Image src={item.image} fit="contain"  h={200}
                      w={300} alt="service-image"   />
                    }
                    <div className=" mil-text-lg">
                        {activeLocale === "ar" ? <Truncate text={item.value.arabic} maxLength={300} /> : <Truncate text={item.value.english} maxLength={300} />}
                       <div>
                       {item.isSubService && (
                        <Link href={`/subservice/${item.id}`}>
                          <div className="mil-button mil-button-sm mil-mb-25">
                            {activeLocale === 'ar' ? "المزيد " : "Read More"}
                          </div>
                        </Link>
                      )}
                       </div>
                      </div>
                    </div>
                 
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </>
      )}

      <section className="mil-soft-bg">
        <RequestService
          messageAr={" اطلب هذه الخدمة "}
          messageEn={" Ask <span class=\"mil-thin\"> about this service</span> "}
          serviceName={breadTitle}
        />
      </section>
    </Layouts>
  );
};

export default ServiceDetail;
