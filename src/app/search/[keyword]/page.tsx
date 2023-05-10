import Breadcrumb from "@/components/Breadcrumb";
import { getMovieDetail } from "@/services/tmdbRequest";
import dayjs from "dayjs";
import Link from "next/link";
import { Fragment } from "react";
import { TiStarOutline } from "react-icons/ti";
import TmdbImage from "@/components/images/TmdbImage";
import ListResult from "./ListResult";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
});

export default async function SearchPage({
  params,
}: {
  params: { keyword?: string };
}) {
  const { keyword } = params || {};
  //   const data = await getMovieDetail(Number(slug));
  //   const releaseDate = dayjs(data?.release_date);

  return (
    <main className="min-h-screen max-w-5xl mx-auto my-10 relative">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Search</h1>
        <p className="text-gray-400">{keyword}</p>
      </div>
      <ListResult keyword={keyword} />
    </main>
  );
}
