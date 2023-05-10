import { getMovieUpcoming } from "@/services/tmdbRequest";
import ListResult from "./ListResult";
import { numberWithCommas } from "@/lib/number";

export default async function UpcomingPage() {
  const initialData = await getMovieUpcoming();

  return (
    <main className="min-h-screen max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Upcoming</h1>
        <p className="text-gray-400">List of movies and TV Shows upcoming.</p>
      </div>
      <div className="space-y-4">
        <p className="text-gray-400">
          <strong className="text-2xl mr-1">All</strong> (
          {numberWithCommas(initialData?.total_results)})
        </p>
        <ListResult initialData={initialData} />
      </div>
    </main>
  );
}
