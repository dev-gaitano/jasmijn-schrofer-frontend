import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      plugins: [
        [
          "swc-plugin-component-annotate",
          {
            "component-attr": "data-component",
            "element-attr": "data-element",
            "source-file-attr": "data-source-file",
          },
        ],
      ],
    }),
  ],
  base: "./",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
