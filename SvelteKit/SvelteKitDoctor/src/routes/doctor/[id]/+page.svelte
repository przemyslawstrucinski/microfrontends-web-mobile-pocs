<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { doctor } = data;
</script>

<svelte:head>
	<title>{doctor.name} - {doctor.specialty} - MojLekarz</title>
	<meta
		name="description"
		content="{doctor.name} is a {doctor.specialty} in {doctor.location} with {doctor.experience} years of experience."
	/>
</svelte:head>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
	<!-- Back Button -->
	<div class="mb-6">
		<a
			href="http://localhost:5001/search"
			class="text-blue-600 hover:text-blue-800 flex items-center"
		>
			<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg>
			Back to Search
		</a>
	</div>

	<div class="bg-white rounded-lg shadow-lg overflow-hidden">
		<!-- Header Section -->
		<div class="bg-gradient-to-r from-blue-500 to-blue-700 p-8 text-white">
			<div class="flex items-start">
				<div class="flex-shrink-0">
					<div class="w-24 h-24 bg-white rounded-full flex items-center justify-center">
						<span class="text-3xl font-bold text-blue-600">
							{doctor.name.split(' ')[1]?.charAt(0) || 'D'}
						</span>
					</div>
				</div>
				<div class="ml-6">
					<h1 class="text-3xl font-bold">{doctor.name}</h1>
					<p class="text-xl mt-2">{doctor.specialty}</p>
					<div class="flex items-center mt-3">
						<svg class="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
						<span class="text-lg font-semibold">{doctor.rating}</span>
						<span class="ml-2 opacity-90">({doctor.reviewCount} reviews)</span>
					</div>
				</div>
			</div>
		</div>

		<div class="p-8">
			<!-- About Section -->
			<section class="mb-8">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">About</h2>
				<p class="text-gray-700 leading-relaxed">{doctor.bio}</p>
			</section>

			<!-- Quick Info Grid -->
			<section class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="bg-blue-50 p-4 rounded-lg">
					<div class="flex items-center text-blue-600 mb-2">
						<svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
						<h3 class="font-semibold">Location</h3>
					</div>
					<p class="text-gray-700">{doctor.location}</p>
				</div>

				<div class="bg-blue-50 p-4 rounded-lg">
					<div class="flex items-center text-blue-600 mb-2">
						<svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<h3 class="font-semibold">Experience</h3>
					</div>
					<p class="text-gray-700">{doctor.experience} years</p>
				</div>

				<div class="bg-blue-50 p-4 rounded-lg">
					<div class="flex items-center text-blue-600 mb-2">
						<svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<h3 class="font-semibold">Availability</h3>
					</div>
					<p class="text-gray-700">{doctor.availability}</p>
				</div>
			</section>

			<!-- Education Section -->
			<section class="mb-8">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Education & Training</h2>
				<ul class="space-y-2">
					{#each doctor.education as edu}
						<li class="flex items-start">
							<svg
								class="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
								/>
							</svg>
							<span class="text-gray-700">{edu}</span>
						</li>
					{/each}
				</ul>
			</section>

			<!-- Languages Section -->
			<section class="mb-8">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Languages</h2>
				<div class="flex flex-wrap gap-2">
					{#each doctor.languages as language}
						<span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
							{language}
						</span>
					{/each}
				</div>
			</section>

			<!-- Contact Section -->
			<section class="mb-8">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
				<div class="space-y-3">
					<div class="flex items-center text-gray-700">
						<svg class="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						{doctor.phone}
					</div>
					<div class="flex items-center text-gray-700">
						<svg class="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						{doctor.email}
					</div>
				</div>
			</section>

			<!-- Booking Button -->
			<div class="pt-6 border-t border-gray-200">
				<button
					class="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
				>
					Book Appointment
				</button>
			</div>
		</div>
	</div>
</div>

