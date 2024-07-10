import Data from "@data/sections/about.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import  { useLocale } from '@/utils/getLocale';
const AboutSection = () => {
    const {activeLocale, t} = useLocale();
    return (
        <>
            {/* about */}
            <section id="about"  >
                <div className="container mil-p-60-30">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-xl-5">
                            <div className="mil-mb-60">
                                <h2 className="mil-up mil-mb-60">
                                {t("aboutDiscover")} <br/>{t("aboutWe")}  {t("aboutOur")} 
                                </h2>
                                <div className="mil-text-lg mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : activeLocale ==='ar' ? Data.description.arabic : Data.description.english}} />
                               
                            </div>
                            <div className="mil-up">
                            <Link href={Data.button.link} className="mil-button mil-arrow-place mil-mb-60"><span>{
                            activeLocale ==='ar' ? Data.button.label.arabic : Data.button.label.english
                            }</span>

                            <div style={ activeLocale === 'ar' ? {'transform' : 'rotate(180deg)' , 'display' : 'flex'} : {'transform' : 'rotate(0deg)' ,'display' : 'flex'}} >
                                <ArrowIcon  />
                                </div>
                            </Link></div>

                        </div>
                        <div className="col-lg-5">

                            <div className="mil-about-photo mil-mb-90">
                                <div className="mil-up mil-img-frame" style={{"paddingBottom": "160%"}}>
                                    <img src={Data.image.url} alt={Data.image.alt} className="mil-scale " data-value-1="1" data-value-2="1.2" />
                                </div>
                            </div>

                        </div>
                    
                    </div>
                </div>
            </section>
            {/* about end */}
        </>
    );
};

export default AboutSection;