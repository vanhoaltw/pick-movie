import { TypeCast, TypeMovie, TypeMovieDetail } from "@/types";
import { request } from "./request";

type ResponseMovieList = {
  page: number;
  results: TypeMovie[];
  total_pages: number;
  total_results: number;
};

export const getMoviePopular = (page?: number): Promise<ResponseMovieList> => {
  return request.get(`movie/popular?page=${page}`).json();
};

export const getMovieTopRated = (page?: number): Promise<ResponseMovieList> => {
  return request.get(`movie/top_rated?page=${page}`).json();
};

export const getMovieUpcoming = (page?: number): Promise<ResponseMovieList> => {
  return request.get(`movie/upcoming?page=${page}`).json();
};

export const getMovieDetail = (movie_id: number): Promise<TypeMovieDetail> => {
  return request.get(`movie/${movie_id}?append_to_response=videos`).json();
};

export const getCast = (cast_id: number): Promise<TypeCast> => {
  return request
    .get(`person/${cast_id}?append_to_response=external_ids`)
    .json();
};

export const getCasting = (
  movie_id: number
): Promise<{
  id: number;
  cast: TypeCast[];
}> => {
  return request.get(`movie/${movie_id}/credits`).json();
};

export const getSimilar = (
  movie_id: number
): Promise<{
  page: number;
  results: TypeMovie[];
}> => {
  return request.get(`movie/${movie_id}/similar`).json();
};

export const getCastMovie = (
  cast_id?: number
): Promise<{ cast: TypeMovie[] }> => {
  return request.get(`person/${cast_id}/movie_credits`).json();
};

export const getSearchMulti = (
  page?: number,
  query?: string
): Promise<ResponseMovieList> => {
  return request.get(`search/multi?page=${page}&query=${query}`).json();
};
