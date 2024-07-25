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
              "A&B's compliance strategies help industrial organizations assess operations, identify regulatory risks, and address gaps with tailored action plans.",
            
            link: "subservice/industrial-regulatory-compliance-and-licensing",
            imgUrl: "https://res.cloudinary.com/dahiaq28x/image/upload/v1721837829/61331_1_px0rjk.webp",
          },
          {
            title:  "Funding",
            description:
                           "From bank loans to government grants, or partnering with companies through joint...",
            fullDescription:
             " A&B industrial project funding solutions involve several strategies, depending on the projects' specific needs and manufacturers’ unique situations.",
            link: "subservice/industrial-funding",
            imgUrl: "https://res.cloudinary.com/dahiaq28x/image/upload/v1721836849/2295_i0etlb.webp",
          },
          {
            title: "Industrial/ Strategic Partnerships",
            description: `Helping industrial ventures achieve more
            Getting into Strategic partnerships in the industrial sector is essential for leveraging cutting-edge technologies, optimizing supply chains, and expanding market reach.`,
            fullDescription:
              "At A&B, we help clients navigate the complexities of forming and managing strategic partnerships, where benefits are maximized and risks are minimized.",
            link: "subservice/industrial-strategic-partnerships",
            imgUrl: "https://res.cloudinary.com/dahiaq28x/image/upload/v1721893788/strategic_partnership_opmid0.webp",
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
