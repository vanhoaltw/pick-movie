import { TypeMovie } from "@/types";
import { TiStarOutline } from "react-icons/ti";
import Link from "next/link";
import classNames from "classnames";
import TmdbImage from "./images/TmdbImage";

const CardMovie = ({
  item,
  className,
}: {
  item: TypeMovie;
  className?: string;
}) => {
  return (
    <li
      className={classNames(
        className,
        "h-full rounded-md bg-slate-600/10 hover:bg-slate-400/20 p-3 transition-all"
      )}
    >
      <Link href={`/movie/${item?.id}`}>
        <div className="relative w-full h-72 object-cover mb-3">
          <span className="absolute top-2 left-2 bg-black/60 text-yellow-500 z-10 flex items-center gap-1 p-1 px-1.5 text-sm rounded-md">
            <TiStarOutline /> {item?.vote_average?.toFixed(1)}
          </span>
          <TmdbImage
            wImage="w342"
            src={item?.poster_path || ""}
            imgClassName="rounded-md object-cover"
            alt={item?.title || ""}
            fill
          />
        </div>
        <p className="font-bold line-clamp-2">{item?.title}</p>
      </Link>
    </li>
  );
};

export default CardMovie;
