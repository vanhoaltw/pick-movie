"use client";

import CardMovie from "@/components/CardMovie";
import SearchItem from "@/components/SearchItem";
import { useSearchMulti } from "@/hooks/tmdb/movie";
import { numberWithCommas } from "@/lib/number";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ListResult({ keyword }: { keyword?: string }) {
  const { data, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useSearchMulti(["search", keyword], keyword);

  const { ref: endRef, inView } = useInView();
  useEffect(() => {
    if (inView && hasNextPage && (!isFetching || !isFetchingNextPage))
      fetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, hasNextPage, inView, isFetchingNextPage]);

  return (
    <div>
      <p className="text-gray-400 mb-4">
        <strong className="text-2xl mr-1">All</strong> (
        {numberWithCommas(data?.pages?.[0]?.total_results || 0)})
      </p>

      <ul className="space-y-4">
        {data?.pages?.map?.((group) => (
          <Fragment key={group.page}>
            {group?.results?.map?.((movie) => (
              <SearchItem key={movie?.id} data={movie} />
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
