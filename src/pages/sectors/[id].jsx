import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import { useEffect } from "react";
import { useLocale } from "@/utils/getLocale";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { Accordion } from "../../common/utilits";
import { useRouter } from "next/router";
import Link from "next/link";
import sectorsData from "@data/dummy/sectors.json";
import ABQuoations from "@/src/layouts/svg-icons/AB-Quotations";
import ABLogoLight from "@layouts/svg-icons/AB-Logo-Light";
import ABLogoDark from "@/src/layouts/svg-icons/AB-Logo-Dark";
import Image from "next/image";
import Truncate from "@/src/components/Truncate";
import { NextSeo } from 'next-seo';

const SectorDetail = () => {
  const { activeLocale } = useLocale();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    Accordion();
  }, []);

  if (!id) return null;

  const sector = sectorsData.sectors.find((sector) => sector.id === id);

  if (!sector) return <div>Sector not found</div>;
  const metaTitle =  activeLocale === "ar" ? sector.title.arabic : sector.title.english;
  const pageTitle = activeLocale === "ar" ? sector.introTitle.arabic : sector.introTitle.english;
  const breadTitle = activeLocale === "ar" ? sector.title.arabic : sector.title.english;
  const slogan = activeLocale === "ar" ? sector.description.title.arabic : sector.description.title.english;
  const content = activeLocale === "ar" ? sector.description.content.arabic.replace(/{{locale}}/g, activeLocale) : sector.description.content.english;
  const keywords = sector.keywords.join(", ");
  const description = activeLocale === "ar" ? sector.short.arabic : sector.short.english;
  const imageUrl = sector.imgURL;
  const logoColor = sector.logoColor;
  const breadColor = logoColor !== "light" ? "dark" : "light";

  return (
    sector && (
      <Layouts>
        <NextSeo
          title={metaTitle}
          description={description}
          canonical={`https://alokab.co/sectors/${id}`}
          openGraph={{
            url: `https://alokab.co/sectors/${id}`,
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
          {logoColor === "light" && <ABLogoLight />}
          {logoColor === "dark" && <ABLogoDark />}
        </div>
        <PageBanner
          pageTitle={pageTitle}
          breadTitle={breadTitle}
          breadColor={breadColor}
          anchorLink="#sectors"
          subtext={description}
          bg={sector.imgURL}
        />

        <section id="service">
          <div className="container mil-p-30-90">
            <div className="row justify-content-between">
              <div className="mil-relative col-lg-12">
                <div className="position-relative justify-content-between flex-1">
                  <div className="title-yellow-head">
                    <ABQuoations />
                  </div>
                  <ul className={` ${activeLocale === "en" ? "mil-lines-highlight-en " : "mil-lines-highlight-ar "}`}>
                    <li>
                      <h4
                        className=" mil-mb-30 italic"
                        dangerouslySetInnerHTML={{ __html: slogan }}
                      />
                    </li>
                  </ul>
                </div>
                <p
                  className="mil-up mil-mb-30 mil-text-lg"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
              <div className="col-lg-12">
                <h5
                  className="mil-text-xl mil-mb-30"
                  dangerouslySetInnerHTML={{
                    __html: activeLocale === "ar" ? sector.list.title.arabic : sector.list.title.english,
                  }}
                />
                {sector.infograph && (
                  <div className="infograph d-flex flex-column justify-content-center align-items-center">
                    <div className="responsive-image">
                      <Image
                        src={sector.infograph.english}
                        alt="infograph"
                        priority
                        width={sector.infograph.width}
                        height={sector.infograph.height}
                      />
                    </div>
                    <div className="mil-center mil-text-xs">{sector.infograph.name}</div>
                  </div>
                )}
                <div className="row" style={{ gap: "20px", padding: "0 40px" }}>
                  {sector.list.items.map((item, key) => (
                    <div
                      className="col-lg-5 card-shadow"
                      style={{ padding: "0 40px", maxWidth: "340px" }}
                      key={`blog-post-${key}`}
                    >
                      <Link href={`/subservice/${item.id}`} legacyBehavior>
                        <a className="mil-blog-card mil-mb-60">
                          <div className="mil-post-descr">
                            <h5 className="mil-up mil-mb-30">
                              {activeLocale === "ar" ? item.label.arabic : item.label.english}
                            </h5>
                            <p className="mil-up mil-mb-30">
                              {activeLocale === "ar"
                                ? <Truncate text={item.value.arabic} maxLength={70} />
                                : <Truncate text={item.value.english} maxLength={70} />}
                            </p>
                            <div className="mil-link mil-dark mil-arrow-place mil-up">
                              <span>
                                {activeLocale === "ar" ? "إقرأ المزيد" : "Read More"}
                              </span>
                              <div
                                style={
                                  activeLocale === "ar"
                                    ? { transform: "rotate(180deg)", display: "flex" }
                                    : { transform: "rotate(0deg)", display: "flex" }
                                }
                              >
                                <ArrowIcon />
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layouts>
    )
  );
};

export default SectorDetail;
