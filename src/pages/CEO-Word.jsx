import React from 'react'
import Data from "@data/sections/hero-2.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
import Pentagon from "@layouts/pentagon/Index";
const CEOWord = () => {
    const { activeLocale, t } = useLocale();
  return (
    <>
    {/* banner */}
    <section className="mil-banner-personal">

        <div className="mil-animation-frame">
            <div className="mil-animation mil-position-4 mil-dark mil-scale" data-value-1="7" data-value-2="1.4" style={{"right": "25%"}}>
                <Pentagon />
            </div>
        </div>

        <div className="container">
            <div className="mil-banner-content mil-up">

                <div className="row align-items-start">
                    <div className="col-lg-6">
                        <div className="mil-personal-text">
                            <p className="mil-mb-60">{Data.subtitle}</p>
                            <h1 className="mil-mb-60" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <span     style={{opacity: "0.7"}} className="mil-suptitle mil-suptitle-dark mil-mb-60" dangerouslySetInnerHTML={{__html : Data.text}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="mil-portrait-frame">
                            <img src={Data.image.url} alt={Data.image.alt} />
                        </div>
                    </div>
                </div>

                <div className="mil-banner-panel">
                    <h5>{Data.bottom.title}</h5>
                </div>

            </div>
        </div>

    </section>
    {/* banner end */}
</>
  )
}

export default CEOWord