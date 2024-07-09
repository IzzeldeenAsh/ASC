import Data from "@data/dummy/featured.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import { IconArrowNarrowRight } from '@tabler/icons-react';

const ServicesSection = () => {
  const { activeLocale, t } = useLocale();
  return (
    <>
      {/* services */}
   
      <section id="servcise">
        
        <div className="mi-invert-fix">
          <div className="container mil-p-60-0 d-flex flex-column align-items-center">
          
            <div className="mil-mb-120">
              <div
                className="mil-complex-text  justify-content-center mil-up mil-mb-15"
                style={
                  activeLocale === "ar"
                    ? { flexDirection: "row", gap: "10px" }
                    : { flexDirection: "column", gap: "10px" }}>
                <span className="d-flex" style={{ position: "relative" }}>
                 
                    <TitleHead/>
                  <h2
                    className="mil-h2  mil-center"
                    dangerouslySetInnerHTML={{ __html: t("servicesTitle1") }}/>
                </span>
                <h2
                  className="mil-h2 mil-center"
                  dangerouslySetInnerHTML={{ __html: t("servicesTitle2") }}
                />
              </div>
            </div>
         
            {/* <div className="row">
                <div className="col-lg-12">
                  <span 
                    className="mil-suptitle-right mil-suptitle mil-suptitle-dark mil-up"
                    style={{opacity: "0.7"}}
                    dangerouslySetInnerHTML={{ __html: t("servicesSubtitle1") }}
                  />
                </div>
              </div> */}

          </div>
        </div>
      </section>
      {/* services end */}
    </>
  );
};

export default ServicesSection;
