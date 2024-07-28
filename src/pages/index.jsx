import React, { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import HeroOneSection from "@components/sections/HeroOne"
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import TeamSection from "@components/sections/Team";
import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
const TestimonialSlider = dynamic(() => import("@components/sliders/Testimonial"), { ssr: false });
const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), { ssr: false });
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config';
import CardGrid from "../components/Hover-cards/CardGrid";
import BreakingBanner from "../components/BreakingBar";
import { useLocale } from "@/utils/getLocale";
import FeaturedServices from "../components/Gride-Services/FeaturedServices";


const Home1 = (props) => {
  const router = useRouter();
  const { section } = router.query;
  const {activeLocale} = useLocale()
  useEffect(() => {
    if (section) {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

  return (
    <Layouts>
      <NextSeo
        title="A&B Alokab Consulting"
        description="A&B Alokab Consulting provides expert guidance, innovative methodologies, and leading consulting services that help businesses and organizations thrive. Alokab offers its services systematically in seven stages, essential for developing businesses and companies."
        canonical="https://asc-seven-liard.vercel.app"
        openGraph={{
          url: 'https://asc-seven-liard.vercel.app',
          title: 'A&B Alokab Consulting',
          description: 'A&B Alokab Consulting provides expert guidance, innovative methodologies, and leading consulting services.',
          images: [
            {
              url: 'https://media.licdn.com/dms/image/D4E0BAQHjxNWPbAhU5g/company-logo_200_200/0/1707818325589/alokab_consulting_logo?e=2147483647&v=beta&t=gi0NAMaKU42mNH9nat17bTM_rjpL44lJfDwonxOVGvM',
              width: 800,
              height: 600,
              alt: 'A&B Alokab Consulting Logo',
            },
          ],
          siteName: 'A&B Alokab Consulting',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: 'Consulting, Business, Innovation, Methodologies, Development'
        }]}
      />
      <HeroOneSection />
      {/* <CardGrid/> */}
      <ServicesSection />
      <BreakingBanner
        text={ activeLocale === "ar"
          ? "استراتيجيات فعّالة لقطاع الصناعة"
          : "Innovating industrial strategies for a lasting impact"}
        buttonText=""
      />
      <CardGrid/>
      {/* <TeamSection id="leaders" />
      <AboutSection /> */}
       <BreakingBanner
        text={ activeLocale === "ar"
          ?"تمكين الأعمال لتحقيق النجاح والكفاءة المستدامة"
          : "Empowering businesses for sustainable success and efficiency."}
        buttonText=""
      />
      <FeaturedServices  language={activeLocale ==='ar' ? "arabic" : "english"} />
      <PartnersSlider />
    </Layouts>
  );
};

export default Home1;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ['common'],
        nextI18NextConfig
      )),
      // Will be passed to the page component as props
    },
  };
}
