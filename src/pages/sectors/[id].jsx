import { useState, useEffect } from 'react';
import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import { useLocale } from "@/utils/getLocale";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { Accordion } from "../../common/utilits";
import { useRouter } from "next/router";
import Link from "next/link";
import sectorsData from "@data/dummy/sectors.json";
import QuotesIcons from "@/src/layouts/svg-icons/Quotes";
import ABLogoLight from "@/src/layouts/svg-icons/AB-Logo-Light";
import Image from "next/image";
import Truncate from "@/src/components/Truncate";
import { NextSeo } from 'next-seo';
import { HeaderMegaMenu } from "@components/HeeaderMegaMenu";
import { IconArrowDown, IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";

export const getStaticPaths = async () => {
  const paths = sectorsData.sectors.map((sector) => ({
    params: { id: sector.id },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
  const sector = sectorsData.sectors.find((sector) => sector.id === params.id);

  if (!sector) {
    return { notFound: true };
  }

  return {
    props: { sector },
    revalidate: 10, // ISR: Regenerate the page at most once every 10 seconds
  };
};

const SectorDetail = ({ sector }) => {
  const { activeLocale } = useLocale();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    Accordion();
  }, []);

  if (!sector) return <div>Sector not found</div>;

  const labels = {
    english: {
      experts: "Experts",
      relatedArticles: "Related articles",
      projects: "Projects",
    },
    arabic: {
      experts: "الخبراء",
      relatedArticles: "مقالات ذات صلة",
      projects: "مشاريع",
    },
  };

  const metaTitle = activeLocale === "ar" ? sector.title.arabic : sector.title.english;
  const pageTitle = activeLocale === "ar" ? sector.introTitle.arabic : sector.introTitle.english;
  const breadTitle = activeLocale === "ar" ? sector.title.arabic : sector.title.english;
  const slogan = activeLocale === "ar" ? sector.description.title.arabic : sector.description.title.english;
  const content = activeLocale === "ar" 
    ? sector.description.content.arabic.replace(/{{locale}}/g, activeLocale) 
    : sector.description.content.english;
  const keywords = sector.keywords.join(", ");
  const description = activeLocale === "ar" ? sector.short.arabic : sector.short.english;
  const imageUrl = sector.imgURL;
  const logoColor = sector.logoColor;
  const breadColor = logoColor !== "light" ? "dark" : "light";
 
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
        canonical={`https://asc-seven-liard.vercel.app/sectors/${id}`}
        openGraph={{
          url: `https://asc-seven-liard.vercel.app/sectors/${id}`,
          title: breadTitle,
          description: description,
          images: [
            {
              url: imageUrl,
              width: 800,
              height: 600,
              alt: pageTitle,
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
        breadColor={breadColor}
        shareTitle={breadTitle}
        anchorLink="#services"
        subtext={description}
        bg={imageUrl}
      />
      <div className="hero-nav">
        <HeaderMegaMenu />
      </div>
      <div className="nav-shadow"></div>
      <section id="services">
        <div className="slogan-bg">
          <div className="slogan-container container">
            <span className="slogan-text" dangerouslySetInnerHTML={{ __html: slogan }} />
            <div className="quotes-icons">
              <QuotesIcons side="right" />
            </div>
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
        <div id="service" className={`container ${sector.list.items.length > 0 ? "mil-p-30-30" : "mil-p-30-90"}`}>
          <div className="row justify-content-between">
            <div className="mil-relative col-lg-12">
              <div className="position-relative justify-content-between flex-1">
                <ul>
                  <li className="position-relative"></li>
                </ul>
              </div>
              <p
                className="mil-up mil-mb-30 mil-text-xl mil-p-120-0"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <div className="col-lg-12">
              {sector.infograph && (
                <div className="infograph d-flex flex-column justify-content-center align-items-center">
                  <div className="responsive-image">
                    <Image
                     src={activeLocale ==='ar' ? sector.infograph.arabic: sector.infograph.english}
                      alt="infograph"
                      priority
                      width={sector.infograph.width}
                      height={sector.infograph.height}
                    />
                  </div>
                  <div className="mil-center mil-text-xs">{sector.infograph.name}</div>
                </div>
              )}
            </div>
          </div>
          <div className="d-flex align-items-end justify-content-center mil-p-30-30">
            <ul className="service-banner-links p-inline-start-40 mil-text mil-up d-flex gap-20 justify-content-center">
              <li>
                <span className="mil-text-sm text-dark anchor-link">
                  {activeLocale === 'ar' ? <IconCaretLeftFilled /> : <IconCaretRightFilled />} {activeLocale === 'ar' ? labels.arabic.experts : labels.english.experts}
                </span>
              </li>
              <li>
                <span className="mil-text-sm text-dark anchor-link">
                  {activeLocale === 'ar' ? <IconCaretLeftFilled /> : <IconCaretRightFilled />} {activeLocale === 'ar' ? labels.arabic.relatedArticles : labels.english.relatedArticles}
                </span>
              </li>
              <li>
                <span className="mil-text-sm text-dark anchor-link">
                  {activeLocale === 'ar' ? <IconCaretLeftFilled /> : <IconCaretRightFilled />} {activeLocale === 'ar' ? labels.arabic.projects : labels.english.projects}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {sector.list.items.length > 0 && (
        <section className="mil-soft-bg mil-p-60-90">
          <div className="container">
            <div className="row" style={{ gap: "20px", padding: "0 40px" }}>
              <h5
                className="mil-text-xl mil-mb-30"
                dangerouslySetInnerHTML={{
                  __html: activeLocale === "ar" ? sector.list.title.arabic : sector.list.title.english,
                }}
              />
{sector.list.items.map((item, key) => (
  <div
    className="col-lg-5 card-shadow"
    style={{ padding: "0 40px", maxWidth: "340px" }}
    key={`blog-post-${key}`}
  >
      <Link href={`/subservice/${item.id}`} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
      <div className='card-shadow-hoverd ' style={{backgroundImage: `url(${item.image})`}}>
        <div className="csh-title d-flex"> 
          <div className="pattern">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M30 0H0V7.66667V30H19.9048V7.66667L30 7.66667V0Z" fill="#F5D74C"/>
            </svg>
          </div>
          <span>{activeLocale === "ar" ? item.label.arabic : item.label.english}</span>
        </div>
        <div className="csh-subtitle">
          {activeLocale === "ar" ? (
            <Truncate text={item.value.arabic} maxLength={100} />
          ) : (
            <Truncate text={item.value.english} maxLength={100} />
          )}
        </div>
          <div className="mil-link mil-accent mil-arrow-place mil-up">
            <div style={activeLocale === 'ar' ? {'transform' : 'rotate(180deg)', display:'flex'} : {'transform' : 'rotate(0deg)', display:'flex'}}>
              <ArrowIcon margin={"0"} />
            </div>
          </div>
      </div>
      </a>
      </Link>
      <div className="mil-blog-card mil-mb-30">
        {item.image && (
          <div className="service-image-abs-wrapper">
            <div className="service-image-abs">
              <img className="w-100" style={{ minHeight: "225px" }} src={item.image} alt="service-image" />
            </div>
          </div>
        )}
        <div className="mil-post-descr">
          <h5 className="mil-up mil-mb-30">
            {activeLocale === "ar" ? item.label.arabic : item.label.english}
          </h5>
          <p className="mil-up mil-mb-30">
            {activeLocale === "ar" ? (
              <Truncate text={item.value.arabic} maxLength={70} />
            ) : (
              <Truncate text={item.value.english} maxLength={70} />
            )}
          </p>
        </div>
      </div>
  </div>
))}


            </div>
          </div>
        </section>
      )}
    </Layouts>
  );
};

export default SectorDetail;
