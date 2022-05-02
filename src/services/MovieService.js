import HttpClient from '../http-client';
import urls from './urls';

class MovieService {
  static fetchTrendingMovies = () => {
    return HttpClient.get(urls.WEEKLY_TREND_MOVIES);
  };
  static fetchPopular = () => {
    return HttpClient.get(urls.POPULAR);
  };
  static fetchTopRated = () => {
    return HttpClient.get(urls.TOP_RATED);
  };
  static fetchUpcoming = () => {
    return HttpClient.get(urls.UPCOMING);
  };
}

export default MovieService;
