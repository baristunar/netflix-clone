import React from 'react';
import { StyledBillboardTrailer } from './styled';

const BillboardTrailer = ({videoKey}) => {
  return (
    <StyledBillboardTrailer>
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&rel=0&showinfo=0&playlist=${videoKey}`}
        frameBorder="0"
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </StyledBillboardTrailer>
  );
};

export default BillboardTrailer;
