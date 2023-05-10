import { getCast } from "@/services/tmdbRequest";
import dayjs from "dayjs";
import TmdbImage from "@/components/images/TmdbImage";
import LinkSocials from "@/components/LinkSocials";
import { GENDER, TMDB_IMAGE_BASE_URL } from "@/constants/tmdb";
import KnowFor from "./KnowFor";
import NotFound from "@/components/NotFound";
import { PageHead } from "@/components/PageHead";

export default async function CastPage({
  params,
}: {
  params: { slug?: string };
}) {
  const { slug } = params || {};
  let data = null;
  try {
    data = await getCast(Number(slug));
  } catch (error) {
    return <NotFound />;
  }

  const age = dayjs(data?.birthday);

  return (
    <>
      <PageHead
        title={data?.name}
        description={data?.biography}
        ogImage={`${TMDB_IMAGE_BASE_URL}/w300${data?.profile_path}`}
      />
      <main className="min-h-screen max-w-5xl mx-auto my-10 relative grid md:grid-cols-[300px,minmax(250px,_1fr)] gap-8">
        <div className="space-y-4 w-full">
          <TmdbImage
            alt={data?.name || ""}
            wImage="w500"
            src={`${data?.profile_path}`}
            width={300}
            height={400}
            imgClassName="mx-auto md:mx-0"
          />
          <LinkSocials data={data?.external_ids} />

          <div>
            <label className="text-slate-400">Name</label>
            <p className="font-bold">{data?.name}</p>
          </div>

          <div>
            <label className="text-slate-400">Known for</label>
            <p className="font-bold">{data?.known_for_department}</p>
          </div>

          <div>
            <label className="text-slate-400">Gender</label>
            <p className="font-bold">{GENDER[data?.gender]}</p>
          </div>

          <div>
            <label className="text-slate-400">Birthday</label>
            <p className="font-bold">
              {age.format("DD/MM/YYYY")}{" "}
              <span className="font-normal">
                ({dayjs().diff(age, "year")} year old)
              </span>
            </p>
          </div>

          {!!data?.place_of_birth && (
            <div>
              <label className="text-slate-400">Place of Birth</label>
              <p className="font-bold">{data?.place_of_birth}</p>
            </div>
          )}

          {!!data?.also_known_as?.length && (
            <div>
              <label className="text-slate-400">Also Known As</label>
              {data?.also_known_as?.map((i) => (
                <p key={i}>{i}</p>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{data?.name}</h1>
          <p className="text-slate-400 min-w-0 break-words whitespace-pre-wrap">
            {data?.biography}
          </p>

          <div className="mt-10">
            <KnowFor cast_id={data?.id} />
          </div>
        </div>
      </main>
    </>
  );
}
