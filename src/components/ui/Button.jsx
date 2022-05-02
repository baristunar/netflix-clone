import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
`;

const Button = React.forwardRef((props, ref) => {
  return (
    <StyledButton ref={ref} {...props}>
      {props.children}
    </StyledButton>
  );
});

export default Button;
