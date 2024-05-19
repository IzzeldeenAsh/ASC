import Data from "@data/sections/team.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useLocale } from "@/utils/getLocale";
const TeamSection = () => {
  const { activeLocale, t } = useLocale();
  return (
    <>
      {/* team */}
      <section>
        <div className="container mil-p-120-30">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-xl-4">
              <div className="mil-mb-90">
                <h2
                  className="mil-up mil-mb-60"
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
                <div
                  className="mil-text mil-up mil-mb-30 "
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />
     <div className="mil-about-quote mil-mb-60">
                                    <Link href={"/CEO-Word"} className="mil-avatar mil-up">
                                        <img  src={Data.avatar.image} alt={Data.avatar.alt}  />
                                    </Link>
                                    <h6 className="mil-quote mil-up"  style={activeLocale ==='ar' ? {'paddingRight' : '30px'} : {'paddingLeft' : '30px'}} dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                </div>
                <div className="mil-up">
                  <Link
                    href={Data.button.link}
                    className="mil-button mil-arrow-place mil-mb-60"
                  >
                    <span>{activeLocale ==="ar" ? Data.button.label.arabic : Data.button.label.english}</span>
                    
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
                  <div className="col-sm-4">
                    {Data.col1_items.map((item, key) => (
                      <div
                        key={`services1-item-${key}`}
                        className="mil-team-card mil-up mil-mb-30"
                        style={{ position: "relative" }}
                      >
                        <div
                          className="mil-squares team-squares"
                          style={{ right: "-4px" }}
                        >
                          <span className="mil-square"></span>
                          <span className="mil-square"></span>
                          <span className="mil-square"></span>
                        </div>
                        <img src={item.image} alt={item.name} />
                        <div className="mil-description">
                          <div className="mil-secrc-text">
                            <h6 className="mil-muted">{item.name}</h6>
                            <p className="mil-link mil-light-soft mil-mb-10">
                              {item.role}
                            </p>
                            <ul className="mil-social-icons mil-center">
                              {item.social.map((social, key2) => (
                                <li key={`services1-item${key}-social-${key2}`}>
                                  <a
                                    href={social.link}
                                    target="_blank"
                                    className="social-icon"
                                    title={social.title}
                                  >
                                    {" "}
                                    <i
                                      className={social.icon}
                                      aria-label={"Link"}
                                    />
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-sm-4">
                    <p
                      className="mil-mobile-hidden mil-text-sm mil-mb-30"
                      style={{ height: "20px" }}
                      dangerouslySetInnerHTML={{ __html: Data.note }}
                    />

                    {Data.col2_items.map((item, key) => (
                      <div
                        key={`services2-item-${key}`}
                        className="mil-team-card mil-up mil-mb-30"
                        style={{ position: "relative" }}
                      >
                        <div
                          className="mil-squares team-squares"
                          style={{ right: "-4px" }}
                        >
                          <span className="mil-square"></span>
                          <span className="mil-square"></span>
                          <span className="mil-square"></span>
                        </div>
                        <img src={item.image} alt={item.name} />
                        <div className="mil-description">
                          <div className="mil-secrc-text">
                            <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                            <p className="mil-link mil-light-soft mil-mb-10">
                              {item.role}
                            </p>
                            <ul className="mil-social-icons mil-center">
                              {item.social.map((social, key2) => (
                                <li key={`services2-item${key}-social-${key2}`}>
                                  <a
                                    href={social.link}
                                    target="_blank"
                                    className="social-icon"
                                    title={social.title}
                                    aria-label={"Link"}
                                  >
                                    {" "}
                                    <i className={social.icon} />
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-sm-4">
                    <p
                      className="mil-mobile-hidden mil-text-sm mil-mb-30"
                      style={{ height: "80px" }}
                      dangerouslySetInnerHTML={{ __html: Data.note }}
                    />

                    {Data.col3_items.map((item, key) => (
                      <div
                        key={`services2-item-${key}`}
                        className="mil-team-card mil-up mil-mb-30"
                        style={{ position: "relative" }}
                      >
                        <div
                          className="mil-squares team-squares"
                          style={{ right: "-4px" }}
                        >
                          <span className="mil-square"></span>
                          <span className="mil-square"></span>
                          <span className="mil-square"></span>
                        </div>
                        <img src={item.image} alt={item.name} />
                        <div className="mil-description">
                          <div className="mil-secrc-text">
                            <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                            <p className="mil-link mil-light-soft mil-mb-10">
                              {item.role}
                            </p>
                            <ul className="mil-social-icons mil-center">
                              {item.social.map((social, key2) => (
                                <li key={`services2-item${key}-social-${key2}`}>
                                  <a
                                    href={social.link}
                                    target="_blank"
                                    className="social-icon"
                                    title={social.title}
                                    aria-label={"Link"}
                                  >
                                    {" "}
                                    <i className={social.icon} />
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
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
