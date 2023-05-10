// @ts-nocheck

import Link from "next/link";
import TmdbImage from "./images/TmdbImage";
import { TiStarOutline } from "react-icons/ti";
import dayjs from "dayjs";
import { Fragment } from "react";
import { RxVideo } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

const SearchItem = ({ data }) => {
  switch (data?.media_type) {
    case "person":
      return (
        <div className="flex gap-4 items-center p-4 bg-slate-400/10 rounded-md hover:bg-slate-400/20 transition-all">
          <Link href={`/cast/${data?.id}`} className="shrink-0">
            <TmdbImage
              wImage="w185"
              src={data?.profile_path}
              imgClassName="object-cover h-20 w-20"
              alt={data?.title || ""}
              height={60}
              width={60}
            />
          </Link>
          <div>
            <Link href={`/cast/${data?.id}`}>
              <p className="text-lg font-bold"><FaUser className="inline-block text-xs mr-1 mb-0.5" /> {data?.name}</p>
            </Link>
            <div className="flex items-center gap-2 text-slate-400">
              <p>{data?.known_for_department} </p>
              <span className="inline-block h-1 w-1 rounded-full bg-current" />
              <div>
                {data?.known_for?.map?.((i, index) => (
                  <Fragment key={i?.id}>
                    <Link
                      href={`/movie/${i?.id}`}
                      className="hover:text-slate-100"
                    >
                      {i?.title}
                    </Link>

                    {index !== data?.known_for?.length - 1 && ", "}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="flex gap-4 p-4 bg-slate-400/10 rounded-md hover:bg-slate-400/20 transition-all">
          <Link href={`/movie/${data?.id}`} className="shrink-0">
            <TmdbImage
              wImage="w342"
              src={data?.poster_path || data?.profile_path}
              imgClassName="object-cover w-20 shrink-0"
              alt={data?.title || ""}
              height={100}
              width={100}
            />
          </Link>
          <div className="space-y-2">
            <Link href={`/movie/${data?.id}`}>
              <p className="text-lg font-bold"><RxVideo className="inline-block mr-1 mb-0.5" /> {data?.title}</p>
            </Link>
            <p className="min-w-0 break-words line-clamp-3 text-slate-400">
              {data?.overview}
            </p>
            <span className="bg-black/60 text-yellow-500 w-fit flex items-center gap-1 p-1 px-1.5 text-sm rounded-md">
              <TiStarOutline /> {data?.vote_average?.toFixed(1)}
            </span>
            <div>
              <strong>Release Date: </strong>{" "}
              {dayjs(data?.release_date).format("DD/MM/YYYY")}
            </div>
          </div>
        </div>
      );
  }
};

export default SearchItem;
