import React from 'react';
import styled from 'styled-components';

type TText = 'default' | 'secondary' | 'error';
type TSize = 'default' | 'small';

interface IProps {
  color?: TText;
  size?: TSize;
}

const Text: React.FC<IProps> = ({ color = 'default', size, ...props }) => <Base color={color} size={size} {...props} />;

export default Text;

const Base = styled.p<{ color?: TText; size?: TSize }>`
  line-height: 167%;
  font-size: ${(props) => (props.size === 'small' ? '12px' : 'inherit')};
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
