import React, { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import TeamSection from "@components/sections/Team";
import { NextSeo } from 'next-seo';
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config';
const Home1 = (props) => {
  
  return (
    <Layouts >
      <NextSeo
      title="A&B Alokab Consulting"
      description='A&B Alokab Consulting provides expert guidance, Innovative Methodologies and a Leading consulting that help businesses and organizations. Alokab provides its services systematically consisting of seven stages, which are essential for developing businesses and companies in general'
      canonical= 'https://alokab.co'
      openGraph={{
        url: 'https://alokab.co',
        title: 'A&B Alokab Consulting',
        description: 'A&B Alokab Consulting provides expert guidance, Innovative Methodologies and a Leading consulting.',
        images: [
          {
            url: 'https://media.licdn.com/dms/image/D4E0BAQHjxNWPbAhU5g/company-logo_200_200/0/1707818325589/alokab_consulting_logo?e=2147483647&v=beta&t=gi0NAMaKU42mNH9nat17bTM_rjpL44lJfDwonxOVGvM',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
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
    />
      <HeroOneSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <TestimonialSlider />
      <PartnersSlider />
      {/* <LatestPostsSection posts={props.posts} /> */}
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        [ 'common'],
        nextI18NextConfig
      
      )),
      // Will be passed to the page component as props
    },
  }
}
