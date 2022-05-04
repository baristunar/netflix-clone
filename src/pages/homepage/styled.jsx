import styled from 'styled-components';
import variables from '../../styled/variables';
import { Button } from '../../components/ui';

export const Wrapper = styled.section`
  padding-bottom: 100px;
`;

export const Billboard = styled.section`
  width: 450px;
  margin-top: 25vh;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 20px;
`;

export const BillboardTitle = styled.h2`
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  color: ${variables.PRIMARY};
  animation title-animation 1s ease 3.5s forwards;

  @keyframes title-animation {
    0% {
      font-size:70px;
    }
 
    100% {
     font-size:40px;
    }
    }
`;

export const BillboardOverview = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
  margin-top: 20px;
`;

export const BillboardTrailer = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlayButton = styled(Button)`
  font-weight: bold;
  font-size: 18px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

export const InfoButton = styled(Button)`
  background-color: rgba(109, 109, 110, 0.7);

  &:hover {
    background-color:rgba(109,109,110,0.4);
  }
`;
