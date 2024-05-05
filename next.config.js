
const { i18n } = require('./next-i18next.config'); // Import your i18n configuration

module.exports = {
  reactStrictMode: true,
  // Add the i18n configuration to Next.js
  i18n,
  images: {
    domains: ['res.cloudinary.com','asset.cloudinary.com'],
  },
};
