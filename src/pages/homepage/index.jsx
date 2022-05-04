import React, { useEffect, useState } from 'react';
import MovieRow from '../../components/movie-row';
import { Container, Button } from '../../components/ui';
import { MovieService } from '../../services';
import {
  Wrapper,
  Billboard,
  BillboardOverview,
  BillboardTitle,
  ButtonWrapper,
  BillboardTrailer,
} from './styled';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [billboard, setBillboard] = useState(null);
  const [billboardVideoKey, setBillboardVideoKey] = useState(null);

  const fetchPopular = new Promise((resolve, reject) => {
    MovieService.fetchPopular()
      .then((resp) =>
        resolve({
          results: resp?.data?.results,
          category: 'Popular Now',
        })
      )
      .catch((err) => reject(err));
  });

  const fetchTopRated = new Promise((resolve, reject) => {
    MovieService.fetchTopRated()
      .then((resp) =>
        resolve({
          results: resp?.data?.results,
          category: 'Top Rated',
        })
      )
      .catch((err) => reject(err));
  });

  const setRandomBillboard = () => {
    const randomCategory = Math.floor(Math.random() * movies.length);
    const randomMovie = Math.floor(Math.random() * movies[randomCategory]?.results?.length);
    const movie = movies[randomCategory]?.results[randomMovie];

    setBillboard(movie);
  };

  const fetchVideo = (videoID) => {
    MovieService.fetchVideo(videoID).then((resp) => {
      const key = resp?.data?.results[0]?.key;

      if (!key) {
        fetchVideo(videoID);
        return;
      }

      setBillboardVideoKey(key);
    });
  };

  useEffect(() => {
    Promise.all([fetchPopular, fetchTopRated])
      .then((movies) => setMovies(movies))
      .catch((err) => console.log(err));
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
            src={`https://www.youtube.com/embed/${billboardVideoKey}?autoplay=1&mute=1&controls=0`}
            frameBorder="0"
            width="100%"
            height="100%"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </BillboardTrailer>
      )}
      <Container>
        {billboard && (
          <Billboard>
            <BillboardTitle>{billboard?.title}</BillboardTitle>
            <BillboardOverview>{billboard?.overview}</BillboardOverview>
            <ButtonWrapper>
              <Button
                fontWeight="bold"
                padding="10px 0"
                width="45%"
                background="white"
                color="black">
                Play
              </Button>
              <Button
                fontWeight="bold"
                padding="10px 0"
                width="45%"
                background="rgba(55,54,55,0.5)"
                color="white">
                More Information
              </Button>
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
