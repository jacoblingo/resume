import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://jacoblingo.github.io",
  base: "/resume",
  output: "static",
});