import React, { useEffect, useState } from 'react';
import MovieRow from '../../components/movie-row';
import BillboardTrailer from '../../components/billboard-trailer';
import { Container } from '../../components/ui';
import { MovieService } from '../../services';
import Billboard from '../../components/billboard';
import { Wrapper } from './styled';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [billboard, setBillboard] = useState(null);
  const [billboardVideoKey, setBillboardVideoKey] = useState(null);

  const fetchPopular = () => {
    MovieService.fetchPopular()
      .then((resp) =>
        setMovies((prevState) => [
          ...prevState,
          {
            results: resp?.data?.results,
            category: 'Popular Now',
          },
        ])
      )
      .catch((err) => console.log(err));
  };

  const fetchTopRated = () => {
    MovieService.fetchTopRated()
      .then((resp) =>
        setMovies((prevState) => [
          ...prevState,
          {
            results: resp?.data?.results,
            category: 'Top Rated',
          },
        ])
      )
      .catch((err) => console.log(err));
  };

  const fetchWeeklyTrends = () => {
    MovieService.fetchTrendingMovies()
      .then((resp) =>
        setMovies((prevState) => [
          ...prevState,
          {
            results: resp?.data?.results,
            category: 'Weekly Trends',
          },
        ])
      )
      .catch((err) => console.log(err));
  };

  const fetchUpcoming = () => {
    MovieService.fetchUpcoming()
      .then((resp) =>
        setMovies((prevState) => [
          ...prevState,
          {
            results: resp?.data?.results,
            category: 'Upcoming',
          },
        ])
      )
      .catch((err) => console.log(err));
  };

  const setRandomBillboard = () => {
    const randomCategory = Math.floor(Math.random() * movies.length);
    const randomMovie = Math.floor(Math.random() * movies[randomCategory]?.results?.length);
    const movie = movies[randomCategory]?.results[randomMovie];

    setBillboard(movie);
  };

  const fetchVideo = (videoID) => {
    MovieService.fetchVideo(videoID).then((resp) => {
      const key = resp?.data?.results[0]?.key;

      setBillboardVideoKey(key);
    });
  };

  useEffect(() => {
    fetchPopular();
    fetchTopRated();
    fetchUpcoming();
    fetchWeeklyTrends();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      setRandomBillboard();
    }
  }, [movies]);

  useEffect(() => {
    if (billboard) {
      fetchVideo(billboard?.id);
    }
  }, [billboard]);

  return (
    <Wrapper className="homepage">
      {billboardVideoKey && <BillboardTrailer videoKey={billboardVideoKey} />}

      <Container>
        {billboard && <Billboard overview={billboard.overview} title={billboard.title} />}
        {movies.length > 0 &&
          movies.map((data, index) => {
            return <MovieRow movieData={data} key={`category_id_${index}`} />;
          })}
      </Container>
    </Wrapper>
  );
};

export default Homepage;
