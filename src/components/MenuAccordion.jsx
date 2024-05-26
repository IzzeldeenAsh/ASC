import React from 'react';
import { Accordion } from '@mantine/core';
import Link from 'next/link';
import MenuServicesList from "@components/MenuServicesList";
import MenuSectorsList from './MenuSectorsList';
// Sample groceries data
const groceries = [
  { value: 'Home', link: '', description: '' },
  { value: 'Services',link: '', description: 'services' },
  { value: 'Sectors',link: '',  description: 'services' },
  { value: 'About', link: 'about', description: '' },
  { value: 'Contact',link: 'contact',  description: '' },
];

function MenuAccordion({onLinkClick}) {
    const items = groceries.map((item) => (
      <Accordion.Item key={item.value} value={item.value} className='MenuChevron'>
        {item.description ? (
          <>
            <Accordion.Control>{item.value}</Accordion.Control>
            <Accordion.Panel>
              {item.value === "Services" && <MenuServicesList onLinkClick={onLinkClick}/>}
              {item.value === "Sectors" && <MenuSectorsList onLinkClick={onLinkClick}/>}
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
