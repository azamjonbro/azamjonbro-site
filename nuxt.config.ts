const config = require("./developer.json");
const siteTitle = `${config.name} | ${config.role}`;
export default defineNuxtConfig({
  ssr: false, 
  target: "static",
  compatibilityDate: "2026-06-14",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: siteTitle,
      meta: [
        { name: 'description', content: 'Experienced frontend developer specializing in Vue.js, Electron, and modern web technologies.' },
        { name: 'keywords', content: 'Frontend Developer, Vue.js, Nuxt.js, Electron.js, JavaScript, Portfolio, azamjonbro, Azamjon Abdullayev, Azamjondev, Bro, Dasturlash_lampasi, Engineer, Azamjonaka, Abdullayev Azamjon' },
        { name: 'author', content: 'Azamjon Abdullayev' },

        // Open Graph
        { property: 'og:title', content: 'Azamjon Abdullayev – Frontend Engineer' },
        { property: 'og:description', content: 'Explore Azamjon’s personal projects, technical skills, and contact details.' },
        { property: 'og:image', content: 'https://senioraka.netlify.app/preview.png' }, 
        { property: 'og:url', content: 'https://senioraka.netlify.app' },
        { property: 'og:type', content: 'website' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Azamjon Abdullayev – Frontend Developer' },
        { name: 'twitter:description', content: 'Personal portfolio and contact platform of Azamjon.' },
        { name: 'twitter:image', content: 'https://senioraka.netlify.app/preview.png' }
      ],
      link: [
        { rel: "manifest", href: "pwa/manifest.json" },
        { rel: "apple-touch-icon", href: "pwa/icons/apple-touch-icon.png" },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],

  components: {
    dirs: ["~/components"],
  },

  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: true,
    injectPosition: 0,
    viewer: false,
  },
  runtimeConfig: {
    apiSecret: "123",

    public: {
      apiBase: "/api",
    },
  },
});
