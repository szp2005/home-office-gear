import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://gear.toolrouteai.com",
  output: "static",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-cn"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
