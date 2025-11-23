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
    !isSsrBuild && federation({
      name: "host-app",
      remotes: {
        // Point to the static file server for the remote entry
        searchApp: "http://localhost:3003/assets/remoteEntry.js",
        doctorApp: "http://localhost:3002/assets/remoteEntry.js",
      },
      // shared: ["react", "react-dom"], // Commented out to fix dev mode shareScope error
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
}));
