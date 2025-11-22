import { DoctorProfile } from '@doctor/shared';
import Image from 'next/image';

interface ProfileHeaderProps {
  doctor: DoctorProfile;
}

export function ProfileHeader({ doctor }: ProfileHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
          <Image
            src={doctor.photoUrl}
            alt={doctor.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
          <p className="text-xl text-primary font-medium mb-3">{doctor.specialty}</p>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-lg font-medium text-gray-900">{doctor.rating}</span>
              <span className="ml-2 text-gray-600">({doctor.reviewCount} reviews)</span>
            </div>

            <div className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {doctor.experience} years experience
            </div>
          </div>

          <div className="flex items-start text-gray-700">
            <svg
              className="w-5 h-5 mt-0.5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <p>{doctor.location}</p>
              <p>{doctor.city}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-sm text-gray-600 mb-1">Consultation fee</p>
          <p className="text-2xl font-bold text-gray-900">{doctor.price} PLN</p>
        </div>
      </div>
    </div>
  );
}

