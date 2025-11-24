<script lang="ts">
	import RemoteSearchWidget from '$lib/components/RemoteSearchWidget.svelte';
</script>

<svelte:head>
	<title>MojLekarz - Find Your Doctor</title>
	<meta name="description" content="Search and find the best doctors near you" />
</svelte:head>

<div class="min-h-screen">
	<!-- Hero Section -->
	<div class="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1 class="text-4xl md:text-5xl font-bold mb-6">
					Find and Book the Best Doctors
				</h1>
				<p class="text-xl mb-8">
					Search from thousands of verified healthcare professionals
				</p>
				
				<!-- Search Bar Component - Loaded via Module Federation -->
				<div class="max-w-3xl mx-auto text-left text-gray-900">
					<RemoteSearchWidget />
				</div>
			</div>
		</div>
	</div>

	<!-- Features Section -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="text-center">
				<div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
					<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold mb-2">Easy Search</h3>
				<p class="text-gray-600">Find doctors by specialty, location, or name</p>
			</div>

			<div class="text-center">
				<div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
					<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold mb-2">Verified Doctors</h3>
				<p class="text-gray-600">All doctors are verified healthcare professionals</p>
			</div>

			<div class="text-center">
				<div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
					<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold mb-2">Online Booking</h3>
				<p class="text-gray-600">Book appointments instantly online</p>
			</div>
		</div>
	</div>

	<!-- Popular Specialties -->
	<div class="bg-gray-100 py-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-3xl font-bold text-center mb-12">Popular Specialties</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				{#each ['Cardiologist', 'Dermatologist', 'Pediatrician', 'Dentist', 'Orthopedist', 'Psychiatrist', 'Gynecologist', 'Neurologist'] as specialty}
					<a
						href="http://localhost:5001/search?specialty={specialty.toLowerCase()}"
						class="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
					>
						<p class="font-medium text-gray-800">{specialty}</p>
					</a>
				{/each}
			</div>
		</div>
	</div>

	<!-- Microfrontend Info Section -->
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
		<div class="bg-blue-50 rounded-lg p-8">
			<h2 class="text-2xl font-bold text-gray-900 mb-4">SvelteKit Microfrontends</h2>
			<p class="text-gray-700 mb-4">
				This application demonstrates a microfrontend architecture using SvelteKit and Module Federation.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
				<div class="bg-white rounded p-4">
					<h3 class="font-semibold text-blue-600 mb-2">Host App (Port 5000)</h3>
					<p class="text-sm text-gray-600">Main shell application that consumes remote components</p>
				</div>
				<div class="bg-white rounded p-4">
					<h3 class="font-semibold text-blue-600 mb-2">Search MFE (Port 5001)</h3>
					<p class="text-sm text-gray-600">Exposes SearchWidget via Module Federation</p>
				</div>
				<div class="bg-white rounded p-4">
					<h3 class="font-semibold text-blue-600 mb-2">Doctor MFE (Port 5002)</h3>
					<p class="text-sm text-gray-600">SSR-enabled doctor profile pages</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Call to Action -->
	<div class="bg-blue-600 text-white py-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-3xl font-bold mb-4">Ready to Find Your Doctor?</h2>
			<p class="text-xl mb-8">Start your search now and book an appointment today</p>
			<a
				href="http://localhost:5001/search"
				class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
			>
				Search All Doctors
			</a>
		</div>
	</div>
</div>

