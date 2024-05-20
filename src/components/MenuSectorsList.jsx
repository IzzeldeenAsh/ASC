import React from 'react'
import data from '@/src/data/dummy/sectors'
import { useLocale } from "@/utils/getLocale";
import Link from "next/link";
const MenuSectorsList = ({onLinkClick}) => {
    const {activeLocale , t} = useLocale();
    const servicesNames = [...data.sectors].sort((a,b)=>{
      const titleA = a.title.english.toLowerCase();
      const titleB = b.title.english.toLowerCase();
      if(titleA>titleB) return 1;
      if(titleA<titleB) return -1;
      return 0;
    })
  return (
    <>
    <h6 className="mil-muted mil-mb-30">Sectors</h6>
    <ul className="mil-menu-list">
     {servicesNames.map((service,index)=>(
         <li key={index}>
         <Link
         href={`/sectors/${service.id}`} 
           className="mil-light-soft"
           style={{maxWidth:"200px"}}
           onClick={onLinkClick}
         
         >
           {activeLocale==='ar' ? service.title.arabic : service.title.english }
         </Link>
       </li>
     ))}
      <li>
         <Link
         href={`/sectors`} 
           className="mil-light-soft text-primary"
         >
           {activeLocale==='ar' ? "قائمة القطاعات " : "Sectors List" }
         </Link>
       </li>
    </ul>
    </>
  )
}

export default MenuSectorsList