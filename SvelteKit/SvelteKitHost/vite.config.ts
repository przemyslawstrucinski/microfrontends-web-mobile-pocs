import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ command, mode }) => {
	const isSsrBuild = mode === 'production' && process.env.VITE_BUILD_SSR === 'true';
	
	return {
		plugins: [
			sveltekit(),
			!isSsrBuild && federation({
				name: 'hostApp',
				remotes: {
					searchApp: 'http://localhost:5001/assets/remoteEntry.js'
				},
				shared: {
					svelte: {
						singleton: true
					}
				}
			})
		],
		server: {
			port: 5000
		},
		preview: {
			port: 5000
		},
		build: {
			target: 'esnext',
			minify: false,
			cssCodeSplit: false
		}
	};
});
