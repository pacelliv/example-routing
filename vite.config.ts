import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const outDir = path.resolve(__dirname, "out");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        home: path.resolve(__dirname, "src/pages/home/index.html"),
        about: path.resolve(__dirname, "src/pages/about/index.html"),
        contact: path.resolve(__dirname, "src/pages/contact/index.html"),
      },
    },
  },
});
