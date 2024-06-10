import React from 'react';
import { Accordion } from '@mantine/core';
import Link from 'next/link';
import MenuList from "@/src/components/MenuList";
import dataSectors from '@/src/data/dummy/sectors'
import dataServices from '@/src/data/dummy/services';
import { useLocale } from '@/utils/getLocale';
import aboutData from "@data/sections/about.json"
// Sample groceries data
const groceries = [
  { value: 'Home', link: '', description: '' },
  { value: 'Services',link: '', description: 'services' },
  { value: 'Sectors',link: '',  description: 'services' },
  { value: 'About', link: '', description: 'about' },
  { value: 'Contact',link: 'contact',  description: '' },
];

function MenuAccordion({onLinkClick}) {
  const { activeLocale } = useLocale();
    const items = groceries.map((item) => (
      <Accordion.Item key={item.value} value={item.value} className='MenuChevron'>
        {item.description ? (
          <>
            <Accordion.Control>{item.value}</Accordion.Control>
            <Accordion.Panel>
              {item.value === "Services" &&  <MenuList
                                items={dataServices.services}
                                basePath="services"
                                onLinkClick={onLinkClick}
                                listLabel={activeLocale === 'ar' ? 'قائمة الخدمات' : 'Services List'}
                              />}
              {item.value === "Sectors" &&   <MenuList
                             items={dataSectors.sectors}
                             basePath="sectors"
                             onLinkClick={onLinkClick}
                             listLabel={activeLocale === 'ar' ? 'قائمة القطاعات' : 'Sectors List'}
                           />}
              {item.value === "About" &&   <MenuList
                              items={aboutData.sections}
                              basePath="about"
                              onLinkClick={onLinkClick}
                              listLabel={activeLocale === 'ar' ? ' من نحن' : 'About Us'}
                            />}
            </Accordion.Panel>
          </>
        ) : (
          <Accordion.Control as="div">
            <Link href={`/${item.link.toLowerCase()}`}>{item.value}</Link>
          </Accordion.Control>
        )}
      </Accordion.Item>
    ));
  
    return (
      <Accordion disableChevronRotation defaultValue="Apples">
        {items}
      </Accordion>
    );
  }
  

export default MenuAccordion;
