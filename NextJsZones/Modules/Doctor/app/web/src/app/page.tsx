'use client';

import { useEffect } from 'react';
import { useDoctorStore } from '@doctor/shared';
import { ProfileHeader } from '@/components/ProfileHeader';
import { AppointmentBooking } from '@/components/AppointmentBooking';
import { ReviewsList } from '@/components/ReviewsList';

export default function DoctorPage() {
  const { currentDoctor, isLoading, loadDoctor } = useDoctorStore();

  useEffect(() => {
    // Load first doctor by default
    loadDoctor('1');
  }, [loadDoctor]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!currentDoctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Doctor not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProfileHeader doctor={currentDoctor} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700 mb-4">{currentDoctor.bio}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                {currentDoctor.education.map((edu, index) => (
                  <li key={index} className="text-gray-700">
                    {edu}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {currentDoctor.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <ReviewsList />
          </div>

          <div className="lg:col-span-1">
            <AppointmentBooking />
          </div>
        </div>
      </div>
    </div>
  );
}

