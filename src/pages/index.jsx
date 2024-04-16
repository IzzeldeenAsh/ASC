import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import TeamSection from "@components/sections/Team";
import LatestPostsSection from "@components/sections/LatestPosts";
import { useRouter } from "next/router";
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config'
const Home1 = (props) => {
  const {locale} = useRouter();
  return (
    <Layouts>
      <HeroOneSection />
      <AboutSection />
      <ServicesSection />
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
