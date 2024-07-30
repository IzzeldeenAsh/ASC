import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './FeaturedServices.module.css';
import Data from "@data/dummy/subservices.json";
import Truncate from '../Truncate';
import { Text } from '@mantine/core';
import { useLocale } from '@/utils/getLocale';
import ArrowIcon from "@layouts/svg-icons/Arrow";

const FeaturedServices = ({ language = 'english' }) => {
  const firstThreeServices = Data.subservices.slice(11, 14);
  const parallaxRefs = useRef([]);
  const {activeLocale} = useLocale()
  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const parentRect = el.parentElement.getBoundingClientRect();
          const isVisible = parentRect.top < window.innerHeight && parentRect.bottom > 0;
          if (isVisible) {
            const scrollPosition = window.pageYOffset;
            const parentTop = parentRect.top + scrollPosition;
            const relativeScroll = (scrollPosition - parentTop) * 0.25;
            el.style.transform = `translateY(${relativeScroll}px)`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      {firstThreeServices.map((service, index) => (
        <div key={index} className={styles.serviceItem}>
          <div className={styles.backgroundContainer} style={{ order: index % 2 === 0 ? 1 : 2 }}>
            <div
              ref={(el) => (parallaxRefs.current[index] = el)}
              className={styles.backgroundImage}
              style={{ backgroundImage: `url(${service.image})` }}
            />
          </div>
          <div style={{ order: index % 2 === 0 ? 2 : 1 }} className={styles.content}>
          <div className='service-name'>
            {service.service.id &&
             <Link  href={activeLocale ==='ar' ? `/ar/services/${service.service.id}` : `/services/${service.service.id}`}>
             <Text
              m={0}
          size="md"
          variant="gradient"
          gradient={{ from: '#d2b006', to: '#d2b006', deg: 90 }}
        >
            { service.service.name[language]}
        </Text></Link>}
         </div>
            <h2>{service.title[language]}</h2>
            <p><Truncate maxLength={150} text={service.short[language]}/></p>
            <div  className="mil-text-accent-dark  mil-hover-primary  " >
              <Link  href={activeLocale ==='ar' ? `/ar/subservice/${service.id}` : `/subservice/${service.id}`}>
            <div className="mil-link mil-accent mil-arrow-place mil-up ">
              <div style={activeLocale ==='ar' ? {transform:"rotate(180deg)"} : {transform:"rotate(0deg)"}}>
  <ArrowIcon margin={"0"} />

              </div>
                  </div>
              </Link>
       
           
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedServices;