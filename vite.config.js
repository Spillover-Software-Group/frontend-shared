import path from "node:path";
import { URL, fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

function fullPath(relPath) {
  return fileURLToPath(new URL(relPath, import.meta.url));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // So modules can be imported relative to src instead of ../../../...
      "@": fullPath("./src"),

      // Vite won't pick up files outside src by default.
      "@tailwindConfig": fullPath("./tailwind.config.js"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.js",
    // Tests live under test/ mirroring src/, never beside the components, so the
    // library build never has to exclude them. Stories are documentation, not tests.
    include: ["test/**/*.test.{js,jsx}"],
    // Agent worktrees hold in-progress copies of this repo; without this, vitest
    // picks up their test files and another branch's work fails this branch's run.
    exclude: ["**/node_modules/**", "**/dist/**", "**/.claude/**"],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      formats: ["es"],
      // Force extension to .es
      fileName: () => "frontend-shared.es.js",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
