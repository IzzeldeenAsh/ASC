import { SliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
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
               <div className="mil-text mil-up mil-mb-60 mil-p-30-30 " dangerouslySetInnerHTML={{__html : activeLocale ==='ar' ? Data.content.arabic : Data.content.english}} />
               </div>
              </div>
              <div className="mil-p-30-0">
              <Swiper
                {...SliderProps.milInfiniteSlider}
                className="swiper-container mil-infinite-show mil-up "
            >
                {Data.items.map((item, key) => (
                <SwiperSlide className="swiper-slide" key={`partners-slider-item-${key}`}>
                <a href={item.link} target="_blank" className="mil-partner-frame" style={{"width": "140px"}} aria-label={"Link"}> 
                    <img src={item.image} alt={item.alt} />
                </a>
                </SwiperSlide>
                ))}
            </Swiper>
              </div>
       
        </div>
    </div>
    {/* partners end */}
    </>
  );
};
export default PartnersSlider;