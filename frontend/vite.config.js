import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/todo-list/", // replace 'todo-list' with your repository name,
  server: {
    port: 5173,
    host: true, // Allow access from localhost
  },
});
