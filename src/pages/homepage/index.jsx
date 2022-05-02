import React, { useEffect, useState } from 'react';
import { Container, Button } from '../../components/ui';
import { MovieService } from '../../services';
import { Wrapper, Billboard, BillboardOverview, BillboardTitle, ButtonWrapper } from './styled';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [billboard, setBillboard] = useState({});

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
    console.log(movie);
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

  return (
    <Wrapper backgroundImage={process.env.IMAGE_URL + billboard.backdrop_path} className="homepage">
      <Container>
        <Billboard>
          <BillboardTitle>{billboard.title}</BillboardTitle>
          <BillboardOverview>{billboard.overview}</BillboardOverview>
          <ButtonWrapper>
            <Button fontWeight="bold" padding="10px 0" width="45%" background="white" color="black">
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
      </Container>
    </Wrapper>
  );
};

export default Homepage;
