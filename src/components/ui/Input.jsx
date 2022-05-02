import React from 'react';
import styled from 'styled-components';
import variables from '../../styled/variables';

const StyledInput = styled.input`
  display: ${(props) => (props.display ? props.display : 'block')};
  background: ${(props) => (props.background ? props.background : variables.BLACK_150)};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  outline: transparent;
  border: ${(props) => (props.border ? props.border : 'none')};
  color: ${(props) => (props.color ? props.color : variables.WHITE)};
  margin: ${(props) => (props.margin ? props.margin : '0')};
`;

const Input = React.forwardRef((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

export default Input;
