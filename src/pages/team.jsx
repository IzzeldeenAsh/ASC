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
const Team = () => {
  const { activeLocale } = useLocale();
  const TeamData = data.TeamData;

  const pageTitle = "Our Team - A&B Consulting";
  const description = "Meet the team of difference makers at A&B Consulting. Our dedicated professionals are here to help you achieve your business goals.";
  const keywords = "team, professionals, business consulting, A&B Consulting";

  return (
    <Layouts>
      <NextSeo
        title={pageTitle}
        description={description}
        canonical="https://alokab.co/team"
        openGraph={{
          url: "https://alokab.co/team",
          title: pageTitle,
          description: description,
          images: [
            {
              url: "/path/to/team-image.jpg",
              width: 800,
              height: 600,
              alt: pageTitle,
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
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords,
          },
        ]}
      />

      <PageBanner pageTitle={"Difference <br>  <span class=\"mil-thin\">Makers</span>"} breadTitle={"Team"} anchorLabel={"Our team"} anchorLink={"#team"} />
      <div className="logoStyle">
        <ABLogoDark />
      </div>
      {/* team */}
      <section id="team">
        <div className="container mil-p-0-90">
          <SimpleGrid 
           cols={{ base: 1, sm: 2, lg: 3 }}
            spacing="40px"
           
          >
            {TeamData.map((item, key) => (
              <Box key={`team-item-${key}`}>
                <IdCard name={item.name} position={item.role} img={item.image} />
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
