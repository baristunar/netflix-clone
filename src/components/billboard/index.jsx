import React from 'react';
import {
  BillboardWrapper,
  BillboardTitle,
  BillboardOverview,
  PlayButton,
  InfoButton,
  ButtonWrapper,
} from './styled';

const Billboard = ({ title, overview }) => {
  return (
    <BillboardWrapper>
      <BillboardTitle>{title}</BillboardTitle>
      <BillboardOverview>{overview}</BillboardOverview>
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
    </BillboardWrapper>
  );
};

export default Billboard;
