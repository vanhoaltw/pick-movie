import Breadcrumb from "@/components/Breadcrumb";
import { getMovieDetail } from "@/services/tmdbRequest";
import dayjs from "dayjs";
import { Fragment, useMemo } from "react";
import { TiStarOutline } from "react-icons/ti";
import Trailer from "./Trailer";
import Casting from "./Casting";
import Recommend from "./Recommend";
import TmdbImage from "@/components/images/TmdbImage";
import NotFound from "@/components/NotFound";
import { PageHead } from "@/components/PageHead";
import { TMDB_IMAGE_BASE_URL } from "@/constants/tmdb";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
});

export default async function MoviePage({
  params,
}: {
  params: { slug?: string };
}) {
  const { slug } = params || {};
  let data: any;

  try {
    data = await getMovieDetail(Number(slug));
  } catch (error) {
    return <NotFound />;
  }

  const releaseDate = dayjs(data?.release_date);

  return (
    <>
      <PageHead
        title={data?.title}
        description={data?.overview}
        ogImage={`${TMDB_IMAGE_BASE_URL}/w300${data?.backdrop_path}`}
      />
      <main className="min-h-screen max-w-5xl mx-auto my-10 relative">
        <div className="max-h-[350px] rounded-xl overflow-hidden absolute top-0 left-0">
          <div
            className="absolute w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url(.jpg)",
            }}
          />
          <TmdbImage
            alt={data?.title || ""}
            wImage="original"
            src={`${data?.backdrop_path}`}
            width={2450}
            height={400}
          />
        </div>

        <div className="px-4 md:px-10 w-full space-y-14 pt-20 sm:pt-72">
          <div className="rounded-xl bg-slate-400/20 backdrop-blur-md p-4 md:w-1/2">
            <Breadcrumb>
              <Breadcrumb.Anchor>Movie</Breadcrumb.Anchor>
            </Breadcrumb>
            <div className="flex items-center flex-wrap md:flex-nowrap justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold min-w-0 break-words mt-4 mb-2">
                  {data?.title}{" "}
                  <span className="font-normal">
                    ({releaseDate.get("year")})
                  </span>
                </h1>
                <div className="text-sm flex items-center">
                  <span className="bg-black/60 text-yellow-500 inline-flex items-center gap-1 p-1 px-1.5 rounded-md w-fit mr-2">
                    <TiStarOutline /> {data?.vote_average?.toFixed(1)}
                  </span>
                  {data?.vote_count} ratings
                  <span className="inline-block h-1 w-1 rounded-full bg-current mx-2" />
                  {data?.runtime} mins
                </div>
              </div>
              <Trailer videos={data?.videos?.results} />
            </div>
          </div>
          <section className="grid md:grid-cols-2 gap-8">
            <TmdbImage
              wImage="w342"
              src={`${data?.poster_path}`}
              alt={data?.title || ""}
              imgClassName="mx-auto md:mx-0"
              height={720}
              width={350}
            />
            <article className="space-y-4">
              <h4 className="text-lg font-semibold">{data?.tagline}</h4>
              <p className="min-w-0 break-words whitespace-pre-wrap text-slate-400">
                {data?.overview}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-slate-400">Type:</label>
                  <p>Movie</p>
                </div>
                <div className="space-y-2">
                  <label className="text-slate-400">Release Date:</label>
                  <p>{releaseDate.format("DD/MM/YYYY")}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-slate-400">Genres:</label>
                  <div>
                    {data?.genres?.map((i: any, index: number) => (
                      <Fragment key={i?.id}>
                        {i?.name}
                        {index !== (data.genres?.length || 1) - 1 && ", "}
                      </Fragment>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-400">Run time:</label>
                  <p>{data?.runtime || 0} mins</p>
                </div>

                {data?.status && (
                  <div className="space-y-2">
                    <label className="text-slate-400">Status:</label>
                    <p>{data?.status}</p>
                  </div>
                )}

                {!!data?.budget && (
                  <div className="space-y-2 col-span-full">
                    <label className="text-slate-400">Budget:</label>
                    <p>{formatter.format(data?.budget || 0)}</p>
                  </div>
                )}

                {!!data?.revenue && (
                  <div className="space-y-2 col-span-full">
                    <label className="text-slate-400">Revenue:</label>
                    <p>{formatter.format(data.revenue)}</p>
                  </div>
                )}
              </div>
            </article>
          </section>

          <section>{data?.id && <Casting movie_id={data.id} />}</section>

          <section>{data?.id && <Recommend movie_id={data.id} />}</section>
        </div>
      </main>
    </>
  );
}
