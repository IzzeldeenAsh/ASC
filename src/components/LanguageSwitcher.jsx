import React from 'react'
import { useTranslation, i18n } from 'next-i18next';
const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    const handleLanguageChange = (newLocale) => {
        i18n.changeLanguage(newLocale);
      };
      return (
        <div>
          <button onClick={() => handleLanguageChange('ar')}>Arabic</button>
          <button onClick={() => handleLanguageChange('en')}>English</button>
        </div>
      );
}

export default LanguageSwitcher