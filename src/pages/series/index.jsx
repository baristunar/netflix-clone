import React, { useEffect, useState } from 'react';
import MovieRow from '../../components/movie-row';
import { Container } from '../../components/ui';
import { SeriesService } from '../../services';
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
  const [series, setSeries] = useState([]);
  const [billboard, setBillboard] = useState(null);
  const [billboardVideoKey, setBillboardVideoKey] = useState(null);

  const fetchPopular = () => {
    SeriesService.fetchPopular()
      .then((resp) => {
        setSeries((prevState) => [
          ...prevState,
          {
            results: resp?.data?.results,
            category: 'Popular Now',
          },
        ]);
      })
      .catch((err) => console.log(err));
  };

  const fetchTopRated = () => {
    SeriesService.fetchTopRated()
      .then((resp) => {
        setSeries((prevState) => [
          ...prevState,
          {
            results: resp?.data?.results,
            category: 'Top Rated',
          },
        ]);
      })
      .catch((err) => console.log(err));
  };

  const setRandomBillboard = () => {
    const randomCategory = Math.floor(Math.random() * series.length);
    const randomSerie = Math.floor(Math.random() * series[randomCategory]?.results?.length);
    const serie = series[randomCategory]?.results[randomSerie];

    setBillboard(serie);
  };

  const fetchVideo = (videoID) => {
    SeriesService.fetchVideo(videoID).then((resp) => {
      const key = resp?.data?.results[0]?.key;

      setBillboardVideoKey(key);
    });
  };

  useEffect(() => {
    fetchPopular();
    fetchTopRated();
  }, []);

  useEffect(() => {
    if (series.length > 0) {
      setRandomBillboard();
    }
  }, [series]);

  useEffect(() => {
    if (billboard) {
      fetchVideo(billboard?.id);

      console.log(billboard);
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
            <BillboardTitle>{billboard?.name}</BillboardTitle>
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
        {series.length > 0 &&
          series.map((data, index) => {
            return <MovieRow movieData={data} key={`category_id_${index}`} />;
          })}
      </Container>
    </Wrapper>
  );
};

export default Homepage;
