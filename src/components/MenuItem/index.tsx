import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hoverColor?: THoverColor;
  value: string;
}

const MenuItem: React.FC<IProps> = ({ value, hoverColor, ...props }) => (
  <Item hoverColor={hoverColor} {...props}>
    {value}
  </Item>
);

export default MenuItem;

const Item = styled.button<{ hoverColor?: THoverColor }>`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  width: 100%;
  background-color: transparent;
  text-align: left;
  :hover {
    color: white;
    background: ${(props) => {
      switch (props.hoverColor) {
        case 'blue':
          return '#0055FB';
        case 'red':
          return '#CF2C00';
        default:
          return '';
      }
    }};
  }
`;
