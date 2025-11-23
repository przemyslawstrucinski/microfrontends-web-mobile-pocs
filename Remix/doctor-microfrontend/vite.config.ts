import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    federation({
      name: "doctorApp",
      filename: "remoteEntry.js",
      exposes: {
        "./DoctorProfile": "./app/components/DoctorProfile.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3002,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

