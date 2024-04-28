import Data from "@data/sections/call-to-action.json";
import Link from "next/link";
import { useLocale } from "@/utils/getLocale";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const CallToActionSection = ( { bg } ) => {
    const {activeLocale , t} = useLocale();
  return (
    <>
        {/* call to action */}
        <section className="mil-soft-bg">
            <div className="container mil-p-120-120">
                <div className="row">
                    <div className="col-lg-10">
                        <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                    </div>
                </div>
                <div className="mil-center">
                    <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />
                    <div className="mil-up">
                        <Link href={Data.button.link} className="mil-button mil-arrow-place">
                            <span>{Data.button.label}</span>
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