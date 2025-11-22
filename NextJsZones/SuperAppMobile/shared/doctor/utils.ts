import { Appointment } from './types';

export function getAvailableAppointments(appointments: Appointment[]): Appointment[] {
  return appointments.filter((appointment) => appointment.available);
}

export function groupAppointmentsByDate(appointments: Appointment[]): Record<string, Appointment[]> {
  return appointments.reduce((acc, appointment) => {
    const date = appointment.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(appointment);
    return acc;
  }, {} as Record<string, Appointment[]>);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

