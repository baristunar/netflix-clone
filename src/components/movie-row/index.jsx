import React from 'react';
import { Wrapper, Title } from './styled';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Image, Button } from '../ui';
import '@splidejs/react-splide/css';

const SLIDER_OPTIONS = {
  type: 'loop',
  fixedWidth: 200,
  fixedHeight: 300,
  gap: 15,
  rewind: true,
  pagination: false,
  cover: true,
};

const MovieRow = ({ movieData }) => {
  return (
    <Wrapper>
      <Title height="100px">{movieData.category}</Title>
      <Splide options={SLIDER_OPTIONS}>
        {movieData?.results.length > 0 &&
          movieData?.results.map((item, index) => {
            return (
              <SplideSlide key={`slide__${index}`}>
                <Button>
                  <Image
                    objectFit="cover"
                    height="100%"
                    src={process.env.IMAGE_URL + item.poster_path}
                    alt={item.title}
                  />
                </Button>
              </SplideSlide>
            );
          })}
      </Splide>
    </Wrapper>
  );
};

export default MovieRow;
