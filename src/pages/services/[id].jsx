import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import { useEffect } from "react";
import { useLocale } from "@/utils/getLocale";
import { Accordion } from "../../common/utilits";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router"; 
import servicesData from "@data/services/services.json"
const ServiceDetail = () => {
    const {activeLocale,t} = useLocale();
    const router = useRouter();
    const {id} = router.query;
    const service = servicesData.services.find(service => service.id === id);
    useEffect(() => {
            Accordion();
      }, []);



    if(!service){
        return <div>...Loading</div>
    }
    const postData =  service
  return (
    <Layouts>
       
      <PageBanner pageTitle={activeLocale === 'ar' ?  postData.introTitle.arabic : postData.introTitle.english} breadTitle={activeLocale === 'ar' ?postData.title.arabic : postData.title.english}  anchorLink={"#service"} />

      {/* service */}
      <section id="service">
          <div className="container mil-p-120-90">
              <div className="row justify-content-between">
              <div className={ `${postData.list.items[0].label.english!=='' ? "col-lg-4" :""} mil-relative mil-mb-90`}>

                      <h4 className="mil-up mil-mb-30"  >
                        {activeLocale ==='ar' ? postData.description.title.arabic : postData.description.title.english}
                      </h4>
                      <p className="mil-up mil-mb-30"  >
                      {activeLocale==='ar' ? postData.description.content.arabic : postData.description.content.english}
                      </p>
                      {/* <div className="mil-up">
                          <Link href={postData.description.button.link} className="mil-link mil-dark mil-arrow-place">
span>{postD                              <ata.description.button.label}</span>
                          </Link>
                      </div> */}

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