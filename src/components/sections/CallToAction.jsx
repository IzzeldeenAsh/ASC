import Data from "@data/sections/call-to-action.json";
import Link from "next/link";
import { useLocale } from "@/utils/getLocale";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const CallToActionSection = ( { bg } ) => {
    const {activeLocale } = useLocale();
  return (
    <>
        {/* call to action */}
        <section className="mil-soft-bg">
            <div className="container mil-p-120-120">
                <div className="row">
                    <div className="col-lg-10">
                        <span    style={{opacity: "0.7"}} className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up" dangerouslySetInnerHTML={{__html :activeLocale ==='ar' ?  Data.subtitle.ar :  Data.subtitle.en}} />
                    </div>
                </div>
                <div className="mil-center">
                    <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : activeLocale ==='ar' ? Data.title.ar : Data.title.en }} />
                    <div className="mil-up">
                        <Link href={ Data.button.link} className="mil-button mil-arrow-place">
                            <span>{  activeLocale ==='ar' ? Data.button.label.ar : Data.button.label.en}</span>
                            <div  style={ activeLocale === 'ar' ? {'transform' : 'rotate(180deg)', display:'flex'} : {'transform' : 'rotate(0deg)', display:'flex'}} >
                            <ArrowIcon  />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/* call to action end */}
    </>
  );
};

export default CallToActionSection;