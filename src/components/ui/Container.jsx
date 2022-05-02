import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 0 50px;
  margin: 0 auto;
`;

const Container = React.forwardRef(({ children }, ref) => {
  return (
    <StyledContainer ref={ref} className="container">
      {children}
    </StyledContainer>
  );
});

export default Container;
