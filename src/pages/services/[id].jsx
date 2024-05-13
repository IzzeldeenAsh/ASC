import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import { useEffect, useState } from "react";
import { useLocale } from "@/utils/getLocale";
import { Accordion } from "../../common/utilits";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import servicesData from "@data/dummy/services.json";
import ABQuoations from "@/src/layouts/svg-icons/AB-Quotations";
import ABLogoDark from "@layouts/svg-icons/AB-Logo-Dark";
const ServiceDetail = () => {
  const { activeLocale, t } = useLocale();
  const router = useRouter();
  const { id } = router.query;
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (key) => {
    setActiveAccordion(key === activeAccordion ? -1 : key);
  };
  const service = servicesData.services.find((service) => service.id === id);
  const LogoStyleAr = {
    position: "absolute",
    top: "45px",
    width: "70px",
    height: "51px",
    right: "64px",
    zIndex: "100",
  };
  const LogoStyleEn = {
    position: "absolute",
    top: "45px",
    left: "64px",
    zIndex: "100",
    width: "70px",
    height: "51px",
  };
  useEffect(() => {
    Accordion();
  }, []);

  if (!service) {
    return <div>...Loading</div>;
  }
  const postData = service;
  return (
    <Layouts>
      <div style={activeLocale === "ar" ? LogoStyleAr : LogoStyleEn}>
        <ABLogoDark />
      </div>
      <PageBanner
        pageTitle={
          activeLocale === "ar"
            ? postData.introTitle.arabic
            : postData.introTitle.english
        }
        breadTitle={
          activeLocale === "ar" ? postData.title.arabic : postData.title.english
        }
        anchorLink={"#service"}
        imgUrl={postData.imgURL}
      />

      {/* service */}
      <section id="service">
       
        <div className="container mil-p-90-90">
          <div className="row justify-content-between">
            <div
              className={`${
                postData.list.items.length > 0 ? "" : ""
              } mil-relative mil-mb-60 col-lg-12`}
            >
              <div
                style={{
                  position: "relative",
                  flex: "1",
                  justifyContent: "space-between",
                }}
              >
                <ul
                  className={
                    activeLocale === "en"
                      ? "mil-lines-highlight-en mil-center mil-mb-30"
                      : "mil-lines-highlight-ar mil-center mil-mb-30"
                  }
                >
                  <li>
                    <h3
                      style={{ fontStyle: "italic" }}
                      className="mil-up mil-mb-30 "
                      dangerouslySetInnerHTML={{
                        __html:
                          activeLocale === "ar"
                            ? postData.description.title.arabic
                            : postData.description.title.english,
                      }}
                    />
                  </li>
                </ul>

                <div
                  className="title-yellow-head"
                  style={
                    activeLocale === "ar"
                      ? { right: "-40px", transform: "rotateY(180deg)" }
                      : { left: "-20px" }
                  }
                >
                  <ABQuoations />
                </div>
              </div>

              <p
                className="mil-up mil-mb-30 mil-text-gray-800"
                dangerouslySetInnerHTML={{
                  __html:
                    activeLocale === "ar"
                      ? postData.description.content.arabic
                      : postData.description.content.english,
                }}
              />
              {postData.list.highlights.map((item, key) => (
                <div key={`service-list-${key}`}>
                  <p
                    className="mil-up mil-mb-30 mil-text-gray-800"
                    dangerouslySetInnerHTML={{
                      __html:
                        activeLocale === "ar"
                          ? item.content.arabic
                          : item.content.english,
                    }}
                  ></p>
                </div>
              ))}
            </div>
            <div className="col-lg-12">
              {postData.list &&
                postData.list.items &&
                postData.list.items.length > 0 && (
                  <>
                    {postData.list.items.map((item, key) => (
                      <div
                        className="mil-accordion-group mil-up"
                        key={`service-list-${key}`}
                      >
                        <div
                          className={
                            key === activeAccordion
                              ? "mil-accordion-menu mil-active"
                              : "mil-accordion-menu"
                          }
                          onClick={() => toggleAccordion(key)}
                        >
                          <p className="mil-accordion-head">
                            {activeLocale === "ar"
                              ? item.label.arabic
                              : item.label.english}
                          </p>
                          <div className="mil-symbol mil-h3">
                            <div
                              style={{
                                display:
                                  key === activeAccordion ? "none" : "block",
                              }}
                            >
                              +
                            </div>
                            <div
                              style={{
                                display:
                                  key === activeAccordion ? "block" : "none",
                              }}
                            >
                              -
                            </div>
                          </div>
                        </div>
                        <div
                          className="mil-accordion-content mil-text"
                          dangerouslySetInnerHTML={{
                            __html:
                              activeLocale === "ar"
                                ? item.value.arabic
                                : item.value.english,
                          }}
                          style={{
                            height: key === activeAccordion ? "auto" : "0",
                          }}
                        />
                      </div>
                    ))}
                  </>
                )}
            </div>
          </div>
          {/* <Link
            href="/contact"
            className="mil-up mil-link mil-link-contact mil-btn-space mil-arrow-place"
          >
            <span>{t("contactUs")}</span>
            <div
              style={
                activeLocale === "ar"
                  ? { transform: "rotate(180deg)" }
                  : { transform: "rotate(0deg)" }
              }
            ></div>
          </Link> */}
        </div>
      </section>
    </Layouts>
  );
};
export default ServiceDetail;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

// export async function getStaticPaths() {
//     const paths = getAllServicesIds()

//     return {
//       paths,
//       fallback: false
//     }
// }

// export async function getStaticProps({ params,locale }) {
//   }
//     const relatedServices = await getRelatedServices(params.id)

//     return {
//       props: {
//         data: postData
//       }
//     }
// }
