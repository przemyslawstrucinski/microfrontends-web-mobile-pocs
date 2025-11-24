<svelte:head>
	<title>Doctor Profiles - MojLekarz</title>
	<meta name="description" content="View detailed doctor profiles" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h1 class="text-3xl font-bold text-gray-900 mb-8">Doctor Microfrontend</h1>
	<p class="text-gray-600 mb-4">
		This is the standalone Doctor microfrontend. It provides SSR-enabled doctor profile pages.
	</p>
	<p class="text-gray-600">
		Visit a doctor profile by navigating to <code class="bg-gray-200 px-2 py-1 rounded">/doctor/[id]</code>
	</p>
	<div class="mt-8">
		<h2 class="text-xl font-semibold mb-4">Example Doctor Profiles:</h2>
		<ul class="space-y-2">
			{#each Array(8) as _, i}
				<li>
					<a
						href="/doctor/{i + 1}"
						class="text-blue-600 hover:text-blue-800 hover:underline"
					>
						Doctor Profile {i + 1}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

