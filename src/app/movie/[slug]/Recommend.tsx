"use client";

import CardMovie from "@/components/CardMovie";
import { useGetSimilar } from "@/hooks/tmdb/movie";

export default function Recommend({ movie_id }: { movie_id: number }) {
  const { data, isLoading } = useGetSimilar(["similar", movie_id], movie_id);
  return (
    <div>
      <h4 className="text-2xl font-bold mb-4">Maybe you like</h4>
      <ul className="flex gap-2 overflow-x-auto flex-1">
        {data?.results?.map?.((i) => (
          <CardMovie key={i?.id} item={i} className="shrink-0 w-64 h-96" />
        ))}
      </ul>
    </div>
  );
}
