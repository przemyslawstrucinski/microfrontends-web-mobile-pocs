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
  address: string;
  phone: string;
  email: string;
  availability: {
    day: string;
    hours: string;
  }[];
  reviews: {
    id: string;
    patientName: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Anna Kowalska",
    specialty: "Cardiologist",
    location: "Warsaw",
    rating: 4.8,
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    bio: "Dr. Anna Kowalska is an experienced cardiologist with 15 years of practice specializing in heart disease prevention and treatment. She has published numerous research papers on cardiovascular health and is a member of the European Society of Cardiology. Her patient-centered approach combines the latest medical technologies with compassionate care.",
    education: ["Medical University of Warsaw", "Harvard Medical School Fellowship"],
    languages: ["Polish", "English", "German"],
    experience: 15,
    price: 250,
    address: "ul. Marszałkowska 142, 00-001 Warsaw",
    phone: "+48 22 123 4567",
    email: "anna.kowalska@hospital.pl",
    availability: [
      { day: "Monday", hours: "9:00 - 17:00" },
      { day: "Wednesday", hours: "9:00 - 17:00" },
      { day: "Friday", hours: "9:00 - 15:00" },
    ],
    reviews: [
      {
        id: "1",
        patientName: "Maria S.",
        rating: 5,
        comment: "Excellent doctor! Very thorough and caring. Explained everything clearly.",
        date: "2024-10-15",
      },
      {
        id: "2",
        patientName: "Jan K.",
        rating: 5,
        comment: "Dr. Kowalska saved my life. Professional and kind.",
        date: "2024-09-22",
      },
      {
        id: "3",
        patientName: "Ewa P.",
        rating: 4,
        comment: "Very knowledgeable. The wait time was a bit long but worth it.",
        date: "2024-08-10",
      },
    ],
  },
  {
    id: "2",
    name: "Dr. Jan Nowak",
    specialty: "Dermatologist",
    location: "Krakow",
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    bio: "Dr. Jan Nowak is a leading dermatologist focused on skin care, cosmetic procedures, and treatment of various skin conditions. With 12 years of experience, he specializes in laser treatments, anti-aging procedures, and medical dermatology. He stays current with the latest advancements in dermatological care.",
    education: ["Jagiellonian University Medical College", "Berlin Dermatology Institute"],
    languages: ["Polish", "English"],
    experience: 12,
    price: 200,
    address: "ul. Floriańska 55, 31-019 Krakow",
    phone: "+48 12 987 6543",
    email: "jan.nowak@derma.pl",
    availability: [
      { day: "Tuesday", hours: "10:00 - 18:00" },
      { day: "Thursday", hours: "10:00 - 18:00" },
      { day: "Saturday", hours: "10:00 - 14:00" },
    ],
    reviews: [
      {
        id: "1",
        patientName: "Anna M.",
        rating: 5,
        comment: "Best dermatologist in Krakow! Fixed my skin problem quickly.",
        date: "2024-11-01",
      },
      {
        id: "2",
        patientName: "Piotr W.",
        rating: 5,
        comment: "Very professional and modern clinic. Highly recommend!",
        date: "2024-10-20",
      },
    ],
  },
  {
    id: "3",
    name: "Dr. Maria Wiśniewska",
    specialty: "Pediatrician",
    location: "Warsaw",
    rating: 4.7,
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    bio: "Dr. Maria Wiśniewska is a compassionate pediatrician dedicated to children's health and development from infancy through adolescence. With 10 years of experience, she specializes in preventive care, childhood illnesses, and developmental assessments. Parents appreciate her gentle approach and clear communication.",
    education: ["Medical University of Gdansk", "Children's Hospital Boston Training"],
    languages: ["Polish", "English"],
    experience: 10,
    price: 180,
    address: "ul. Nowy Świat 45, 00-042 Warsaw",
    phone: "+48 22 456 7890",
    email: "maria.wisniewska@pediatrics.pl",
    availability: [
      { day: "Monday", hours: "8:00 - 16:00" },
      { day: "Tuesday", hours: "8:00 - 16:00" },
      { day: "Thursday", hours: "8:00 - 16:00" },
      { day: "Friday", hours: "8:00 - 14:00" },
    ],
    reviews: [
      {
        id: "1",
        patientName: "Katarzyna L.",
        rating: 5,
        comment: "My children love Dr. Wiśniewska! She's so patient and kind.",
        date: "2024-10-28",
      },
      {
        id: "2",
        patientName: "Tomasz B.",
        rating: 4,
        comment: "Great pediatrician. Always available and helpful.",
        date: "2024-09-15",
      },
    ],
  },
  {
    id: "4",
    name: "Dr. Piotr Zieliński",
    specialty: "Dentist",
    location: "Poznan",
    rating: 4.6,
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
    bio: "Dr. Piotr Zieliński is an expert dentist providing comprehensive dental care including cosmetic dentistry and orthodontics. With 8 years of experience, he offers modern dental solutions with a focus on patient comfort. His clinic is equipped with the latest dental technology.",
    education: ["Medical University of Lodz", "NYU College of Dentistry"],
    languages: ["Polish", "English", "Spanish"],
    experience: 8,
    price: 150,
    address: "ul. Półwiejska 28, 61-888 Poznan",
    phone: "+48 61 852 9630",
    email: "piotr.zielinski@dental.pl",
    availability: [
      { day: "Monday", hours: "9:00 - 19:00" },
      { day: "Wednesday", hours: "9:00 - 19:00" },
      { day: "Friday", hours: "9:00 - 17:00" },
    ],
    reviews: [
      {
        id: "1",
        patientName: "Agnieszka K.",
        rating: 5,
        comment: "Painless treatment! Dr. Zieliński is very skilled.",
        date: "2024-11-05",
      },
      {
        id: "2",
        patientName: "Marek S.",
        rating: 4,
        comment: "Good dentist, modern equipment. A bit expensive but worth it.",
        date: "2024-10-12",
      },
    ],
  },
  {
    id: "5",
    name: "Dr. Katarzyna Lewandowska",
    specialty: "Orthopedist",
    location: "Wroclaw",
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400",
    bio: "Dr. Katarzyna Lewandowska is a specialized orthopedic surgeon with expertise in sports medicine and joint replacement surgery. With 18 years of experience, she has performed hundreds of successful orthopedic procedures. She is known for her excellent surgical skills and comprehensive post-operative care.",
    education: ["Medical University of Wroclaw", "Mayo Clinic Fellowship"],
    languages: ["Polish", "English"],
    experience: 18,
    price: 300,
    address: "ul. Świdnicka 38, 50-028 Wroclaw",
    phone: "+48 71 343 2100",
    email: "katarzyna.lewandowska@orthopedics.pl",
    availability: [
      { day: "Tuesday", hours: "11:00 - 18:00" },
      { day: "Thursday", hours: "11:00 - 18:00" },
    ],
    reviews: [
      {
        id: "1",
        patientName: "Robert N.",
        rating: 5,
        comment: "Dr. Lewandowska performed my knee surgery. I'm walking again!",
        date: "2024-10-30",
      },
      {
        id: "2",
        patientName: "Monika J.",
        rating: 5,
        comment: "Outstanding surgeon. Caring and professional.",
        date: "2024-09-08",
      },
    ],
  },
  {
    id: "6",
    name: "Dr. Tomasz Dąbrowski",
    specialty: "Psychiatrist",
    location: "Warsaw",
    rating: 4.8,
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
    bio: "Dr. Tomasz Dąbrowski is a compassionate psychiatrist specializing in anxiety, depression, and mood disorders. With 14 years of experience, he provides both medication management and psychotherapy. His holistic approach focuses on understanding each patient's unique circumstances and developing personalized treatment plans.",
    education: ["Medical University of Warsaw", "Columbia University Psychiatry Residency"],
    languages: ["Polish", "English", "French"],
    experience: 14,
    price: 280,
    address: "ul. Krucza 24, 00-526 Warsaw",
    phone: "+48 22 621 8900",
    email: "tomasz.dabrowski@psychiatry.pl",
    availability: [
      { day: "Monday", hours: "12:00 - 20:00" },
      { day: "Wednesday", hours: "12:00 - 20:00" },
      { day: "Friday", hours: "12:00 - 18:00" },
    ],
    reviews: [
      {
        id: "1",
        patientName: "Aleksandra T.",
        rating: 5,
        comment: "Dr. Dąbrowski helped me through a difficult time. Very understanding.",
        date: "2024-11-02",
      },
      {
        id: "2",
        patientName: "Paweł G.",
        rating: 5,
        comment: "Excellent psychiatrist. Creates a safe and supportive environment.",
        date: "2024-10-18",
      },
    ],
  },
  {
    id: "7",
    name: "Dr. Agnieszka Woźniak",
    specialty: "Gynecologist",
    location: "Gdansk",
    rating: 4.7,
    photo: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400",
    bio: "Dr. Agnieszka Woźniak is a women's health specialist with focus on prenatal care, gynecological surgery, and reproductive health. With 16 years of experience, she provides comprehensive women's healthcare with empathy and expertise. Many patients praise her for making them feel comfortable and heard.",
    education: ["Medical University of Gdansk", "Johns Hopkins Women's Health Fellowship"],
    languages: ["Polish", "English"],
    experience: 16,
    price: 220,
    address: "ul. Długa 77, 80-831 Gdansk",
    phone: "+48 58 301 2400",
    email: "agnieszka.wozniak@gynecology.pl",
    availability: [
      { day: "Monday", hours: "10:00 - 17:00" },
      { day: "Wednesday", hours: "10:00 - 17:00" },
      { day: "Thursday", hours: "10:00 - 17:00" },
    ],
    reviews: [
      {
        id: "1",
        patientName: "Joanna R.",
        rating: 5,
        comment: "Dr. Woźniak took great care of me during my pregnancy. Highly recommend!",
        date: "2024-10-25",
      },
      {
        id: "2",
        patientName: "Magdalena K.",
        rating: 4,
        comment: "Professional and caring. Answered all my questions patiently.",
        date: "2024-09-30",
      },
    ],
  },
  {
    id: "8",
    name: "Dr. Marek Kamiński",
    specialty: "Neurologist",
    location: "Krakow",
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400",
    bio: "Dr. Marek Kamiński is an expert neurologist treating conditions of the brain, spinal cord, and nervous system. With 20 years of experience, he specializes in stroke management, epilepsy, and neurodegenerative diseases. He is recognized internationally for his contributions to neurology research.",
    education: ["Jagiellonian University Medical College", "Stanford Neurology Program"],
    languages: ["Polish", "English", "Italian"],
    experience: 20,
    price: 350,
    address: "ul. Kopernika 19, 31-501 Krakow",
    phone: "+48 12 424 7100",
    email: "marek.kaminski@neurology.pl",
    availability: [
      { day: "Tuesday", hours: "9:00 - 16:00" },
      { day: "Thursday", hours: "9:00 - 16:00" },
    ],
    reviews: [
      {
        id: "1",
        patientName: "Barbara M.",
        rating: 5,
        comment: "Dr. Kamiński is simply the best. His expertise is unmatched.",
        date: "2024-11-03",
      },
      {
        id: "2",
        patientName: "Krzysztof L.",
        rating: 5,
        comment: "Saved my father's life after a stroke. Forever grateful!",
        date: "2024-10-14",
      },
    ],
  },
  {
    id: "9",
    name: "Dr. Ewa Szymańska",
    specialty: "Cardiologist",
    location: "Poznan",
    rating: 4.6,
    photo: "https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400",
    bio: "Dr. Ewa Szymańska is a heart health specialist focusing on preventive cardiology and cardiovascular disease management. With 11 years of experience, she emphasizes lifestyle modifications and early intervention. Her approach combines evidence-based medicine with patient education.",
    education: ["Poznan University of Medical Sciences", "Cleveland Clinic Fellowship"],
    languages: ["Polish", "English"],
    experience: 11,
    price: 240,
    address: "ul. Grunwaldzka 10, 60-311 Poznan",
    phone: "+48 61 854 7200",
    email: "ewa.szymanska@cardiology.pl",
    availability: [
      { day: "Monday", hours: "8:00 - 15:00" },
      { day: "Wednesday", hours: "8:00 - 15:00" },
      { day: "Friday", hours: "8:00 - 13:00" },
    ],
    reviews: [
      {
        id: "1",
        patientName: "Andrzej P.",
        rating: 5,
        comment: "Dr. Szymańska is very thorough. Helped me prevent heart disease.",
        date: "2024-10-22",
      },
      {
        id: "2",
        patientName: "Zofia W.",
        rating: 4,
        comment: "Knowledgeable and caring doctor. Recommended!",
        date: "2024-09-19",
      },
    ],
  },
  {
    id: "10",
    name: "Dr. Michał Jankowski",
    specialty: "Dermatologist",
    location: "Warsaw",
    rating: 4.8,
    photo: "https://images.unsplash.com/photo-1613005798967-632017e477c8?w=400",
    bio: "Dr. Michał Jankowski is an advanced dermatologist specializing in laser treatments, anti-aging procedures, and medical dermatology. With 13 years of experience, he combines aesthetic and medical dermatology to provide comprehensive skin care. His clinic features state-of-the-art technology.",
    education: ["Medical University of Warsaw", "Mount Sinai Dermatology Program"],
    languages: ["Polish", "English", "Russian"],
    experience: 13,
    price: 230,
    address: "ul. Mokotowska 63, 00-533 Warsaw",
    phone: "+48 22 628 4500",
    email: "michal.jankowski@skincare.pl",
    availability: [
      { day: "Tuesday", hours: "11:00 - 19:00" },
      { day: "Thursday", hours: "11:00 - 19:00" },
      { day: "Saturday", hours: "10:00 - 15:00" },
    ],
    reviews: [
      {
        id: "1",
        patientName: "Natalia S.",
        rating: 5,
        comment: "Amazing results from laser treatment! Dr. Jankowski is the best.",
        date: "2024-11-04",
      },
      {
        id: "2",
        patientName: "Grzegorz K.",
        rating: 5,
        comment: "Professional service and excellent results. Highly recommend!",
        date: "2024-10-16",
      },
    ],
  },
];

export function getDoctorById(id: string): Doctor | undefined {
  return mockDoctors.find((doctor) => doctor.id === id);
}

