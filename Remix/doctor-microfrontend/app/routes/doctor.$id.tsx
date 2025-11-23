import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getDoctorById } from "~/data/mock-doctors";
import DoctorProfile from "~/components/DoctorProfile";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.doctor) {
    return [
      { title: "Doctor Not Found - MojLekarz" },
      { name: "description", content: "The requested doctor profile was not found" },
    ];
  }

  return [
    { title: `${data.doctor.name} - ${data.doctor.specialty} - MojLekarz` },
    {
      name: "description",
      content: `${data.doctor.name} is a ${data.doctor.specialty} in ${data.doctor.location} with ${data.doctor.experience} years of experience. Book an appointment today!`,
    },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const doctorId = params.id;

  if (!doctorId) {
    throw new Response("Doctor ID is required", { status: 400 });
  }

  const doctor = getDoctorById(doctorId);

  if (!doctor) {
    throw new Response("Doctor not found", { status: 404 });
  }

  return json({ doctor });
}

export default function DoctorProfilePage() {
  const { doctor } = useLoaderData<typeof loader>();

  return <DoctorProfile doctor={doctor} />;
}

export function ErrorBoundary() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Doctor Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The doctor profile you're looking for doesn't exist.
        </p>
        <a
          href="http://localhost:3001/search"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
        >
          Search for Doctors
        </a>
      </div>
    </div>
  );
}

