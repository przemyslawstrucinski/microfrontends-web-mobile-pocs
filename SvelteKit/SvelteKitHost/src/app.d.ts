// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// Type definition for Module Federation remote
	declare module 'searchApp/SearchWidget' {
		const component: any;
		export default component;
	}
}

export {};

