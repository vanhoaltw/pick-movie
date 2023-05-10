import { getMoviePopular } from "@/services/tmdbRequest";
import ListResult from "./ListResult";
import { numberWithCommas } from "@/lib/number";

export default async function Home() {
  const moviePopular = await getMoviePopular();

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-4 lg:px-0">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Popular</h1>
        <p className="text-gray-400">
          List of movies and TV Shows, I, Pramod Poudel have watched till date.
          😉
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-gray-400">
          <strong className="text-2xl mr-1">All</strong> (
          {numberWithCommas(moviePopular?.total_results)})
        </p>
        <ListResult initialData={moviePopular} />
      </div>
    </main>
  );
}
