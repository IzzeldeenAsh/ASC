// components/LogoSlider.js
import React, { useEffect } from 'react';
import styles from './LogoSlider.module.css';
import partners from '@data/sliders/partners';

const LogoSlider = () => {
  useEffect(() => {
    const slider = document.querySelector(`.${styles.slider}`);
    const firstHalf = slider.innerHTML;
    slider.innerHTML += firstHalf; // Duplicate the logos for seamless loop
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {partners.items.map((partner, index) => (
          <div key={index} className={styles.logo}>
            <span>
              <img src={partner.image} alt={partner.alt} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
