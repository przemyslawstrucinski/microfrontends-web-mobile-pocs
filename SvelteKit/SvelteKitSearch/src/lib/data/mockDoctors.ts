export interface Doctor {
	id: string;
	name: string;
	specialty: string;
	location: string;
	rating: number;
	reviewCount: number;
	experience: number;
	bio: string;
	education: string[];
	languages: string[];
	availability: string;
	phone: string;
	email: string;
	image: string;
}

export const mockDoctors: Doctor[] = [
	{
		id: '1',
		name: 'Dr. Anna Kowalska',
		specialty: 'Cardiologist',
		location: 'Warsaw',
		rating: 4.8,
		reviewCount: 124,
		experience: 15,
		bio: 'Specializing in preventive cardiology and heart disease management with over 15 years of experience.',
		education: [
			'MD - Medical University of Warsaw',
			'Cardiology Residency - National Institute of Cardiology',
			'Fellowship in Interventional Cardiology - Johns Hopkins'
		],
		languages: ['Polish', 'English', 'German'],
		availability: 'Mon-Fri: 9:00 AM - 5:00 PM',
		phone: '+48 22 123 4567',
		email: 'a.kowalska@clinic.pl',
		image: 'https://via.placeholder.com/150'
	},
	{
		id: '2',
		name: 'Dr. Jan Nowak',
		specialty: 'Dermatologist',
		location: 'Krakow',
		rating: 4.9,
		reviewCount: 98,
		experience: 12,
		bio: 'Expert in cosmetic dermatology and skin cancer treatment.',
		education: [
			'MD - Jagiellonian University Medical College',
			'Dermatology Residency - University Hospital Krakow'
		],
		languages: ['Polish', 'English'],
		availability: 'Mon-Wed: 10:00 AM - 6:00 PM',
		phone: '+48 12 234 5678',
		email: 'j.nowak@clinic.pl',
		image: 'https://via.placeholder.com/150'
	},
	{
		id: '3',
		name: 'Dr. Maria Wiśniewska',
		specialty: 'Pediatrician',
		location: 'Warsaw',
		rating: 4.7,
		reviewCount: 156,
		experience: 20,
		bio: 'Compassionate pediatric care focusing on child development and preventive medicine.',
		education: [
			'MD - Medical University of Warsaw',
			'Pediatrics Residency - Children\'s Memorial Health Institute'
		],
		languages: ['Polish', 'English', 'French'],
		availability: 'Mon-Fri: 8:00 AM - 4:00 PM',
		phone: '+48 22 345 6789',
		email: 'm.wisniewska@clinic.pl',
		image: 'https://via.placeholder.com/150'
	},
	{
		id: '4',
		name: 'Dr. Piotr Zieliński',
		specialty: 'Dentist',
		location: 'Poznan',
		rating: 4.6,
		reviewCount: 87,
		experience: 10,
		bio: 'Modern dental care with focus on pain-free procedures and cosmetic dentistry.',
		education: [
			'DDS - Poznan University of Medical Sciences',
			'Advanced Implantology Certificate'
		],
		languages: ['Polish', 'English'],
		availability: 'Tue-Sat: 9:00 AM - 7:00 PM',
		phone: '+48 61 456 7890',
		email: 'p.zielinski@dental.pl',
		image: 'https://via.placeholder.com/150'
	},
	{
		id: '5',
		name: 'Dr. Katarzyna Lewandowska',
		specialty: 'Orthopedist',
		location: 'Wroclaw',
		rating: 4.9,
		reviewCount: 143,
		experience: 18,
		bio: 'Specialized in sports medicine and joint replacement surgery.',
		education: [
			'MD - Wroclaw Medical University',
			'Orthopedic Surgery Residency',
			'Sports Medicine Fellowship - USA'
		],
		languages: ['Polish', 'English', 'Spanish'],
		availability: 'Mon-Thu: 10:00 AM - 6:00 PM',
		phone: '+48 71 567 8901',
		email: 'k.lewandowska@ortho.pl',
		image: 'https://via.placeholder.com/150'
	},
	{
		id: '6',
		name: 'Dr. Tomasz Dąbrowski',
		specialty: 'Psychiatrist',
		location: 'Gdansk',
		rating: 4.8,
		reviewCount: 91,
		experience: 14,
		bio: 'Treating anxiety, depression, and mood disorders with evidence-based approaches.',
		education: [
			'MD - Medical University of Gdansk',
			'Psychiatry Residency',
			'Cognitive Behavioral Therapy Certification'
		],
		languages: ['Polish', 'English'],
		availability: 'Mon-Fri: 11:00 AM - 7:00 PM',
		phone: '+48 58 678 9012',
		email: 't.dabrowski@mind.pl',
		image: 'https://via.placeholder.com/150'
	},
	{
		id: '7',
		name: 'Dr. Agnieszka Kamińska',
		specialty: 'Gynecologist',
		location: 'Warsaw',
		rating: 4.7,
		reviewCount: 132,
		experience: 16,
		bio: 'Comprehensive women\'s health care including prenatal care and minimally invasive surgery.',
		education: [
			'MD - Medical University of Warsaw',
			'OB/GYN Residency',
			'Minimally Invasive Surgery Fellowship'
		],
		languages: ['Polish', 'English', 'Russian'],
		availability: 'Mon-Fri: 9:00 AM - 5:00 PM',
		phone: '+48 22 789 0123',
		email: 'a.kaminska@womenshealth.pl',
		image: 'https://via.placeholder.com/150'
	},
	{
		id: '8',
		name: 'Dr. Marek Woźniak',
		specialty: 'Neurologist',
		location: 'Krakow',
		rating: 4.9,
		reviewCount: 167,
		experience: 22,
		bio: 'Expert in treating headaches, epilepsy, and movement disorders.',
		education: [
			'MD - Jagiellonian University Medical College',
			'Neurology Residency',
			'Movement Disorders Fellowship - Mayo Clinic'
		],
		languages: ['Polish', 'English', 'German'],
		availability: 'Tue-Fri: 10:00 AM - 6:00 PM',
		phone: '+48 12 890 1234',
		email: 'm.wozniak@neuro.pl',
		image: 'https://via.placeholder.com/150'
	}
];

export function searchDoctors(filters: {
	query?: string;
	specialty?: string;
	location?: string;
}): Doctor[] {
	let results = [...mockDoctors];

	if (filters.query) {
		const query = filters.query.toLowerCase();
		results = results.filter((doctor) =>
			doctor.name.toLowerCase().includes(query) ||
			doctor.specialty.toLowerCase().includes(query)
		);
	}

	if (filters.specialty && filters.specialty !== 'all') {
		results = results.filter(
			(doctor) => doctor.specialty.toLowerCase() === filters.specialty?.toLowerCase()
		);
	}

	if (filters.location && filters.location !== 'all') {
		results = results.filter(
			(doctor) => doctor.location.toLowerCase() === filters.location?.toLowerCase()
		);
	}

	return results;
}

export function getDoctorById(id: string): Doctor | undefined {
	return mockDoctors.find((doctor) => doctor.id === id);
}

