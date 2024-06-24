import { SliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from '@data/sliders/partners';
import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import { useLocale } from "@/utils/getLocale";
import { useEffect, useRef } from "react";

const PartnersSlider = () => {
  const { activeLocale, t } = useLocale();
  const swiperRefLocal = useRef();
  useEffect(() => {
    // Access Swiper instance directly after initialization
    if (swiperRefLocal.current && swiperRefLocal.current.swiper) {
      // Set disableOnInteraction to false (important for immediate stop)
      swiperRefLocal.current.swiper.params.autoplay.disableOnInteraction = false;
    }
  }, []); // Run this effect once after the component mounts
  const handleMouseEnter = () => {
    if (swiperRefLocal.current && swiperRefLocal.current.swiper && swiperRefLocal.current.swiper.autoplay) {
      swiperRefLocal.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRefLocal.current && swiperRefLocal.current.swiper && swiperRefLocal.current.swiper.autoplay) {
      swiperRefLocal.current.swiper.autoplay.start();
    }
  };

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
             <div className="mil-text mil-up mil-mb-60 mil-p-30-30 " dangerouslySetInnerHTML={{__html : activeLocale ==='ar' ? Data.content.arabic : Data.content.english}} />
             </div>
            </div>
            <div className="mil-p-30-0">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Swiper
              ref={swiperRefLocal}
              {...SliderProps.milInfiniteSlider} // Ensure this is correctly set
              className="swiper-container mil-infinite-show mil-up "
          >
              {Data.items.map((item, key) => (
              <SwiperSlide className="swiper-slide" key={`partners-slider-item-${key}`}>
              <div className="mil-partner-frame" style={{"width": "120px"}} > 
                  <img src={item.image} alt={item.alt} />
              </div>
              </SwiperSlide>
              ))}
          </Swiper>
          </div>
            </div>
     
      </div>
  </div>
  {/* partners end */}
  </>
);
};
export default PartnersSlider;