<script lang="ts">
	import SearchWidget from '$lib/components/SearchWidget.svelte';
</script>

<svelte:head>
	<title>Search Doctors - MojLekarz</title>
	<meta name="description" content="Search for doctors by specialty and location" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h1 class="text-3xl font-bold text-gray-900 mb-8">Search Microfrontend</h1>
	<p class="text-gray-600 mb-8">
		This is the standalone Search microfrontend. The SearchWidget component is exposed via Module Federation
		and can be embedded in other applications.
	</p>
	<SearchWidget />
</div>

