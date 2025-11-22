'use client';

import { useDoctorStore, groupAppointmentsByDate, formatDate } from '@doctor/shared';
import { useState } from 'react';

export function AppointmentBooking() {
  const { appointments, bookAppointment } = useDoctorStore();
  const [selectedAppointment, setSelectedAppointment] = useState<string | null>(null);
  
  const availableAppointments = appointments.filter((apt) => apt.available);
  const groupedAppointments = groupAppointmentsByDate(availableAppointments);

  const handleBook = () => {
    if (selectedAppointment) {
      bookAppointment(selectedAppointment);
      alert('Appointment booked successfully!');
      setSelectedAppointment(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Book Appointment</h2>

      {Object.keys(groupedAppointments).length > 0 ? (
        <>
          <div className="space-y-4 mb-6">
            {Object.entries(groupedAppointments).map(([date, appts]) => (
              <div key={date}>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  {formatDate(date)}
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {appts.map((apt) => (
                    <button
                      key={apt.id}
                      onClick={() => setSelectedAppointment(apt.id)}
                      className={`px-3 py-2 text-sm rounded-md border transition-colors ${
                        selectedAppointment === apt.id
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                      }`}
                    >
                      {apt.time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleBook}
            disabled={!selectedAppointment}
            className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
          >
            Confirm Booking
          </button>
        </>
      ) : (
        <p className="text-gray-500 text-center py-8">No appointments available</p>
      )}
    </div>
  );
}

