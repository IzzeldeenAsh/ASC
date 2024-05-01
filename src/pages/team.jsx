import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const TeamData = [
    {
        "image": "/img/faces/1.jpg",
        "name": "Anna Oldman",
        "role": "Art Director",
        
    },
    {
        "image": "/img/faces/3.jpg",
        "name": "Oscar Freeman",
        "role": "Frontend Dev",
       
    },
    {
        "image": "/img/faces/2.jpg",
        "name": "Emma Newman",
        "role": "Founder",
        
    },
    {
        "image": "/img/faces/4.jpg",
        "name": "Lisa Trueman",
        "role": "UI/UX Designer",
       
    },
    {
        "image": "/img/faces/5.jpg",
        "name": "Tom Oldman",
        "role": "Art Director",
       
    },
    {
        "image": "/img/faces/6.jpg",
        "name": "Corey Trueman",
        "role": "Technical Director",
       
    },
    {
        "image": "/img/faces/7.jpg",
        "name": "Justin Newman",
        "role": "Copywriter",
       
    },
    {
        "image": "/img/faces/8.jpg",
        "name": "Spunkie",
        "role": "Paw giver",
       
    }
]

const Team = () => {
  return (
    <Layouts>
        <PageBanner pageTitle={"Meet <span className=\"mil-thin\">Our</span><br> Creative <span className=\"mil-thin\">Team</span>"} breadTitle={"Team"} anchorLabel={"Our team"} anchorLink={"#team"} />
      
        {/* team */}
        <section id="team">
            <div className="container mil-p-120-90">
                <div className="row">
                    {TeamData.map((item, key) => (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={`team-item-${key}`}>

                        <div className="mil-team-card mil-up mil-mb-30">
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