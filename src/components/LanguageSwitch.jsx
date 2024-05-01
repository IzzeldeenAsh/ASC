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

  const isArabic = activeLocale === 'ar';

  return (
    <span style={{
      display: 'flex',
      gap: '20px',
      position: 'absolute',
      zIndex: 10,
      top: '53px',
      color: '#cfcfcf',
      // Align based on 'isArabic'
      left: isArabic ? '12%' : undefined,
      right: isArabic ? undefined : '12%',
    }}>
      {otherLocales.map((locale, localeIndex) => {
        const { pathname, query } = router;
        return (
          <Link key={localeIndex} href={{ pathname, query }} locale={locale}>
            {locale === "ar" ? "عربي" : "English"}
          </Link>
        );
      })}
    </span>
  );
};

export default LanguageSwitch;
