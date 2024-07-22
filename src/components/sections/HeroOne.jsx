import { useLocale } from "@/utils/getLocale";
import ABLogoLight from"@layouts/svg-icons/AB-Logo-Light"
import { IconArrowDown } from '@tabler/icons-react';
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
        <div className="nav-shadow"></div>
           <div className="logoStyle">
          <ABLogoLight/>
        </div>
       
            {/* banner */}
            <section className="mil-banner mil-dark-bg " >
            <div className="hero-image" 
           style={{
            backgroundImage: `url(${activeLocale === 'ar' ? bgImageEn : bgImageEn})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh', // Ensure the container has height
            width: '100%', // Ensure the container has width
        }}></div>
                <div className="mi-invert-fix">
                    <div className="mil-gradient" />
                    <div className="container" style={{marginTop:'80px'}}> 
                        <div className="mil-banner-content mil-up " style={{direction:"ltr"}}>
                     
                           <h2 className="mil-h2 mil-muted hero-title mil-mb-60 hero-title"  dangerouslySetInnerHTML={{__html : t("heroTitle")}} style={activeLocale==='ar' ? {lineHeight:'1.5' } :  {lineHeight:'1.1'} } />
                           <div className="row">
                           </div>
                            <div className="row">
                                <div className="col-lg-7" >
                                    <p className="mil-light-soft mil-mb-60 mil-text-xl hero-description" style={{lineHeight:'1.3'}} >{t("heroDescription")}</p>
                                    
                                </div>
                            </div>

                         
                
                               
                                <a href="#servcise" className="" style={{padding : "5px" , height:"48px"}}>
                               <IconArrowDown color="#F6D84D" size={"40px"} className="scroll-down-arrow"/>
                                </a>

                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
        
    );
}
export default HeroOne;