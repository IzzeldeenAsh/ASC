import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
import ABLogoLight from"@layouts/svg-icons/AB-Logo-Light"
import {HeaderMegaMenu} from "@components/HeeaderMegaMenu"
const HeroOne = () => {
    const {activeLocale , t} = useLocale();
    const bgImageEn = "https://res.cloudinary.com/dahiaq28x/image/upload/v1716280978/image_wjct1x.webp"
    const bgImageAr = ""
    return ( 
        <>
        <div className="hero-nav">
        <HeaderMegaMenu/>
        </div>
        <div className="bottom-border-nav"></div>
           <div className="logoStyle">
          <ABLogoLight/>
        </div>
  
            {/* banner */}
            
            <section className="mil-banner mil-dark-bg " >

            <div className="hero-image" style={{backgroundImage: `url(${activeLocale ==='ar' ? bgImageAr:bgImageEn})`}}></div>
                <div className="mi-invert-fix">
                    <div className="mil-gradient" />
                    <div className="container" style={{marginTop:'80px'}}> 
                        <div className="mil-banner-content mil-up">
                     
                           <h2 className="mil-h2 mil-muted hero-title mil-mb-60" dangerouslySetInnerHTML={{__html : t("heroTitle")}} style={activeLocale==='ar' ? {lineHeight:'1.5'} :  {lineHeight:'1.1'} } />
                           <div className="row">
                           </div>
                            <div className="row">
                                <div className="col-md-7 col-lg-5">
                                    <p className="mil-light-soft mil-mb-60" style={{fontSize:'18px'}}>{t("heroDescription")}</p>
                                    
                                </div>
                            </div>

                         
                
                                <div className="mil-circle-text" >
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve" className="mil-ct-svg mil-rotate" data-value="360">
                                    <defs>
                                        <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                                    </defs>
                                    <circle cx="150" cy="100" r="75" fill="none" />
                                    <g>
                                        <use xlinkHref="#circlePath" fill="none" />
                                      
                                    </g>
                                </svg>
                                <a href="#servcise" className="mil-button mil-arrow-place mil-icon-button mil-arrow-down" style={{padding : "5px" , height:"48px"}}>
                                    <ArrowIcon />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
        
    );
}
export default HeroOne;