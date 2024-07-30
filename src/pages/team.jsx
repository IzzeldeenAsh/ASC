import React from 'react';
import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import data from "@data/dummy/team.json";
import { useLocale } from "@/utils/getLocale";
import { NextSeo } from 'next-seo';
import IdCard from "@components/IdCard";
import { SimpleGrid, Box } from '@mantine/core';
import ABLogoDark from "@/src/layouts/svg-icons/AB-Logo-Dark";
import ABLogoLight from '../layouts/svg-icons/AB-Logo-Light';
import { HeaderMegaMenu } from '../components/HeeaderMegaMenu';
const Team = () => {
  const { activeLocale } = useLocale();
  const TeamData = data.TeamData;

  const pageTitle = activeLocale === 'ar' ? "فريقنا - A&B Consulting" : "Our Team - A&B Consulting";
  const description = activeLocale === 'ar' ? "تعرف على فريق صناع الفرق في A&B Consulting. مهنيونا الملتزمون هنا لمساعدتك في تحقيق أهداف عملك." : "Meet the team of difference makers at A&B Consulting. Our dedicated professionals are here to help you achieve your business goals.";
  const keywords = activeLocale === 'ar' ? "الفريق, المهنيين, استشارات الأعمال, A&B Consulting" : "team, professionals, business consulting, A&B Consulting";
  
  return (
    <Layouts>
      <NextSeo
        title={pageTitle}
        description={description}
        canonical="https://asc-seven-liard.vercel.app/team"
        openGraph={{
          url: "https://asc-seven-liard.vercel.app/team",
          title: pageTitle,
          description: description,
          images: [
            {
              url: "/path/to/team-image.jpg",
              width: 800,
              height: 600,
              alt: pageTitle,
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

<PageBanner 
  pageTitle={activeLocale === 'ar' ? "صنّاع الفرق" : "Difference <br>  <span class=\"mil-thin\">Makers</span>"} 
  breadTitle={activeLocale === 'ar' ? "الفريق" : "Team"} 
  anchorLabel={activeLocale === 'ar' ? "فريقنا" : "Our team"} 
  anchorLink={"#team"} 
/>
<div className="hero-nav">
        <HeaderMegaMenu />
      </div>
      <div className="logoStyle">
      <ABLogoLight />
      </div>
      {/* team */}
      <div className="nav-shadow"></div>
<section id="team">
  <div className="container mil-p-0-90">
    <SimpleGrid 
      cols={{ base: 1, sm: 2, lg: 3 }}
      spacing="40px"
    >
      {TeamData.map((item, key) => (
        <Box key={`team-item-${key}`}>
          <IdCard 
            name={activeLocale === 'ar' ? item.name.ar : item.name.en} 
            position={activeLocale === 'ar' ? item.role.ar : item.role.en} 
            img={item.image} 
          />
        </Box>
      ))}
    </SimpleGrid>
  </div>
</section>
      {/* team end */}

      <CallToActionSection />
    </Layouts>
  );
};

export default Team;
