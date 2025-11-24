import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ command, mode }) => {
  const isSsrBuild =
    mode === "production" && process.env.VITE_BUILD_SSR === "true";

  return {
    plugins: [
      sveltekit(),
      !isSsrBuild &&
        federation({
          name: "searchApp",
          filename: "remoteEntry.js",
          exposes: {
            "./SearchWidget": "./src/lib/components/SearchWidget.svelte",
          },
          shared: {
            svelte: {
              singleton: true,
            },
          },
        }),
    ],
    server: {
      port: 5001,
    },
    preview: {
      port: 5001,
    },
    build: {
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
