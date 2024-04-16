/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ar'],
    },
    localePath: (locale, namespace) => {
      return `./public/locales/${namespace}/${locale}.json`;
    },
    ns: ['common'],
    serializeConfig:false,
  } 
