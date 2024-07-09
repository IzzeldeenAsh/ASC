import React from 'react';

const CardGrid = () => {

  return (
    <>
      <section className="cards mil-p-60-0">
        <article className="card card--1">
          <div className="card__info">
            <h3 className="card__title">Smart Cities and Mobility</h3>
            <div className="card__description">
            We leverage key technologies and smart solutions to navigate the complexity of...
            </div>
          </div>
          <div className="card__img"></div>
          <a href="#" className="card_link">
            <div className="card__img--hover"></div>
          </a>

        </article>

        <article className="card card--2">
          <div className="card__info">
            <h3 className="card__title">Discover the sea</h3>
            <div className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="card__img"></div>
          <a href="#" className="card_link">
            <div className="card__img--hover"></div>
          </a>

        </article>

        <article className="card card--3">
          <div className="card__info">
            <h3 className="card__title">Discover the sea</h3>
            <div className="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="card__description">
              ReadMore
            </div>
          </div>
          <div className="card__img"></div>
          <a href="#" className="card_link">
            <div className="card__img--hover"></div>
          </a>

        </article>
      </section>

    
    </>
  );
};

export default CardGrid;
