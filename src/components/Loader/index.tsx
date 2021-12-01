import React from 'react';
import styled, { keyframes } from 'styled-components';
import Icon from '../Icon';

const animation = keyframes`
  from { transform: rotate(360deg);}
  to { transform: rotate(0deg);}
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  animation-name: ${animation};
  animation-duration: 850ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Loader: React.FC = () => {
  return (
    <IconWrapper>
      <Icon name="loader" />
    </IconWrapper>
  );
};

export default Loader;
