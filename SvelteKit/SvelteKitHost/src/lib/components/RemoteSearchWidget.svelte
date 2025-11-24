<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let SearchWidget: any = null;
	let loading = true;
	let error = false;

	onMount(async () => {
		if (browser) {
			try {
				// @ts-ignore - Module Federation remote
				const module = await import('searchApp/SearchWidget');
				SearchWidget = module.default;
				loading = false;
			} catch (err) {
				console.error('Failed to load SearchWidget:', err);
				error = true;
				loading = false;
			}
		}
	});
</script>

{#if loading}
	<div class="bg-white rounded-lg shadow-lg p-6">
		<div class="animate-pulse flex space-x-4">
			<div class="flex-1 space-y-4 py-1">
				<div class="h-10 bg-gray-200 rounded"></div>
				<div class="h-10 bg-gray-200 rounded"></div>
				<div class="h-10 bg-gray-200 rounded"></div>
			</div>
		</div>
		<div class="h-10 bg-blue-200 rounded mt-4"></div>
	</div>
{:else if error}
	<div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
		<p class="text-red-800">Failed to load search component. Please ensure the Search MFE is running on port 5001.</p>
	</div>
{:else if SearchWidget}
	<svelte:component this={SearchWidget} />
{/if}
