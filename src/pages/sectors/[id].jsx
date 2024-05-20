import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import { useEffect, useState } from "react";
import { useLocale } from "@/utils/getLocale";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { Accordion } from "../../common/utilits";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Link from "next/link";
import sectorsData from "@data/dummy/sectors.json";
import ABQuoations from "@/src/layouts/svg-icons/AB-Quotations";
import ABLogoDark from "@layouts/svg-icons/AB-Logo-Dark";
import ABLogoLight from "@layouts/svg-icons/AB-Logo-Light";
const SectorDetail = () => {
  const { activeLocale, t } = useLocale();
  const router = useRouter();
  const { id } = router.query;
  const [activeAccordion, setActiveAccordion] = useState(0);
  const toggleAccordion = (key) => {
    setActiveAccordion(key === activeAccordion ? -1 : key);
  };
  const service = sectorsData.sectors.find((sector) => sector.id === id);
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

  if(!postData.description.title.english){
    
    return(
       <div style={{margin:"200px"}}>
            <Link href={"/"} className="mil-link mil-dark  mil-arrow-place">
                                <div style={ activeLocale === 'en' ? {'transform' : 'rotate(180deg)'} : {'transform' : 'rotate(0deg)'}} >
                                <ArrowIcon  />
                                </div>
    </Link>
          <h2   className="mil-mb-60" dangerouslySetInnerHTML={{__html : "No Content Yet"}} />
       </div>
 )
  }
  return (
    <Layouts>
      <div style={activeLocale === "ar" ? LogoStyleAr : LogoStyleEn}>

<ABLogoLight/>
       
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
        bg = {postData.imgURL}
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
                    <h4
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
            </div>
            <div className="col-lg-12">
                <h5 className="text-subtitle mil-mb-30"
                 dangerouslySetInnerHTML={{
                  __html:
                    activeLocale === "ar"
                      ? postData.list.title.arabic
                      : postData.list.title.english,
                }}
                />
               <div className="row " style={{gap:"20px",padding:"0 40px"}}>
                        {postData.list.items.map((item, key) => (
                        <div className="col-lg-5 card-shadow" style={{padding:"0 40px",maxWidth: "340px"}} key={`blog-post-${key}`}>

                            <Link href={`/blog/${item.id}`} className="mil-blog-card mil-mb-60">
                                <div className="mil-post-descr">
                                
                                    <h5 className="mil-up mil-mb-30">{activeLocale ==="ar" ? item.label.arabic : item.label.english}</h5>
                                    <p className="mil-up mil-mb-30">{activeLocale ==="ar" ? item.value.arabic : item.value.english}</p>
                                    <div className="mil-link mil-dark mil-arrow-place mil-up">
                                        <span>{activeLocale ==="ar" ? "إقرأ المزيد" : "Read More"}</span>
                                        <div  style={ activeLocale === 'ar' ? {'transform' : 'rotate(180deg)', display:'flex'} : {'transform' : 'rotate(0deg)', display:'flex'}} >
                            <ArrowIcon  />
                            </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        ))}
                    </div>
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
export default SectorDetail;

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
