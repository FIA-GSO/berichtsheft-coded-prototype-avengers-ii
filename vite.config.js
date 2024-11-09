import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    port: 3001,
  },
  base: "/berichtsheft-coded-prototype-avengers-ii/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        azubi: resolve(__dirname, "azubi.html"),
        ihk: resolve(__dirname, "ihk.html"),
      },
    },
    outDir: "dist",
    assetsDir: "assets",
  },
});
