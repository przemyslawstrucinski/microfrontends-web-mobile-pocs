export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  photo: string;
  bio: string;
  education: string[];
  languages: string[];
  experience: number;
  price: number;
}

export const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Anna Kowalska",
    specialty: "Cardiologist",
    location: "Warsaw",
    rating: 4.8,
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    bio: "Experienced cardiologist with 15 years of practice specializing in heart disease prevention and treatment.",
    education: ["Medical University of Warsaw", "Harvard Medical School Fellowship"],
    languages: ["Polish", "English", "German"],
    experience: 15,
    price: 250,
  },
  {
    id: "2",
    name: "Dr. Jan Nowak",
    specialty: "Dermatologist",
    location: "Krakow",
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    bio: "Leading dermatologist focused on skin care, cosmetic procedures, and treatment of skin conditions.",
    education: ["Jagiellonian University Medical College", "Berlin Dermatology Institute"],
    languages: ["Polish", "English"],
    experience: 12,
    price: 200,
  },
  {
    id: "3",
    name: "Dr. Maria Wiśniewska",
    specialty: "Pediatrician",
    location: "Warsaw",
    rating: 4.7,
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    bio: "Compassionate pediatrician dedicated to children's health and development from infancy through adolescence.",
    education: ["Medical University of Gdansk", "Children's Hospital Boston Training"],
    languages: ["Polish", "English"],
    experience: 10,
    price: 180,
  },
  {
    id: "4",
    name: "Dr. Piotr Zieliński",
    specialty: "Dentist",
    location: "Poznan",
    rating: 4.6,
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
    bio: "Expert dentist providing comprehensive dental care including cosmetic dentistry and orthodontics.",
    education: ["Medical University of Lodz", "NYU College of Dentistry"],
    languages: ["Polish", "English", "Spanish"],
    experience: 8,
    price: 150,
  },
  {
    id: "5",
    name: "Dr. Katarzyna Lewandowska",
    specialty: "Orthopedist",
    location: "Wroclaw",
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400",
    bio: "Specialized orthopedic surgeon with expertise in sports medicine and joint replacement surgery.",
    education: ["Medical University of Wroclaw", "Mayo Clinic Fellowship"],
    languages: ["Polish", "English"],
    experience: 18,
    price: 300,
  },
  {
    id: "6",
    name: "Dr. Tomasz Dąbrowski",
    specialty: "Psychiatrist",
    location: "Warsaw",
    rating: 4.8,
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
    bio: "Compassionate psychiatrist specializing in anxiety, depression, and mood disorders.",
    education: ["Medical University of Warsaw", "Columbia University Psychiatry Residency"],
    languages: ["Polish", "English", "French"],
    experience: 14,
    price: 280,
  },
  {
    id: "7",
    name: "Dr. Agnieszka Woźniak",
    specialty: "Gynecologist",
    location: "Gdansk",
    rating: 4.7,
    photo: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400",
    bio: "Women's health specialist with focus on prenatal care, gynecological surgery, and reproductive health.",
    education: ["Medical University of Gdansk", "Johns Hopkins Women's Health Fellowship"],
    languages: ["Polish", "English"],
    experience: 16,
    price: 220,
  },
  {
    id: "8",
    name: "Dr. Marek Kamiński",
    specialty: "Neurologist",
    location: "Krakow",
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400",
    bio: "Expert neurologist treating conditions of the brain, spinal cord, and nervous system.",
    education: ["Jagiellonian University Medical College", "Stanford Neurology Program"],
    languages: ["Polish", "English", "Italian"],
    experience: 20,
    price: 350,
  },
  {
    id: "9",
    name: "Dr. Ewa Szymańska",
    specialty: "Cardiologist",
    location: "Poznan",
    rating: 4.6,
    photo: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400",
    bio: "Heart health specialist focusing on preventive cardiology and cardiovascular disease management.",
    education: ["Poznan University of Medical Sciences", "Cleveland Clinic Fellowship"],
    languages: ["Polish", "English"],
    experience: 11,
    price: 240,
  },
  {
    id: "10",
    name: "Dr. Michał Jankowski",
    specialty: "Dermatologist",
    location: "Warsaw",
    rating: 4.8,
    photo: "https://images.unsplash.com/photo-1613005798967-632017e477c8?w=400",
    bio: "Advanced dermatologist specializing in laser treatments, anti-aging procedures, and medical dermatology.",
    education: ["Medical University of Warsaw", "Mount Sinai Dermatology Program"],
    languages: ["Polish", "English", "Russian"],
    experience: 13,
    price: 230,
  },
];

export function searchDoctors(params: {
  query?: string;
  specialty?: string;
  location?: string;
}): Doctor[] {
  let results = [...mockDoctors];

  if (params.query) {
    const query = params.query.toLowerCase();
    results = results.filter((doctor) =>
      doctor.name.toLowerCase().includes(query)
    );
  }

  if (params.specialty && params.specialty !== "all") {
    results = results.filter(
      (doctor) =>
        doctor.specialty.toLowerCase() === params.specialty?.toLowerCase()
    );
  }

  if (params.location && params.location !== "all") {
    results = results.filter(
      (doctor) =>
        doctor.location.toLowerCase() === params.location?.toLowerCase()
    );
  }

  return results;
}

export function getDoctorById(id: string): Doctor | undefined {
  return mockDoctors.find((doctor) => doctor.id === id);
}

