import Data from '@data/sliders/partners';
import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import { useLocale } from "@/utils/getLocale";
import LogoSlider from "@common/LogoSlider/LogoSlider.js"
const PartnersSlider = () => {
  const { activeLocale, t } = useLocale();


return (
  <>
  {/* partners */}
  <div className=" mil-p-60-30 mil-soft-bg">
      <div className="container ">
      <div
              className="mil-complex-text flex-column justify-content-center mil-up mil-center "
              style={
                activeLocale === "ar"
                  ? { flexDirection: "row", gap: "10px" }
                  : { flexDirection: "column", gap: "10px" }}>
              <span className="d-flex mil-mb-30" style={{ position: "relative" }}>
               
                  <TitleHead />
                <h2
                  className="mil-h2  mil-center"
                  dangerouslySetInnerHTML={{ __html: activeLocale==='ar' ? Data.title.arabic: Data.title.english }}/>
              </span>
             <div className="col-8">
             <div className="mil-text-xl mil-up mil-mb-60 mil-p-30-30 italic" dangerouslySetInnerHTML={{__html : activeLocale ==='ar' ? Data.content.arabic : Data.content.english}} />
             </div>
            </div>
           
     
      </div>
      <div className="mil-p-30-0">
              <div>
              <LogoSlider/>
              </div>
     
            </div>
  </div>
  {/* partners end */}
  </>
);
};
export default PartnersSlider;