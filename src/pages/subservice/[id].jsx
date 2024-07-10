import data from "@data/dummy/subservices.json";
import { useLocale } from "@/utils/getLocale";
import { useRouter } from "next/router";
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import ABLogoDark from "@/src/layouts/svg-icons/AB-Logo-Dark";
import RequestService from "@components/sections/RequestService";
import Image from "next/image";
import { NextSeo } from 'next-seo';
import ArrowIcon from "@layouts/svg-icons/Arrow";
import {HeaderMegaMenu} from "@components/HeeaderMegaMenu";
import ABLogoLight from "@/src/layouts/svg-icons/AB-Logo-Light";
const Subservice = (props) => {
  const { activeLocale } = useLocale();
  const router = useRouter();
  const { id } = router.query; // Extract section and sectionKey from query parameters
  if (!id) return null; // Ensure the id is available

  const subservice = data.subservices.find((subservice) => subservice.id === id);

  if (!subservice) return <div>Subservice not found</div>; // Handle subservice not found
  const metaTitle = activeLocale === "ar" ? subservice.title.arabic : subservice.title.english;
  const pageTitle = activeLocale === "ar" ? subservice.introTitle.arabic : subservice.introTitle.english;
  const breadTitle = activeLocale === "ar" ? subservice.title.arabic : subservice.title.english;
  const description = activeLocale === "ar" ? subservice.short.arabic.replace(/{{locale}}/g, activeLocale) : subservice.short.english;
  const keywords = subservice.keywords.join(", ");
  const imageUrl = subservice.image;

  return (
    <Layouts>
      <NextSeo
        title={metaTitle}
        description={description}
        canonical={`https://alokab.co/subservice/${id}`}
        openGraph={{
          url: `https://alokab.co/subservice/${id}`,
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
  align={"center"} 
  headingSize={2} 
  service={subservice.service} 
/>
      <div className="hero-nav">
        <HeaderMegaMenu/>
        </div>
        <div className="nav-shadow"></div>
      <section id="blog">
        <div className="container mil-p-60-0">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              {subservice.image && (
                <div className="mil-image-frame mil-up">
                  <img src={subservice.image} alt={subservice.title.english} className="mil-scale" data-value-1=".90" data-value-2="1.15" />
                </div>
              )}
               {!subservice.service.id && <div className="mil-p-30-30"></div>}
              {subservice.service.id &&
              <div className="mil-info mil-up mil-mb-50">
                
                 <div><span className="mil-text-gray-600">{activeLocale ==='ar' ? "الخدمة" : "Service"}</span>: &nbsp; 
                 <Link href={`/services/${subservice.service.id}`} legacyBehavior>
                   <a><span className="mil-dark">{activeLocale ==="ar" ? subservice.service.name.arabic: subservice.service.name.english}&nbsp;</span></a>
                 </Link>
               </div>
               
              </div>}
            </div>
            <div className="col-lg-12 mil-mb-90">
              <div className={`mil-text mil-up mil-text-lg`} dangerouslySetInnerHTML={{ __html:activeLocale ==='ar' ? subservice.contentHtml.arabic.replace(/{{locale}}/g, activeLocale) :  subservice.contentHtml.english }} />
              {typeof subservice.gallery !== "undefined" && subservice.gallery.enabled == 1 && (
                <div className="row">
                  {subservice.gallery.items.map((item, key) => (
                    <div className="col-lg-6" key={`gallery-item-${key}`}>
                      <div className="mil-image-frame mil-horizontal mil-up mil-mb-30">
                        <img src={item.image} alt={item.alt} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="py-3">
                <div className="mil-text-accent-dark mil-hover-primary mil-center">
                <Link
                  href="/contact"
                    className="mil-button mil-arrow-place mil-mb-60"
                  >
                    <span>
                    {activeLocale === 'ar' ? "اسأل مختص " : "Ask an expert"}</span>
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
              {typeof subservice.additional !== "undefined" && subservice.additional.enabled == 1 && (
                <div className="mil-text mil-up" dangerouslySetInnerHTML={{ __html: subservice.additional.content }} />
              )}
              {subservice.infograph.enabled == 1 && (
                <div className="mil-mb-60">
                  <div className="infograph d-flex flex-column justify-content-center align-items-center">
                    <div className="responsive-image">
                      <Image
                        src={subservice.infograph.english}
                        alt="infograph"
                        priority
                        width={subservice.infograph.width}
                        height={subservice.infograph.height}
                      />
                    </div>
                    <div className="mil-center mil-text-xs">{activeLocale ==='ar' ?subservice.infograph.name.arabic : subservice.infograph.name.english}</div>
                  </div>
                </div>
              )}
              <div className="mil-p-30-30"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mil-soft-bg">
        <RequestService 
          messageAr={" اطلب هذه الخدمة "}
          messageEn={"Ask <span class=\"mil-thin\"> about this service</span> "}
          serviceName={activeLocale === 'ar' ? subservice.title.arabic : subservice.title.english}
        />
      </section>
    </Layouts>
  );
};

export default Subservice;
