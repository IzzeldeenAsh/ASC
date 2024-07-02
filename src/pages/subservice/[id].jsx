import data from "@data/dummy/subservices.json";
import { useLocale } from "@/utils/getLocale";
import { useRouter } from "next/router";
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import InfographManager from "@/src/components/infographs/InfographManager";
import ABLogoDark from "@/src/layouts/svg-icons/AB-Logo-Dark";
import RequestService from "@components/sections/RequestService";
import Image from "next/image";
import { NextSeo } from 'next-seo';

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
  const description = activeLocale === "ar" ? subservice.short.arabic : subservice.short.english;
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
        <ABLogoDark />
      </div>
      <PageBanner pageTitle={pageTitle} breadTitle={breadTitle} align={"center"} headingSize={2} />
      <section id="blog">
        <div className="container mil-p-60-0">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              {subservice.image && (
                <div className="mil-image-frame mil-up">
                  <img src={subservice.image} alt={subservice.title.english} className="mil-scale" data-value-1=".90" data-value-2="1.15" />
                </div>
              )}
              <div className="mil-info mil-up mil-mb-50">
                <div><span className="mil-text-gray-600">{activeLocale ==='ar' ? "الخدمة" : "Service"}</span>: &nbsp; 
                  <Link href={`/services/${subservice.service.id}`} legacyBehavior>
                    <a><span className="mil-dark">{activeLocale ==="ar" ? subservice.service.name.arabic: subservice.service.name.english}&nbsp;</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mil-mb-90">
              <div className={`mil-text mil-up mil-text-lg`} dangerouslySetInnerHTML={{ __html:activeLocale ==='ar' ? subservice.contentHtml.arabic :  subservice.contentHtml.english }} />
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
                <div className="mil-text-accent-dark mil-hover-primary">
                  <Link href="/contact" legacyBehavior>
                    <a className="mil-text-sm fw-bold">{activeLocale === 'ar' ? "اسأل مختص " : "ASK AN EXPERT"}</a>
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
                    <div className="mil-center mil-text-xs">{subservice.infograph.name}</div>
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
          messageAr={"هل أنت مستعد لتحويل <span class=\"mil-thin\">أفكارك إلى</span> واقع؟ <br> اطلب <span class=\"mil-thin\">هذه الخدمة</span> "}
          messageEn={"Ready to bring your <span class=\"mil-thin\">ideas to</span> life? <br> Ask <span class=\"mil-thin\"> about this service</span> "}
          serviceName={activeLocale === 'ar' ? subservice.title.arabic : subservice.title.english}
        />
      </section>
    </Layouts>
  );
};

export default Subservice;
