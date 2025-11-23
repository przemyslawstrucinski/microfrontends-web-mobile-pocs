import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchParams = url.search;
  
  // Redirect to the search microfrontend with query parameters
  return redirect(`http://localhost:3001/search${searchParams}`, 302);
}

export default function Search() {
  return null;
}

