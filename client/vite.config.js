import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const target = "http://127.0.0.1:8080";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
});
