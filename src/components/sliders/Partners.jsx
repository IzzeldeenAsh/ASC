import Data from '@data/sliders/partners';
import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import { useLocale } from "@/utils/getLocale";

const PartnersSlider = () => {
  const { activeLocale, t } = useLocale();


return (
  <>
  {/* partners */}
  <div className="mil-soft-bg">
      <div className="container  mil-p-120-120">
      <div
              className="mil-complex-text justify-content-center mil-up mil-center "
              style={
                activeLocale === "ar"
                  ? { flexDirection: "row", gap: "10px" }
                  : { flexDirection: "column", gap: "10px" }}>
              <span className="d-flex mil-mb-30" style={{ position: "relative" }}>
                <div
                  className="title-yellow-head">
                  <TitleHead />
                </div>
                <h2
                  className="mil-h2  mil-center"
                  dangerouslySetInnerHTML={{ __html: Data.title.english }}/>
              </span>
             <div className="col-8">
             <div className="mil-text-lg mil-up mil-mb-60 mil-p-30-30 " dangerouslySetInnerHTML={{__html : activeLocale ==='ar' ? Data.content.arabic : Data.content.english}} />
             </div>
            </div>
            <div className="mil-p-30-0">
              <div>

              </div>
     
            </div>
     
      </div>
  </div>
  {/* partners end */}
  </>
);
};
export default PartnersSlider;