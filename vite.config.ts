import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "mylib",
      formats: ["es", "cjs", "umd", "iife"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
