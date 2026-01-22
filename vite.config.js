import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  rules: {
    semi: ["error", "always"],
    indent: ["error", 2],
    quotes: ["error", "double"],
    "no-var": "error",
    "no-unused-vars": ["warn"],
    eqeqeq: "warn",
    curly: ["error", "all"],
  },
});
