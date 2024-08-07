import Data from "@data/sections/team.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
import TitleHead from "@/src/layouts/svg-icons/TitleHead";

const TeamSection = () => {
  const { activeLocale, t } = useLocale();
  return (
    <>
      {/* team */}
      <section id="leaders" className="mil-soft-bg">
        <div className="container mil-p-60-30 ">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-xl-4" style={{flex:'1'}}>
              <div className="mil-mb-90">
             <div className="d-flex">
             <TitleHead />
                <h2
                  className="mil-up mil-mb-60 "
                  dangerouslySetInnerHTML={{ __html: activeLocale ==="ar" ? Data.title.arabic : Data.title.english }}
                />
             </div>
               <div  className="mil-text-xl mil-up mil-mb-60  px-40px position-relative">
               <div 
                
                  dangerouslySetInnerHTML={{ __html: activeLocale ==="ar" ? Data.description.arabic : Data.description.english  }}
                />
                {/* <div className="text-primary "><Link href={"/CEO-Word"}><IconCaretDownFilled size={40} /></Link></div> */}
               </div>
     <div className="mil-about-quote mil-mb-60 px-40px">
                                    <Link href={"/CEO-Word"} className="mil-avatar mil-up">
                                        <img  src={Data.avatar.image} alt={Data.avatar.alt}  />
                                    </Link>
                                    <h5 className="mil-quote mil-up"  style={activeLocale ==='ar' ? {'paddingRight' : '30px'} : {'paddingLeft' : '30px'}} dangerouslySetInnerHTML={{__html : activeLocale ==="ar" ?  Data.subtitle.arabic :Data.subtitle.english }} />
                                </div>
                <div className="mil-up px-40px">
                  <Link
                    href={Data.button.link}
                    className="mil-button mil-arrow-place mil-mb-60"
                  >
                    <span>
                      {activeLocale ==="ar" ? Data.button.label.arabic : Data.button.label.english}</span>
                    <div
                      style={
                        activeLocale === "ar"
                          ? { transform: "rotate(180deg)", display: "flex" }
                          : { transform: "rotate(0deg)", display: "flex" }
                      }
                    >
                      <ArrowIcon />
                    </div>
                  </Link>
                </div>

           
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-team-list">
                <div className="row mil-mb-60">
                {Data.col1_items.map((item, key) => (
                  <div className="col-sm-4 col-6"   key={`services1-item-${key}`}>
                      <div
                      
                        className="mil-team-card mil-up mil-mb-30"
                        style={{ position: "relative" }}
                      >
                        <div
                          className="mil-squares team-squares"
                          style={activeLocale ==='ar' ?  { right: "3px" , transform: "rotateY(180deg)" } : { right: "-4px" }  }
                        >
                          <span className="mil-square"></span>
                          <span className="mil-square"></span>
                          <span className="mil-square"></span>
                        </div>
                        <img src={item.image} alt={item.name} />
                        <div className="mil-description">
                          <div className="mil-secrc-text">
                            <h6 className="mil-muted"  style={{"fontSize":"14px"}}>{ activeLocale ==="ar" ? item.name.arabic :item.name.english }</h6>
                            <p className="mil-link mil-light-soft mil-mb-10" style={{"fontSize":"12px"}}>
                              { activeLocale ==="ar" ? item.role.arabic :item.role.english}
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team end */}
    </>
  );
};

export default TeamSection;
