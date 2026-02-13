import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://matthewregele.com",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/teaching/social-ent"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
