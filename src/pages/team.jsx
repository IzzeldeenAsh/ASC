import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import data from "@data/dummy/team.json" 
import { useLocale } from "@/utils/getLocale";
const Team = () => {
  
    const { activeLocale, t } = useLocale();
    const TeamData  = data.TeamData
  return (
    <Layouts>
        <PageBanner pageTitle={"Difference <br>  <span class=\"mil-thin\">Makers</span>"} breadTitle={"Team"} anchorLabel={"Our team"} anchorLink={"#team"} />
      
        {/* team */}
        <section id="team">
            <div className="container">
                <div className="row">
                    {TeamData.map((item, key) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={`team-item-${key}`}  style={{ position: "relative" }}>
                        <div className="mil-team-card mil-up mil-mb-30">
                        <div
                          className="mil-squares team-squares"
                          style={{ right: "-4px"}}
                          
                        >
                          <span className="mil-square"></span>
                          <span className="mil-square"></span>
                          <span className="mil-square"></span>
                        </div>
                            <img src={item.image} alt={item.name} />
                            <div className="mil-description">
                                <div className="mil-secrc-text">
                                    <h5 className="mil-muted mil-mb-5">{item.name}</h5>
                                    <p className="mil-link mil-light-soft mil-mb-10">{item.role}</p>
                                   
                                </div>
                            </div>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* team end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Team;