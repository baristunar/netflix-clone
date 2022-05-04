import HttpClient from '../http-client';
import { TV_URLS } from './urls';

class MovieService {
  static fetchTrendingMovies = () => {
    return HttpClient.get(TV_URLS.WEEKLY_TREND_MOVIES);
  };
  static fetchPopular = () => {
    return HttpClient.get(TV_URLS.POPULAR);
  };
  static fetchTopRated = () => {
    return HttpClient.get(TV_URLS.TOP_RATED);
  };
  static fetchUpcoming = () => {
    return HttpClient.get(TV_URLS.UPCOMING);
  };
  static fetchVideo = (tvID) => {
    return HttpClient.get(`/tv/${tvID}/videos`);
  };
}

export default MovieService;
