import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import data from "@data/dummy/team.json";
import { useLocale } from "@/utils/getLocale";
import { NextSeo } from 'next-seo';

const Team = () => {
  const { activeLocale } = useLocale();
  const TeamData = data.TeamData;

  const pageTitle = "Our Team - A&B Consulting";
  const description = "Meet the team of difference makers at A&B Consulting. Our dedicated professionals are here to help you achieve your business goals.";
  const keywords = "team, professionals, business consulting, A&B Consulting";

  return (
    <Layouts>
      <NextSeo
        title={pageTitle}
        description={description}
        canonical="https://alokab.co/team"
        openGraph={{
          url: "https://alokab.co/team",
          title: pageTitle,
          description: description,
          images: [
            {
              url: "/path/to/team-image.jpg",
              width: 800,
              height: 600,
              alt: pageTitle,
              type: 'image/jpeg',
            },
          ],
          siteName: 'A&B Alokab Consulting',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords,
          },
        ]}
      />

      <PageBanner pageTitle={"Difference <br>  <span class=\"mil-thin\">Makers</span>"} breadTitle={"Team"} anchorLabel={"Our team"} anchorLink={"#team"} />
      {/* team */}
      <section id="team">
        <div className="container">
          <div className="row" style={{ padding: "10px" }}>
            {TeamData.map((item, key) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={`team-item-${key}`} style={{ position: "relative" }}>
                <div className="mil-team-card mil-up mil-mb-30">
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
