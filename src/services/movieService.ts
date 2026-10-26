import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { TMDBResponse, Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const fetchMovies = async (query: string, page: number = 1): Promise<Movie[]> => {
  const config = {
    params: {
      query: query,
      page: page,
      include_adult: false,
      language: 'en-US',
    },
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };
  const response: AxiosResponse<TMDBResponse> = await axios.get<TMDBResponse>(BASE_URL, config);
  

  return response.data.results;
};