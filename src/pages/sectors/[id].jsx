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
import PaginatedBlog from "@components/PaginatedBlog"
import Truncate from "@/src/components/Truncate";
const SectorDetail = () => {
  const { activeLocale } = useLocale();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    Accordion();
  }, []);
  if (!id) return null; // Ensure the id is available

  const service = sectorsData.sectors.find((sector) => sector.id === id);

  if (!service) return <div>Service not found</div>; // Handle service not found

  const postData = service;
  const pageTitle =
    activeLocale === "ar"
      ? service.introTitle.arabic
      : service.introTitle.english;
  const breadTitle =
    activeLocale === "ar" ? service.title.arabic : service.title.english;
  const slogan =
    activeLocale === "ar"
      ? service.description.title.arabic
      : service.description.title.english;
  const content =
    activeLocale === "ar"
      ? service.description.content.arabic
      : service.description.content.english;
const logoColor = service.logoColor
const subText = activeLocale === "ar"
? service.short.arabic
: service.short.english;
const breadColor = logoColor !== "light" ? "dark" : "light"
  return (
    postData && (
      <Layouts >
        <div className="logoStyle">
          {logoColor ==="light" &&  <ABLogoLight />}
          {logoColor ==="dark" &&  <ABLogoDark />}
        </div>
        <PageBanner
          pageTitle={pageTitle}
          breadTitle={breadTitle}
          breadColor={breadColor}
          anchorLink={"#sectors"}
          subtext={subText}
          bg={postData.imgURL}
        />

        {/* Sector */}
        <section id="service">
          <div className="container mil-p-90-90">
            <div className="row justify-content-between">
              <div className="mil-relative mil-mb-60 col-lg-12">
                <div className="position-relative justify-content-between flex-1">
                  <ul
                  className={ `mil-center mil-mb-30 ${ activeLocale === "en" ? "mil-lines-highlight-en " : "mil-lines-highlight-ar "}`}>
                    <li>
                      <h4
                        className="mil-up mil-mb-30 italic"
                        dangerouslySetInnerHTML={{
                          __html:
                          slogan
                        }}
                      />
                    </li>
                  </ul>

                  <div className="title-yellow-head">
                    <ABQuoations />
                  </div>
                </div>

                <p
                  className="mil-up mil-mb-30 mil-text-lg "
                  dangerouslySetInnerHTML={{
                    __html:content
                  }}
                />
              </div>
              <div className="col-lg-12">
                <h5
                  className="mil-text-xl mil-mb-30"
                  dangerouslySetInnerHTML={{
                    __html:
                      activeLocale === "ar"
                        ? postData.list.title.arabic
                        : postData.list.title.english,
                  }}
                />
                <div
                  className="row "
                  style={{ gap: "20px", padding: "0 40px" }}
                >

                  {postData.list.items.map((item, key) => (
                    <div
                      className="col-lg-5 card-shadow"
                      style={{ padding: "0 40px", maxWidth: "340px" }}
                      key={`blog-post-${key}`}
                    >
                      <Link
                        href={`/subservice/${item.id}`}
                        className="mil-blog-card mil-mb-60"
                      >
                        <div className="mil-post-descr">
                          <h5 className="mil-up mil-mb-30">
                            {activeLocale === "ar"
                              ? item.label.arabic
                              : item.label.english}
                          </h5>
                          <p className="mil-up mil-mb-30">
                            {activeLocale === "ar"
                              ? <Truncate text={item.value.arabic} maxLength={70} />
                              : <Truncate text={item.value.english} maxLength={70} />}
                          </p>
                          <div className="mil-link mil-dark mil-arrow-place mil-up">
                            <span>
                              {activeLocale === "ar"
                                ? "إقرأ المزيد"
                                : "Read More"}
                            </span>
                            <div
                              style={
                                activeLocale === "ar"
                                  ? {
                                      transform: "rotate(180deg)",
                                      display: "flex",
                                    }
                                  : {
                                      transform: "rotate(0deg)",
                                      display: "flex",
                                    }
                              }
                            >
                              <ArrowIcon />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                {/* <PaginatedBlog
                items={postData.list.items}
              /> */}
              
              </div>
            </div>
          </div>
        </section>
      </Layouts>
    )
  );
};
export default SectorDetail;
