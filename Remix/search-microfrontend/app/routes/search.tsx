import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import SearchBar from "~/components/SearchBar";
import SearchResults from "~/components/SearchResults";
import { searchDoctors } from "~/data/mock-doctors";

export const meta: MetaFunction = () => {
  return [
    { title: "Search Doctors - MojLekarz" },
    { name: "description", content: "Find the best doctors for your needs" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") || "";
  const specialty = url.searchParams.get("specialty") || "all";
  const location = url.searchParams.get("location") || "all";

  const doctors = searchDoctors({ query, specialty, location });

  return json({
    doctors,
    filters: { query, specialty, location },
  });
}

export default function Search() {
  const { doctors, filters } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Search Doctors</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Search Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold">{doctors.length}</span> doctor(s)
            {filters.query && (
              <span>
                {" "}
                matching "<span className="font-semibold">{filters.query}</span>"
              </span>
            )}
            {filters.specialty !== "all" && (
              <span>
                {" "}
                in <span className="font-semibold">{filters.specialty}</span>
              </span>
            )}
            {filters.location !== "all" && (
              <span>
                {" "}
                near <span className="font-semibold">{filters.location}</span>
              </span>
            )}
          </p>
        </div>

        {/* Results */}
        <SearchResults doctors={doctors} />
      </div>
    </div>
  );
}

