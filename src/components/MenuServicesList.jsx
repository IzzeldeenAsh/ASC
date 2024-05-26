import React from 'react'
import data from '@/src/data/dummy/services'
import { useLocale } from "@/utils/getLocale";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
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
    <ul className="mil-menu-list">
     {servicesNames.map((service,index)=>(
         <li key={index}>
         <Link
         href={`/services/${service.id}`} 
           className="mil-light-soft"
           onClick={onLinkClick}
         
         >
        <div className="d-flex align-items-center">
        <IoMdArrowDropright />
           {activeLocale==='ar' ? service.title.arabic : service.title.english }
        </div>
         </Link>
       </li>
     ))}
      <li>
         <Link
         href={`/services`} 
           className="mil-light-soft text-primary"
         >
           <div className="d-flex align-items-center">
           <IoMdArrowDropright />  {activeLocale==='ar' ? "قائمة الخدمات " : "Services List" }
        </div>
       
         </Link>
       </li>
    </ul>
    </>
  )
}

export default MenuServicesList