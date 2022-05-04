import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  display: ${(props) => (props.display ? props.display : 'block')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  transition: all 0.2s ease;
  border-radius: ${(props) => props.borderRadius};
`;

const Button = React.forwardRef((props, ref) => {
  return (
    <StyledButton ref={ref} {...props}>
      {props.children}
    </StyledButton>
  );
});

export default Button;
