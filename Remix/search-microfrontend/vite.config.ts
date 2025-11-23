import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    // Only apply federation plugin for client build to avoid SSR issues
    !isSsrBuild && federation({
      name: "searchApp",
      filename: "remoteEntry.js",
      exposes: {
        "./SearchBar": "./app/components/SearchBar.tsx",
      },
      // shared: ["react", "react-dom"], // Commented out to fix dev mode shareScope error
    }),
  ],
  server: {
    port: 3001,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
}));
