import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import { useLocale } from "@/utils/getLocale";
import React, { useState } from "react";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Link from "next/link";

const CardGrid = () => {
  const { activeLocale, t } = useLocale();
  const [activeCard, setActiveCard] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="mil-p-60-90">
      <div className="container mil-mb-60">
        <div className="d-flex">
          <TitleHead />
          <h2
            style={{fontSize:"40px"}}
            dangerouslySetInnerHTML={{
              __html:
                activeLocale === "ar"
                  ? "استراتيجيات فعّالة لقطاع الصناعة"
                  : "Innovating industrial strategies for a lasting impact",
            }}
          />
        </div>
      </div>
      <section className="cards">
        {[
          {
            title: "Regulatory compliance and licensing",
            description:
              "  Regulatory compliance requires a thorough understanding of relevant regulations and the implementation of...",
            fullDescription:
              "  Regulatory compliance requires a thorough understanding of relevant regulations and the implementation of robust systems to continuously monitor and enhance manufacturing processes.",
            
            link: "subservice/industrial-regulatory-compliance-and-licensing",
            imgUrl: "https://res.cloudinary.com/dahiaq28x/image/upload/v1721836825/38690_jmdpiq.webp",
          },
          {
            title:  "Funding",
            description:
                           "From bank loans to government grants, or partnering with companies through joint...",
            fullDescription:
             "From bank loans to government grants, or partnering with companies through joint ventures, A&B industrial project funding solutions involve several strategies, depending on the projects.",
            link: "subservice/industrial-funding",
            imgUrl: "https://res.cloudinary.com/dahiaq28x/image/upload/v1721836396/2295_lilkvv.png",
          },
          {
            title: "Renewable Energy",
            description:
              "A&B team of experts is dedicated to helping businesses ...",
            fullDescription:
              "A&B team of experts is dedicated to helping businesses and organizations lower their energy costs and reduce their carbon footprint.",
            link: "services/service-3",
            imgUrl: "https://res.cloudinary.com/dahiaq28x/image/upload/v1716989528/322_3_rkxygu.webp",
          },
        ].map((card, index) => (
          <article
            key={index}
            className={`card card--${index + 1} ${activeCard === index ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <Link href={card.link}>
              <div className="card__info">
                <h3 className="card__title">
                  <div className="card__quote">
                    <TitleHead width={"30px"} />
                  </div>
                  <div>{card.title}</div>
                </h3>
                <div className="card__description">
                  <span>{card.description}</span>
                </div>
                <div className="card__description__hover">
                  <div>{card.fullDescription}</div>
                  <div className="mil-link mil-accent mil-arrow-place mil-up pt-3">
                    <div
                      style={
                        activeLocale === "ar"
                          ? { transform: "rotate(180deg)", display: "flex" }
                          : { transform: "rotate(0deg)", display: "flex" }
                      }
                    >
                      <ArrowIcon margin={"0"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card__img" style={{ backgroundImage: `url(${card.imgUrl})` }}></div>
              <div className="card__img--hover" style={{ backgroundImage: `url(${card.imgUrl})` }}></div>
            </Link>
          </article>
        ))}
      
      </section>
      <div className="d-flex justify-content-end m-auto mil-p-30-30" style={{maxWidth:'1156px'}}>
        <div className="mil-text-accent-dark mil-hover-primary mil-center">
                <Link
                  href={activeLocale ==='ar' ? "/ar/sectors/sector-1" : "/sectors/sector-1"}
                    className="mil-button mil-arrow-place "
                  >
                    <span>
                    {activeLocale === 'ar' ? "المزيد" : "Explore More"}</span>
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
  );
};

export default CardGrid;
