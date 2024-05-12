import React from 'react'
import data from '@/src/data/dummy/services'
import { useLocale } from "@/utils/getLocale";
import Link from "next/link";
const MenuServicesList = ({onLinkClick}) => {
    const {activeLocale , t} = useLocale();
    const servicesNames = [...data.services].sort((a,b)=>{
      const titleA = a.title.english.toLowerCase();
      const titleB = b.title.english.toLowerCase();
      if(titleA>titleB) return 1;
      if(titleA<titleB) return -1;
      return 0;
    })
  return (
    <>
    <h6 className="mil-muted mil-mb-30">Services</h6>
    <ul className="mil-menu-list">
     {servicesNames.map((service,index)=>(
         <li key={index}>
         <Link
         href={`/services/${service.id}`} 
           className="mil-light-soft"
           onClick={onLinkClick}
         >
           {activeLocale==='ar' ? service.title.arabic : service.title.english }
         </Link>
       </li>
     ))}
    </ul>
    </>
  )
}

export default MenuServicesList