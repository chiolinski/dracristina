import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // 👇 base = nombre EXACTO del repo
  base: "/dracristina/",
  plugins: [react()],
});
