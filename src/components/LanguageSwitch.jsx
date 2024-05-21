import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const LanguageSwitch = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  useEffect(() => {
    document.body.dir = activeLocale === "ar" ? "rtl" : "ltr";
  }, [activeLocale]);

  return (
    <>
      {otherLocales.map((locale, localeIndex) => {
        const { pathname, query } = router;
        return (
          <Link className="mil-btn-switch" onClick={()=>console.log("logo clicked")} key={localeIndex} href={{ pathname, query }} locale={locale}>
           <span style={{color:"#a0a0a0"}}> {locale === "ar" ? "عربي" : "Eng"}</span>
          </Link>
        );
      })}
    </>
  );
};

export default LanguageSwitch;
