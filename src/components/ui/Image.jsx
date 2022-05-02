import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: ${(props) => (props.width ? props.height : '100%')};
  object-fit: ${(props) => (props.objectFit ? props.objectFit : 'fill')};
`;

const Image = React.forwardRef((props, ref) => {
  return <StyledImage ref={ref} {...props} />;
});

export default Image;
