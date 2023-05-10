"use client";

import TmdbImage from "@/components/images/TmdbImage";
import { useGetCastMovie } from "@/hooks/tmdb/movie";
import Link from "next/link";

export default function KnowFor({ cast_id }: { cast_id: number }) {
  const { isLoading, data } = useGetCastMovie(["cast_movie", cast_id], cast_id);

  if (isLoading) return null;

  return (
    <div>
      <h4 className="text-2xl font-bold mb-4">Know for</h4>
      <ul className="flex gap-4 flex-wrap flex-1">
        {data?.cast?.map?.((i) => (
          <Link key={i.id} href={`/movie/${i?.id}`} className="w-36 space-y-2">
            <div className="w-36 aspect-square relative">
              <TmdbImage
                wImage="w342"
                src={i?.poster_path || ""}
                alt={i?.title || ""}
                fill
              />
            </div>
            <p className="truncate text-center">{i?.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
