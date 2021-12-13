import React from 'react';
import styled from 'styled-components';

type TText = 'default' | 'secondary' | 'error';
type TSize = 'default' | 'small' | 'big' | 'medium';
type TLineHeight = 'default' | 'small' | 'medium';

interface IProps {
  color?: TText;
  size?: TSize;
  lineHeight?: TLineHeight;
}

const Text: React.FC<IProps> = ({ color = 'default', size, lineHeight = 'default', ...props }) => (
  <Base color={color} lineHeight={lineHeight} size={size} {...props} />
);

export default Text;

const Base = styled.p<{ color?: TText; size?: TSize; lineHeight?: TLineHeight }>`
  font-size: ${(props) => {
    switch (props.size) {
      case 'default':
        return 'inherit';
      case 'small':
        return '12px';
      case 'medium':
        return '16px';
      case 'big':
        return '20px';
    }
  }};
  line-height: ${(props) => {
    switch (props.lineHeight) {
      case 'default':
        return '167%';
      case 'medium':
        return '150%';
      case 'small':
        return '125%';
    }
  }};
  margin: 0;
  color: ${(props) => {
    switch (props.color) {
      case 'default':
        return '#0D0D0D';
      case 'error':
        return 'rgba(207, 44, 0, 0.5)';
      case 'secondary':
        return '#999999';
    }
  }};
`;
