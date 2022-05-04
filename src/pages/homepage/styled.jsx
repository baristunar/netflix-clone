import styled from 'styled-components';

export const Wrapper = styled.section`
  position: absolute;
  top: 0;
  min-height: 100vh;
  z-index: -1;
  width: 100vw;
  padding-bottom:100px;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 90vh;
  background-position: top;
`;

export const Billboard = styled.section`
  width: 420px;
  margin-top: 30vh;
`;

export const BillboardTitle = styled.h2`
  font-size: 56px;
  font-weight: bold;
  text-align: center;
`;

export const BillboardOverview = styled.p`
  font-size: 18px;
  text-align: center;
  line-height: 1.5rem;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
