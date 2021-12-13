import React from 'react';
import styled from 'styled-components';

type TSize = 'default' | 'big';

interface IProps {
  size?: TSize;
}

const Alert: React.FC<IProps> = ({ size = 'default', ...props }) => <Base size={size} {...props} />;

export default Alert;

const Base = styled.div<{ size?: TSize }>`
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  background-color: ${(props) => (props.size === 'big' ? '#CF2C00' : '#f6f6f6')};
  color: ${(props) => (props.size === 'big' ? 'white' : '')};
  height: 20px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: min-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  border-radius: 5px;
  animation: fadeOut 4s linear reverse;

  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    75% {
      opacity: 1;
      transform: translateY(-20px);
    }
    99% {
      opacity: 0;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
    }
  }
`;
