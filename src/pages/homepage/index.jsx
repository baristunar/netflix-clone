import React, { useEffect, useState } from 'react';
import MovieRow from '../../components/movie-row';
import { Container, Button } from '../../components/ui';
import { MovieService } from '../../services';
import { Wrapper, Billboard, BillboardOverview, BillboardTitle, ButtonWrapper } from './styled';
import ReactPlayer from 'react-player';

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
    <Wrapper
      backgroundImage={process.env.IMAGE_URL + billboard?.backdrop_path}
      className="homepage">
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
        {billboardVideoKey && (
          <div>
            <ReactPlayer
              width="560px"
              height="315px"
              controls="false"
              playing={true}
              url={`https://www.youtube.com/embed/${billboardVideoKey}`}></ReactPlayer>
          </div>
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
