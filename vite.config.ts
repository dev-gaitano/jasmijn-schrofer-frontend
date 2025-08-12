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
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          firebase: ['firebase/app', 'firebase/firestore', 'firebase/analytics'],
          motion: ['framer-motion', '@react-spring/web'],
          routing: ['react-router-dom'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
    sourcemap: mode !== 'production',
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
