"use client";

import TmdbImage from "@/components/images/TmdbImage";
import { useGetCasting } from "@/hooks/tmdb/movie";
import Link from "next/link";

export default function Casting({ movie_id }: { movie_id: number }) {
  const { data } = useGetCasting(["cast", movie_id], movie_id);

  if (!data?.cast?.length) return null;

  console.log({ data })
  return (
    <div>
      <h4 className="text-2xl font-bold mb-4">Casting</h4>
      <div className="flex gap-4 overflow-x-auto flex-1">
        {data?.cast?.map?.((c) => (
          <Link
            key={c?.id}
            href={`/cast/${c?.id}`}
            className="w-24 flex flex-col items-center shrink-0"
          >
            <TmdbImage
              alt={c?.name || ""}
              wImage="w185"
              src={`${c?.profile_path}`}
              width={100}
              height={60}
              imgClassName="rounded-md w-22 h-28 object-cover mb-2"
            />
            <p className="font-bold truncate w-full text-center">{c?.name}</p>
            <p className="text-slate-400">{c?.known_for_department}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
