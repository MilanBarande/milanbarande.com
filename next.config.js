/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr', 'default'],
    defaultLocale: 'default'
  }
};

module.exports = nextConfig;
