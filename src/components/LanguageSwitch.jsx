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
          <div key={localeIndex}> {/* Added a key to the fragment */}
            <Link className="mil-btn-switch" onClick={() => console.log("logo clicked")} href={{ pathname, query }} locale={locale}>
              <span style={{ color: "#a0a0a0" }}> {locale === "ar" ? "Ar" : "En"} </span>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default LanguageSwitch;
