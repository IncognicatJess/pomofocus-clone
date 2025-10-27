import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/pomofocus-clone/", // <-- ganti sesuai nama repo GitHub
  plugins: [react()],
});
