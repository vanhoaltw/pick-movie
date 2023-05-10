export enum MediaType {
  movie = "movie",
  tv = "tv",
  person = "person",
}
export type TypeVideo = {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  key?: string;
  site?: "YouTube";
  size?: number;
  type?: "Teaser" | "Featurette" | "Clip" | "Trailer";
  official?: boolean;
  published_at?: string;
  id?: string;
};

export type TypeMovie = {
  adult?: boolean;
  backdrop_path?: string;
  id?: number;
  title?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string;
  media_type?: MediaType;
  genre_ids?: number[];
  popularity?: number;
  release_date?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export type TypeMovieDetail = {
  belongs_to_collection?: string;
  budget?: number;
  genres?: { id?: number; name?: string }[];
  homepage?: string;
  imdb_id?: string;
  production_companies?: {
    id?: number;
    logo_page?: string;
    name?: string;
    origin_country?: string;
  }[];
  revenue?: number;
  runtime?: number;
  status?: string;
  tagline?: string;
  videos?: { results?: TypeVideo[] };
} & TypeMovie;

export type TypeExteralIds = {
  id?: number;
  freebase_mid?: string;
  freebase_id?: string;
  imdb_id?: string;
  tvrage_id?: string;
  wikidata_id?: string;
  facebook_id?: string;
  instagram_id?: string;
  tiktok_id?: string;
  twitter_id?: string;
  youtube_id?: string;
};

export type TypeCast = {
  adult: false;
  gender: 2;
  id: 73457;
  known_for_department: "Acting";
  name: "Chris Pratt";
  original_name: "Chris Pratt";
  popularity: 85.623;
  profile_path: "/83o3koL82jt30EJ0rz4Bnzrt2dd.jpg";
  cast_id: 11;
  character: "Mario (voice)";
  credit_id: "614cffe1d55c3d00674af464";
  order: 0;
  birthday?: string;
  also_known_as?: string[];
  biography?: string;
  place_of_birth?: string;
  external_ids?: TypeExteralIds;
};
