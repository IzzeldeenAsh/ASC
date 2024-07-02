import Data from "@data/sections/call-to-action.json";
import Link from "next/link";
import { useLocale } from "@/utils/getLocale";
import ArrowIcon from "@layouts/svg-icons/Arrow";
const Together = ( ) => {
    const {activeLocale , t} = useLocale();
  return (
    <>
        {/* call to action */}
        <section >
            <div className="container mil-p-120-120 mil-up">
                <div className="mil-center">
                <h2 className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html :
                     activeLocale === "ar" ?
                      "معًا، <br>نحقق الانتقال من  أ إلى ب." : 
                      "Together, we make <br> the leap <span class=\"mil-thin\">from</span>  A <span class=\"mil-thin\">to</span> B."}} />
                  
                    <div className="mil-up">
                        <Link href={Data.button.link} className="mil-button mil-arrow-place">
                            <span>{activeLocale ==='ar' ?Data.button.label.ar : Data.button.label.en}</span>
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

export default Together;