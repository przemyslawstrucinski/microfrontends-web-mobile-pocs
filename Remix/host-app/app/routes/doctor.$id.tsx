import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  const doctorId = params.id;
  
  if (!doctorId) {
    throw new Response("Doctor ID is required", { status: 400 });
  }
  
  // Redirect to the doctor microfrontend
  return redirect(`http://localhost:3002/doctor/${doctorId}`, 302);
}

export default function Doctor() {
  return null;
}

