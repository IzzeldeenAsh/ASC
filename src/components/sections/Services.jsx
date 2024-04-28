import Data from "@data/sections/services.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";
import { useLocale } from "@/utils/getLocale";
const ServicesSection = () => {
    const {activeLocale , t} = useLocale();
  return (
    <>
        {/* services */}
        <section id="servcise">
            <div className="mi-invert-fix">
                <div className="mil-animation-frame">
                    <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{"top": "300px", "right": "-100px"}}>
                        <Pentagon />
                    </div>
                    <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{"left": "150px"}}>
                        <Pentagon />
                    </div>
                </div>
                <div className="container mil-p-120-0">

                    <div className="mil-mb-120">
                        <div className="row">
                            <div className="col-lg-10">
                                <span className="mil-suptitle-right mil-suptitle mil-suptitle-dark mil-up"  dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            </div>
                        </div>

                        <div className="mil-complex-text  justify-content-center mil-up mil-mb-15" style={{'gap':'10px'}}>
                            <span className="mil-text-image"><img src="img/photo/2.jpg" alt="team" /></span>
                            <h2 className="mil-h1  mil-center" dangerouslySetInnerHTML={{__html : Data.title1}} />
                        </div>

                        <div className="mil-complex-text justify-content-center mil-up"  style={{'gap':'10px'}}>
                            <h2 className="mil-h1  mil-center" dangerouslySetInnerHTML={{__html : Data.title2}} />
                            <Link href={Data.button.link} className="mil-services-button mil-button mil-arrow-place">
                                <span>{Data.button.label}</span>
                                <div style={ activeLocale === 'ar' ? {'transform' : 'rotate(180deg)' , 'paddingTop' : '5px'} : {'transform' : 'rotate(0deg)' , 'paddingTop' : '5px'}} >
                                <ArrowIcon />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="row mil-services-grid m-0">
                        {Data.items.map((item, key) => (
                        <div key={`services-item-${key}`} className="col-md-6 col-lg-3 mil-services-grid-item p-0 " style={{position:'relative'}}>
                                <div className="mil-squares" style={activeLocale==='ar' ?{left:'4px'} : {right:'-2px'}}>
                                    <span className="mil-square"></span>
                                    <span className="mil-square"></span>
                                    <span className="mil-square"></span>
                                </div>
                            <Link href={item.link} className="mil-service-card-sm mil-up">
                                <h5 className=" mil-mb-30" dangerouslySetInnerHTML={{__html : item.title}} />
                                <p className="mil-light-soft mil-mb-30">{item.text}</p>
                                <div className="mil-button mil-icon-button-sm mil-arrow-place">
                                <div style={ activeLocale === 'ar' ? {'transform' : 'rotate(180deg)' , 'paddingTop' : '5px'} : {'transform' : 'rotate(0deg)' , 'paddingTop' : '5px'}} >
                                <ArrowIcon />
                                </div>
                                </div>
                            </Link>

                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        {/* services end */}
    </>
  );
};

export default ServicesSection;