import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Only include Replit plugins if you're running inside Replit
const isReplit = process.env.REPL_ID !== undefined;
const plugins = [react()];

if (isReplit) {
  const runtimeErrorOverlay = require("@replit/vite-plugin-runtime-error-modal");
  plugins.push(runtimeErrorOverlay());

  // Dynamic import for cartographer
  (async () => {
    const m = await import("@replit/vite-plugin-cartographer");
    plugins.push(m.cartographer());
  })();
}

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  // 👇 IMPORTANT for GitHub Pages (replace repo name if different)
  base: "/climaneer-apk/",

  root: path.resolve(__dirname, "client"),
  build: {
    // Output in "dist" (simpler for gh-pages)
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
