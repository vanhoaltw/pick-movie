"use client";

import CardMovie from "@/components/CardMovie";
import { useGetMovieUpcoming } from "@/hooks/tmdb/movie";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ListResult({ initialData }: { initialData: unknown }) {
  const { data, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useGetMovieUpcoming(["upcoming", { initialData }]);

  const { ref: endRef, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage && (!isFetching || !isFetchingNextPage))
      fetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, hasNextPage, inView, isFetchingNextPage]);

  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,_1fr))] gap-4">
        {data?.pages?.map?.((group) => (
          <Fragment key={group.page}>
            {group?.results?.map?.((movie) => (
              <CardMovie key={movie?.id} item={movie} />
            ))}
          </Fragment>
        ))}
      </ul>

      {(isFetching || isFetchingNextPage) && (
        <div className="text-center py-4">Loading...</div>
      )}
      {!!data?.pages?.[0]?.results?.length && hasNextPage && (
        <div ref={endRef} className="opacity-0 h-4" />
      )}
    </div>
  );
}
