import HttpClient from '../http-client';
import { MOVIE_URLS } from './urls';

class MovieService {
  static fetchTrendingMovies = () => {
    return HttpClient.get(MOVIE_URLS.WEEKLY_TREND_MOVIES);
  };
  static fetchPopular = () => {
    return HttpClient.get(MOVIE_URLS.POPULAR);
  };
  static fetchTopRated = () => {
    return HttpClient.get(MOVIE_URLS.TOP_RATED);
  };
  static fetchUpcoming = () => {
    return HttpClient.get(MOVIE_URLS.UPCOMING);
  };
  static fetchVideo = (movieID) => {
    return HttpClient.get(`/movie/${movieID}/videos`);
  };
}

export default MovieService;
