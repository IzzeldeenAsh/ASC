'use client'
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const LanguageSwitch = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  useEffect(() => {
    document.body.dir = activeLocale === 'ar' ? 'rtl' : 'ltr';
    // If you're using i18n, uncomment the following line to set the document title
    // document.title = t('app_title');
  }, [activeLocale]);

  return (
    <span style={
     activeLocale === 'ar' ? 
     {
      display: 'flex',
      gap: '20px',
      position: 'absolute', 
      zIndex: 10, 
      top: '60px',
      left: '12%',
      color: '#cfcfcf'
       }
       :
       {
        display: 'flex',
        gap: '20px',
        position: 'absolute', 
        zIndex: 10, 
        top: '60px',
        right: '12%',
        color: '#cfcfcf'
         }
       
       }>
      {otherLocales.map((locale, localeIndex) => {
        const { pathname, query } = router;
        return (
          <Link key={localeIndex} href={{ pathname, query }} locale={locale}>
            {locale === 'ar' ? 'عربي' : 'English'}
          </Link>
        );
      })}
    </span>
  );
};

export default LanguageSwitch;
