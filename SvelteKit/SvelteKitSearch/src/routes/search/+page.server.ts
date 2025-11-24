import { searchDoctors } from '$lib/data/mockDoctors';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const query = url.searchParams.get('query') || '';
	const specialty = url.searchParams.get('specialty') || 'all';
	const location = url.searchParams.get('location') || 'all';

	const doctors = searchDoctors({ query, specialty, location });

	return {
		doctors,
		filters: { query, specialty, location }
	};
};

