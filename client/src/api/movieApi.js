import api from "./axios";

export const getMovies = async (
  search = "Marvel"
) => {
  return await api.get(
    `/movies?search=${search}`
  );
};

export const getMovieDetails = async (
  id
) => {
  return await api.get(
    `/movies/${id}`
  );
};