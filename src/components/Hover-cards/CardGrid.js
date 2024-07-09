import TitleHead from "@/src/layouts/svg-icons/TitleHead";
import { useLocale } from "@/utils/getLocale";
import React from "react";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Link from "next/link";
const CardGrid = () => {
  const { activeLocale, t } = useLocale();
  return (
    <>
      <div className=" mil-p-60-0 ">
        <section className="cards ">
          <article className="card card--1">
        <Link href={`services/service-1`}>
            <div className="card__info">
              <h3 className="card__title">
                <div className="card__quote">
                  <TitleHead width={"30px"} />
                </div>
                <div>Smart Cities and Mobility</div>
              </h3>
              <div className="card__description ">
                <span>
                  {" "}
                  We leverage key technologies and smart solutions to navigate
                  the complexity of...
                </span>
              </div>
              <div className="card__description__hover">
               <div> We leverage key technologies and smart solutions to navigate the
                complexity of smart city and mobility development. As ITS &
                MaaS, AI and IoT have a lot to offer.</div>
               
                <div
                  className="mil-link mil-accent mil-arrow-place mil-up pt-3"
                >
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
            <div className="card__img"></div>
              <div className="card__img--hover"></div>
          </Link>
          </article>
          <article className="card card--2">
          <Link href={`services/service-2`}>
            <div className="card__info">
              <h3 className="card__title">
                <div className="card__quote">
                  <TitleHead width={"30px"} />
                </div>
                <div>Digital Transformation</div>
              </h3>
              <div className="card__description">
                Adopting the right digital technologies and integrating them
                into the various...
              </div>
              <div className="card__description__hover">
               <div>
               Adopting the right digital technologies and integrating them
                into the various aspects of an organization's operations,
                culture, and customer experience has become essential for
                businesses to remain competitive.
               </div>
                <div
                  className="mil-link mil-accent mil-arrow-place mil-up pt-3"
                >
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
            <div className="card__img"></div>
              <div className="card__img--hover"></div>
          </Link>
          </article>
          <article className="card card--3">
          <Link href={`services/service-3`}>
            <div className="card__info">
              <h3 className="card__title">
                <div className="card__quote">
                  <TitleHead width={"30px"} />
                </div>
                <div>Renewable Energy</div>
              </h3>
              <div className="card__description">
                A&B team of experts is dedicated to helping businesses ...
              </div>
              <div className="card__description__hover">
               <div> A&B team of experts is dedicated to helping businesses and
                organizations lower their energy costs and reduce their carbon
                footprint.</div>
                <div
                  className="mil-link mil-accent mil-arrow-place mil-up pt-3"
                >
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
            </Link>
            <div className="card__img"></div>
              <div className="card__img--hover"></div>
          </article>
          <article className="card card--4 up-1550px">
          <Link href={`services/service-4`}>
            <div className="card__info">
              <h3 className="card__title">
                <div className="card__quote">
                  <TitleHead width={"30px"} />
                </div>
                <div>Sustainable Manufacturing</div>
              </h3>
              <div className="card__description">
        
                Sustainable Manufacturing offers clean manufacturing...
              </div>
              <div className="card__description__hover">
               
                <div>
                Sustainable Manufacturing offers clean manufacturing solutions for environmental excellence, aiding organizations in reducing their carbon footprint and energy costs while meeting sustainability goals.
               </div>
                <div
                  className="mil-link mil-accent mil-arrow-place mil-up pt-3"
                >
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
            <div className="card__img"></div>
              <div className="card__img--hover"></div>
          </Link>
          </article>
          <article className="card card--5 up-1550px">
          <Link href={`services/service-6`}>
            <div className="card__info">
              <h3 className="card__title">
                <div className="card__quote">
                  <TitleHead width={"30px"} />
                </div>
                <div>Operations</div>
              </h3>
              <div className="card__description">
              
                To successfully achieve strategic goals, organizations...
              </div>
              <div className="card__description__hover">
              <div>
              To successfully achieve strategic goals, organizations must have a clearly defined strategy and operations processes that are thoroughly tailored to lead to the desired objectives efficiently and sustainably.
               </div>
                <div
                  className="mil-link mil-accent mil-arrow-place mil-up pt-3"
                >
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
            <div className="card__img"></div>
              <div className="card__img--hover"></div>
            </Link>
          </article>
        </section>
        <section className="cards-2 mil-p-30-30 ">
          <article className="card card--4 down-1550px">
          <Link href={`services/service-4`}>
          <div className="card__info">
              <h3 className="card__title">
                <div className="card__quote">
                  <TitleHead width={"30px"} />
                </div>
                <div>Sustainable Manufacturing</div>
              </h3>
              <div className="card__description">
        
                Sustainable Manufacturing offers clean manufacturing...
              </div>
              <div className="card__description__hover">
               
                <div>
                Sustainable Manufacturing offers clean manufacturing solutions for environmental excellence, aiding organizations in reducing their carbon footprint and energy costs while meeting sustainability goals.
               </div>
                <div
                  className="mil-link mil-accent mil-arrow-place mil-up pt-3"
                >
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
            <div className="card__img"></div>
              <div className="card__img--hover"></div>
              </Link>
          </article>
          <article className="card card--5 down-1550px">
          <Link href={`services/service-6`}>
          <div className="card__info">
              <h3 className="card__title">
                <div className="card__quote">
                  <TitleHead width={"30px"} />
                </div>
                <div>Operations</div>
              </h3>
              <div className="card__description">
               
                To successfully achieve strategic goals, organizations...
              </div>
              <div className="card__description__hover">
              <div>
              To successfully achieve strategic goals, organizations must have a clearly defined strategy and operations processes that are thoroughly tailored to lead to the desired objectives efficiently and sustainably.
               </div>
                <div
                  className="mil-link mil-accent mil-arrow-place mil-up pt-3"
                >
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
            <div className="card__img"></div>
              <div className="card__img--hover"></div>
              </Link>
          </article>
        </section>
      </div>
    </>
  );
};

export default CardGrid;
