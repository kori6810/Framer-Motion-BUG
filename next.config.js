// next.config.js
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  ...nextConfig,
  i18n, // Include the i18n configuration
};