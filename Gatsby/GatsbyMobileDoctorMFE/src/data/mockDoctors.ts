export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  bio: string;
  experience: number;
}

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Anna Kowalska',
    specialty: 'Cardiology',
    location: 'Warsaw',
    rating: 4.9,
    reviews: 234,
    image: 'https://i.pravatar.cc/150?img=1',
    bio: 'Highly experienced cardiologist with over 15 years of practice.',
    experience: 15,
  },
  {
    id: '2',
    name: 'Dr. Piotr Nowak',
    specialty: 'Dermatology',
    location: 'Krakow',
    rating: 4.8,
    reviews: 189,
    image: 'https://i.pravatar.cc/150?img=2',
    bio: 'Board-certified dermatologist specializing in medical and cosmetic dermatology.',
    experience: 12,
  },
  {
    id: '3',
    name: 'Dr. Maria Wiśniewska',
    specialty: 'Pediatrics',
    location: 'Warsaw',
    rating: 4.9,
    reviews: 312,
    image: 'https://i.pravatar.cc/150?img=3',
    bio: 'Compassionate pediatrician dedicated to comprehensive care for children.',
    experience: 18,
  },
  {
    id: '4',
    name: 'Dr. Jan Lewandowski',
    specialty: 'Orthopedics',
    location: 'Poznan',
    rating: 4.7,
    reviews: 156,
    image: 'https://i.pravatar.cc/150?img=4',
    bio: 'Specializes in sports medicine and orthopedic surgery.',
    experience: 14,
  },
  {
    id: '5',
    name: 'Dr. Katarzyna Zając',
    specialty: 'Neurology',
    location: 'Wroclaw',
    rating: 4.8,
    reviews: 203,
    image: 'https://i.pravatar.cc/150?img=5',
    bio: 'Neurologist with extensive experience in treating headaches and epilepsy.',
    experience: 16,
  },
  {
    id: '6',
    name: 'Dr. Tomasz Kamiński',
    specialty: 'Ophthalmology',
    location: 'Gdansk',
    rating: 4.9,
    reviews: 278,
    image: 'https://i.pravatar.cc/150?img=6',
    bio: 'Ophthalmologist specializing in cataract surgery and laser vision correction.',
    experience: 13,
  },
  {
    id: '7',
    name: 'Dr. Agnieszka Dąbrowska',
    specialty: 'Psychiatry',
    location: 'Warsaw',
    rating: 4.7,
    reviews: 145,
    image: 'https://i.pravatar.cc/150?img=7',
    bio: 'Psychiatrist specializing in anxiety, depression, and mood disorders.',
    experience: 11,
  },
  {
    id: '8',
    name: 'Dr. Michał Wójcik',
    specialty: 'Gastroenterology',
    location: 'Krakow',
    rating: 4.8,
    reviews: 167,
    image: 'https://i.pravatar.cc/150?img=8',
    bio: 'Gastroenterologist with expertise in digestive disorders.',
    experience: 10,
  },
];

