export interface DoctorProfile {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  location: string;
  city: string;
  photoUrl: string;
  experience: number;
  price: number;
  bio: string;
  education: string[];
  languages: string[];
}

export interface Appointment {
  id: string;
  doctorId: string;
  date: string;
  time: string;
  available: boolean;
}

export interface Review {
  id: string;
  doctorId: string;
  patientName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface DoctorState {
  currentDoctor: DoctorProfile | null;
  appointments: Appointment[];
  reviews: Review[];
  isLoading: boolean;
}

