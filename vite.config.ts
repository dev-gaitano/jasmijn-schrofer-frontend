import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";

export default defineConfig(({ mode }) => ({
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
    mode === "production" ? visualizer({ open: true }) : null,
  ].filter(Boolean),
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
