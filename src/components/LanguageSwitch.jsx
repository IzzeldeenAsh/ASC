import { useRouter } from "next/router";
import { useEffect } from "react";
import TranslateIcon from "@layouts/svg-icons/Translate"
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
              <span style={{ color: "#FFF",backgroundColor:"#0a1b30", fontSize:"14px",padding:"2px 4px" , borderRadius:"2px" }}> {locale === "ar" ? "Ar" : "En"} </span>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default LanguageSwitch;
