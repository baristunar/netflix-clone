import React, { useEffect, useState } from 'react';
import MovieRow from '../../components/movie-row';
import { Container } from '../../components/ui';
import { SeriesService } from '../../services';
import BillboardTrailer from '../../components/billboard-trailer';
import Billboard from '../../components/billboard';
import { Wrapper } from './styled';

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
      {billboardVideoKey && <BillboardTrailer videoKey={billboardVideoKey} />}

      <Container>
        {billboard && <Billboard overview={billboard.overview} title={billboard.name} />}
        {series.length > 0 &&
          series.map((data, index) => {
            return <MovieRow movieData={data} key={`category_id_${index}`} />;
          })}
      </Container>
    </Wrapper>
  );
};

export default Homepage;
