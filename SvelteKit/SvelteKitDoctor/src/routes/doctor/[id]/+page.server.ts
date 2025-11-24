import { error } from '@sveltejs/kit';
import { getDoctorById } from '$lib/data/mockDoctors';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const doctor = getDoctorById(params.id);

	if (!doctor) {
		throw error(404, {
			message: 'Doctor not found'
		});
	}

	return {
		doctor
	};
};

