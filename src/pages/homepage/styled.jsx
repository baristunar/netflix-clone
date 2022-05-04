import styled from 'styled-components';
import variables from '../../styled/variables';

export const Wrapper = styled.section`
  padding-bottom: 100px;
`;

export const Billboard = styled.section`
  width: 420px;
  margin-top: 25vh;
`;

export const BillboardTitle = styled.h2`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color:${variables.PRIMARY};
`;

export const BillboardOverview = styled.p`
  font-size: 18px;
  font-weight:bold;
  text-align: center;
  line-height:1.2;
  margin-top: 20px;
`;

export const BillboardTrailer = styled.div`
  position: absolute;
  top: 0;
  height: 90vh;
  width: 100vw;
  z-index: -1;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
