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
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          animations: ['framer-motion', '@react-spring/web'],
          firebase: ['firebase/firestore', 'firebase/app'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
