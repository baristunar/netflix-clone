import React, { useEffect, useState } from 'react';
import MovieRow from '../../components/movie-row';
import { Container } from '../../components/ui';
import { MovieService } from '../../services';
import {
  Wrapper,
  Billboard,
  BillboardOverview,
  BillboardTitle,
  ButtonWrapper,
  BillboardTrailer,
  PlayButton,
  InfoButton,
} from './styled';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [billboard, setBillboard] = useState(null);
  const [billboardVideoKey, setBillboardVideoKey] = useState(null);

  const fetchPopular = () => {
    MovieService.fetchPopular()
      .then((resp) =>
        resolve({
          results: resp?.data?.results,
          category: 'Popular Now',
        })
      )
      .catch((err) => reject(err));
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
      .catch((err) => reject(err));
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
      .catch((err) => reject(err));
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
      .catch((err) => reject(err));
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
      {billboardVideoKey && (
        <BillboardTrailer>
          <iframe
            src={`https://www.youtube.com/embed/${billboardVideoKey}?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&rel=0&showinfo=0&playlist=${billboardVideoKey}`}
            frameBorder="0"
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </BillboardTrailer>
      )}

      <Container>
        {billboard && (
          <Billboard>
            <BillboardTitle>{billboard?.title}</BillboardTitle>
            <BillboardOverview>{billboard?.overview}</BillboardOverview>
            <ButtonWrapper>
              <PlayButton
                borderRadius="20px"
                fontWeight="bold"
                padding="10px 0"
                height="40px"
                width="45%"
                background="white"
                color="black">
                Play
              </PlayButton>
              <InfoButton
                borderRadius="20px"
                fontWeight="bold"
                padding="10px 0"
                height="40px"
                width="45%"
                background="rgba(55,54,55,0.5)"
                color="white">
                More Information
              </InfoButton>
            </ButtonWrapper>
          </Billboard>
        )}
        {movies.length > 0 &&
          movies.map((data, index) => {
            return <MovieRow movieData={data} key={`category_id_${index}`} />;
          })}
      </Container>
    </Wrapper>
  );
};

export default Homepage;
