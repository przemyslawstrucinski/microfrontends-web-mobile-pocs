<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Doctor Not Found - MojLekarz</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 flex items-center justify-center">
	<div class="text-center">
		<h1 class="text-4xl font-bold text-gray-900 mb-4">Doctor Not Found</h1>
		<p class="text-gray-600 mb-6">
			{$page.error?.message || 'The doctor profile you\'re looking for doesn\'t exist.'}
		</p>
		<a
			href="http://localhost:5001/search"
			class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
		>
			Search for Doctors
		</a>
	</div>
</div>

