import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    allowedHosts: [
      "b226-2607-fea8-a5dc-f900-30bd-59f-5cd3-88ec.ngrok-free.app",
    ],
  },
});
