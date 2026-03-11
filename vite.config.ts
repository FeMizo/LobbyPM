import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { propertiesFileApiPlugin } from "./server/propertiesFileApiPlugin";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), propertiesFileApiPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== "true",
  },
});
