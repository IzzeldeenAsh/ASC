import React from 'react';
import Link from 'next/link';
import { IoMdArrowDropright } from 'react-icons/io';
import { useLocale } from '@/utils/getLocale';

const MenuList = ({items , basePath , onLinkClick ,listLabel})=>{
    const { activeLocale } = useLocale();
    const sortedItems = [...items].sort((a,b)=>{
        const titleA = a.title.english.toLowerCase();
        const titleB = b.title.english.toLowerCase();
        if(titleA  > titleB) return 1;
        if (titleA < titleB) return -1;
        return 0 ;
    })
    return (
        <>
             <ul className="mil-menu-list mil-mb-20 mil-text-lg">
        {sortedItems.map((item, index) => (
          <li key={index}>
            <Link
              href={basePath ==='about' ? `/${basePath}/#${item.id}`: `/${basePath}/${item.id}`}
              className="mil-light-soft"
              onClick={onLinkClick}
            >
              <div className="d-flex align-items-center">
                <IoMdArrowDropright />
                {activeLocale === 'ar' ? item.title.arabic : item.title.english}
              </div>
            </Link>
          </li>
          
        ))}
      </ul>
      <ul className="mil-menu-list mil-text-lg">
        <li>
          <Link
            href={`/${basePath}`}
            className="mil-light-soft text-primary anchor-link"
            style={{ padding: '0 20px' }}
            onClick={onLinkClick}
          >
            <div className="d-flex align-items-center">
              {listLabel}
            </div>
          </Link>
        </li>
      </ul>
        </>);

}

export default MenuList;