import React from 'react'
import data from '@/src/data/dummy/services'
import { useLocale } from "@/utils/getLocale";
import Link from "next/link";
const MenuSectorsList = ({onLinkClick}) => {
    const {activeLocale , t} = useLocale();
    const servicesNames = data.services.map((service)=>service.title);

  return (
    <>
    <h6 className="mil-muted mil-mb-30">Services</h6>
    <ul className="mil-menu-list">
     {servicesNames.map((service,index)=>(
         <li key={index}>
         <Link
           href="/projects/project-1"
           className="mil-light-soft"
           onClick={onLinkClick}
         >
           {`sector-${index}`}
         </Link>
       </li>
     ))}
    </ul>
    </>
  )
}

export default MenuSectorsList