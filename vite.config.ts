import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/dracristina/",   // 👈 nombre EXACTO del repo
  plugins: [react()],
});
