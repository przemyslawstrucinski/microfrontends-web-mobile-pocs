import { DoctorProfile, Appointment, Review } from './types';

export const mockDoctorProfiles: DoctorProfile[] = [
  {
    id: '1',
    name: 'Dr Anna Kowalska',
    specialty: 'Kardiolog',
    rating: 4.8,
    reviewCount: 127,
    location: 'ul. Marszałkowska 15',
    city: 'Warsaw',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
    experience: 12,
    price: 200,
    bio: 'Specjalizuję się w kardiologii interwencyjnej i prewencyjnej. Zajmuję się diagnostyką i leczeniem chorób serca.',
    education: [
      'Warszawski Uniwersytet Medyczny - Medycyna (2008)',
      'Specjalizacja w kardiologii (2013)',
    ],
    languages: ['Polish', 'English', 'German'],
  },
  {
    id: '2',
    name: 'Dr Piotr Nowak',
    specialty: 'Dermatolog',
    rating: 4.9,
    reviewCount: 203,
    location: 'al. Niepodległości 45',
    city: 'Krakow',
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
    experience: 15,
    price: 180,
    bio: 'Dermatolog z wieloletnim doświadczeniem w leczeniu chorób skóry i dermatologii estetycznej.',
    education: [
      'Jagielloński Uniwersytet Medyczny - Medycyna (2006)',
      'Specjalizacja w dermatologii (2011)',
    ],
    languages: ['Polish', 'English'],
  },
];

export const mockAppointments: Appointment[] = [
  { id: '1', doctorId: '1', date: '2025-11-25', time: '09:00', available: true },
  { id: '2', doctorId: '1', date: '2025-11-25', time: '10:00', available: true },
  { id: '3', doctorId: '1', date: '2025-11-25', time: '11:00', available: false },
  { id: '4', doctorId: '1', date: '2025-11-25', time: '14:00', available: true },
  { id: '5', doctorId: '1', date: '2025-11-26', time: '09:00', available: true },
  { id: '6', doctorId: '1', date: '2025-11-26', time: '10:00', available: true },
];

export const mockReviews: Review[] = [
  {
    id: '1',
    doctorId: '1',
    patientName: 'Jan Kowalski',
    rating: 5,
    comment: 'Bardzo profesjonalny lekarz. Dokładne badanie i szczegółowe wyjaśnienia.',
    date: '2025-11-15',
  },
  {
    id: '2',
    doctorId: '1',
    patientName: 'Maria Nowak',
    rating: 4,
    comment: 'Kompetentny lekarz, choć trochę długi czas oczekiwania.',
    date: '2025-11-10',
  },
  {
    id: '3',
    doctorId: '1',
    patientName: 'Piotr Wiśniewski',
    rating: 5,
    comment: 'Świetny kontakt z pacjentem. Polecam!',
    date: '2025-11-05',
  },
];

