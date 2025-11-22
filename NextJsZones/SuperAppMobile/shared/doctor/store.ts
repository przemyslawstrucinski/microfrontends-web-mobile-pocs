import { create } from 'zustand';
import { DoctorState, DoctorProfile, Appointment } from './types';
import { mockDoctorProfiles, mockAppointments, mockReviews } from './mockData';

interface DoctorStore extends DoctorState {
  loadDoctor: (id: string) => void;
  bookAppointment: (appointmentId: string) => void;
  reset: () => void;
}

export const useDoctorStore = create<DoctorStore>((set, get) => ({
  currentDoctor: null,
  appointments: [],
  reviews: [],
  isLoading: false,

  loadDoctor: (id: string) => {
    set({ isLoading: true });

    // Simulate API call
    setTimeout(() => {
      const doctor = mockDoctorProfiles.find((d) => d.id === id);
      const doctorAppointments = mockAppointments.filter((a) => a.doctorId === id);
      const doctorReviews = mockReviews.filter((r) => r.doctorId === id);

      set({
        currentDoctor: doctor || null,
        appointments: doctorAppointments,
        reviews: doctorReviews,
        isLoading: false,
      });
    }, 300);
  },

  bookAppointment: (appointmentId: string) => {
    const { appointments } = get();
    const updatedAppointments = appointments.map((apt) =>
      apt.id === appointmentId ? { ...apt, available: false } : apt
    );
    set({ appointments: updatedAppointments });
  },

  reset: () => {
    set({
      currentDoctor: null,
      appointments: [],
      reviews: [],
      isLoading: false,
    });
  },
}));

