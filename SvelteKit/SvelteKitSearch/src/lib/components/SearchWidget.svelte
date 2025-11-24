<script lang="ts">
	let query = '';
	let specialty = 'all';
	let location = 'all';

	function handleSearch() {
		const params = new URLSearchParams();
		if (query) params.set('query', query);
		if (specialty !== 'all') params.set('specialty', specialty);
		if (location !== 'all') params.set('location', location);

		const searchUrl = `http://localhost:5001/search?${params.toString()}`;
		window.location.href = searchUrl;
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			handleSearch();
		}
	}
</script>

<div class="bg-white rounded-lg shadow-lg p-6">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
		<div>
			<label for="query" class="block text-sm font-medium text-gray-700 mb-2">
				Doctor Name
			</label>
			<input
				id="query"
				type="text"
				placeholder="Search by name..."
				bind:value={query}
				on:keypress={handleKeyPress}
				class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
			/>
		</div>

		<div>
			<label for="specialty" class="block text-sm font-medium text-gray-700 mb-2">
				Specialty
			</label>
			<select
				id="specialty"
				bind:value={specialty}
				class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
			>
				<option value="all">All Specialties</option>
				<option value="cardiologist">Cardiologist</option>
				<option value="dermatologist">Dermatologist</option>
				<option value="pediatrician">Pediatrician</option>
				<option value="dentist">Dentist</option>
				<option value="orthopedist">Orthopedist</option>
				<option value="psychiatrist">Psychiatrist</option>
				<option value="gynecologist">Gynecologist</option>
				<option value="neurologist">Neurologist</option>
			</select>
		</div>

		<div>
			<label for="location" class="block text-sm font-medium text-gray-700 mb-2">
				Location
			</label>
			<select
				id="location"
				bind:value={location}
				class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
			>
				<option value="all">All Locations</option>
				<option value="warsaw">Warsaw</option>
				<option value="krakow">Krakow</option>
				<option value="poznan">Poznan</option>
				<option value="wroclaw">Wroclaw</option>
				<option value="gdansk">Gdansk</option>
			</select>
		</div>
	</div>

	<button
		on:click={handleSearch}
		class="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
	>
		Search Doctors
	</button>
</div>

