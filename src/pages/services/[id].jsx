import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import { useEffect, useState } from "react";
import { useLocale } from "@/utils/getLocale";
import { Accordion } from "../../common/utilits";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
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

export const getStaticPaths = async () => {
  const paths = servicesData.services.map((service) => ({
    params: { id: service.id },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
  const service = servicesData.services.find((service) => service.id === params.id);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service },
    revalidate: 10, // ISR: Regenerate the page at most once every 10 seconds
  };
};

const ServiceDetail = ({ service }) => {
  const { activeLocale } = useLocale();
  const router = useRouter();
  const { id, section, sectionKey } = router.query;
  const [activeAccordion, setActiveAccordion] = useState([]);

  const toggleAccordion = (key) => {
    setActiveAccordion((prevState) =>
      prevState.includes(key)
        ? prevState.filter((accordionKey) => accordionKey !== key)
        : [...prevState, key]
    );
  };

  useEffect(() => {
    Accordion();
  }, []);

  useEffect(() => {
    if (section && sectionKey !== undefined) {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
        setActiveAccordion([parseInt(sectionKey)]);
      }
    } else {
      setActiveAccordion(
        servicesData.services.find((service) => service.id === id)?.list?.items.map((_, index) => index) || []
      );
    }
  }, [section, sectionKey, id]);

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
  const shareTitle = activeLocale === "ar" ? service.title.arabic : service.title.english;
  const shareDescription = activeLocale === "ar" ? service.short.arabic : service.short.english;

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
        canonical={`https://asc-seven-liard.vercel.app/services/${id}`}
        openGraph={{
          url: `https://asc-seven-liard.vercel.app/services/${id}`,
          title: metaTitle,
          description: description,
          images: [
            {
              url: imageUrl,
              width: 800,
              height: 600,
              alt: metaTitle,
              type: 'image/webp',
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
        shareDescription={shareDescription}
        shareTitle={shareTitle}
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
                      src={activeLocale === 'ar' ? service.infograph.arabic : service.infograph.english}
                      alt="infograph"
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
                      className={activeAccordion.includes(key) ? "mil-accordion-menu mil-active" : "mil-accordion-menu"}
                      onClick={() => toggleAccordion(key)}
                    >
                      <div className="mil-accordion-head ">
                        {activeLocale === "ar" ? item.label.arabic : item.label.english}
                      </div>
                      <div className="d-flex align-items-center gap-20">
                        <div className="mil-symbol mil-h3 ">
                          <div style={{ display: activeAccordion.includes(key) ? "none" : "block" }}>+</div>
                          <div style={{ display: activeAccordion.includes(key) ? "block" : "none" }}>-</div>
                        </div>
                      </div>
                    </div>
                    <div className="mil-accordion-content mil-text " style={{ height: activeAccordion.includes(key) ? "auto" : "0" }}>
                      <div className="d-flex gap-40 flex-column flex-md-row mil-mb-20">
                        {item.image && (
                          <Link href={`/subservice/${item.id}`}>
                            <Image src={item.image} fit="contain" h={200} w={300} alt="service-image" />
                          </Link>
                        )}
                        <div className="mil-text-lg">
                          {activeLocale === "ar" ? <Truncate text={item.value.arabic} maxLength={300} /> : <Truncate text={item.value.english} maxLength={300} />}
                          <div>
                            {item.isSubService && (
                              <div className="pt-3">
                                <Link href={`/subservice/${item.id}`}>
                                  <div className="mil-link mil-accent mil-arrow-place mil-up ">
                                    <div style={activeLocale === 'ar' ? { 'transform': 'rotate(180deg)', display: 'flex' } : { 'transform': 'rotate(0deg)', display: 'flex' }}>
                                      <ArrowIcon margin={"0"} />
                                    </div>
                                  </div>
                                </Link>
                              </div>
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
