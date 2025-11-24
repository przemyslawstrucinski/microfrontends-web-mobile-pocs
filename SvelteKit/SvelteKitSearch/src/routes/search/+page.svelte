<script lang="ts">
	import SearchWidget from '$lib/components/SearchWidget.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Search Doctors - MojLekarz</title>
	<meta name="description" content="Find the best doctors for your needs" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
	<h1 class="text-3xl font-bold text-gray-900 mb-8">Search Doctors</h1>

	<!-- Search Bar -->
	<div class="mb-8">
		<SearchWidget />
	</div>

	<!-- Search Results Summary -->
	<div class="mb-6">
		<p class="text-gray-600">
			Found <span class="font-semibold">{data.doctors.length}</span> doctor(s)
			{#if data.filters.query}
				<span>
					matching "<span class="font-semibold">{data.filters.query}</span>"
				</span>
			{/if}
			{#if data.filters.specialty !== 'all'}
				<span>
					in <span class="font-semibold">{data.filters.specialty}</span>
				</span>
			{/if}
			{#if data.filters.location !== 'all'}
				<span>
					near <span class="font-semibold">{data.filters.location}</span>
				</span>
			{/if}
		</p>
	</div>

	<!-- Results -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each data.doctors as doctor}
			<a
				href="http://localhost:5002/doctor/{doctor.id}"
				class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
			>
				<div class="flex items-start mb-4">
					<div class="flex-shrink-0">
						<div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
							<span class="text-2xl font-bold text-blue-600">
								{doctor.name.split(' ')[1]?.charAt(0) || 'D'}
							</span>
						</div>
					</div>
					<div class="ml-4 flex-1">
						<h3 class="text-lg font-semibold text-gray-900">{doctor.name}</h3>
						<p class="text-blue-600">{doctor.specialty}</p>
					</div>
				</div>

				<div class="space-y-2 text-sm text-gray-600">
					<div class="flex items-center">
						<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						{doctor.location}
					</div>

					<div class="flex items-center">
						<svg class="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						{doctor.rating} ({doctor.reviewCount} reviews)
					</div>

					<div class="flex items-center">
						<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						{doctor.experience} years experience
					</div>
				</div>

				<div class="mt-4 pt-4 border-t border-gray-200">
					<p class="text-sm text-gray-600 line-clamp-2">{doctor.bio}</p>
				</div>
			</a>
		{/each}
	</div>

	{#if data.doctors.length === 0}
		<div class="text-center py-12">
			<p class="text-gray-500 text-lg">No doctors found matching your criteria.</p>
			<p class="text-gray-400 mt-2">Try adjusting your search filters.</p>
		</div>
	{/if}
</div>

