import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import { useEffect } from "react";
import { useLocale } from "@/utils/getLocale";
import { Accordion } from "../../common/utilits";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router"; 
import servicesData from "@data/dummy/services.json"
import LightEnglishLogo from"@layouts/svg-icons/LightEnglishLogo"
const ServiceDetail = () => {
  const imageURL = "https://res.cloudinary.com/dsiku9ipv/image/upload/fl_preserve_transparency/v1714892946/logo_A_B-01_zrmhva.jpg"
    const {activeLocale,t} = useLocale();
    const router = useRouter();
    const {id} = router.query;
    const service = servicesData.services.find(service => service.id === id);
    const logoStyleEn = {
      position:"absolute",
      top:'45px',
      left:'64px'
    }
    const logoStyleAr = {
      position:"absolute",
      top:'45px',
      right:'64px'
    }
    useEffect(() => {
            Accordion();
      }, []);



    if(!service){
        return <div>...Loading</div>
    }
    const postData =  service
  return (
    <Layouts>
        <div style={activeLocale === 'ar' ? logoStyleAr : logoStyleEn}>
        <LightEnglishLogo url={imageURL}/>
        </div>
      <PageBanner pageTitle={activeLocale === 'ar' ?  postData.introTitle.arabic : postData.introTitle.english} breadTitle={activeLocale === 'ar' ?postData.title.arabic : postData.title.english}  anchorLink={"#service"} />

      {/* service */}
      <section id="service">
          <div className="container mil-p-120-90">
              <div className="row justify-content-between">
              <div className={ `${postData.list.items.length > 0 ? "col-lg-5" :""} mil-relative mil-mb-90`}>
              <h3 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : activeLocale ==='ar' ? postData.description.title.arabic : postData.description.title.english}} />
              <p className="mil-up mil-mb-30 mil-text-gray-800" dangerouslySetInnerHTML={{__html : activeLocale==='ar' ? postData.description.content.arabic : postData.description.content.english}} />

                      {/* <div className="mil-up">
                          <Link href={postData.description.button.link} className="mil-link mil-dark mil-arrow-place">
span>{postD                              <ata.description.button.label}</span>
                          </Link>
                      </div> */}

                  </div>
                  <div className="col-lg-6">
                    
                  {postData.list && postData.list.items && postData.list.items.length > 0 &&
        <>
            {postData.list.items.map((item, key) => (
                <div className="mil-accordion-group mil-up" key={`service-list-${key}`}>
                    <div className="mil-accordion-menu">
                        <p className="mil-accordion-head">{activeLocale === 'ar' ? item.label.arabic : item.label.english}</p>
                        <div className="mil-symbol mil-h3 ">
                            <div className="mil-plus">+</div>
                            <div className="mil-minus">-</div>
                        </div>
                    </div>
                    <div className="mil-accordion-content mil-text" dangerouslySetInnerHTML={{__html : activeLocale === 'ar' ? item.value.arabic : item.value.english}} />
                                    </div>
            ))}
        </>
    }
</div>
              </div>
          </div>
      </section>
      {/* service end */}
      
      {/* <PricingSection /> */}

      {/* <RelatedServices services={related} /> */}
      
    </Layouts>
  );
};
export default ServiceDetail;

export async function getServerSideProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
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