import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";
import path from "path";
// @ts-ignore
import eslint from "vite-plugin-eslint";

dotenv.config();

export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@Components": path.resolve(__dirname, "./src/Components"),
      "@Pages": path.resolve(__dirname, "./src/Pages"),
      "@Assets": path.resolve(__dirname, "./src/assets"),
      "@Services": path.resolve(__dirname, "./src/Services"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
