import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import Loader from '../Loader';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  fullwidth?: boolean;
}

const BaseButton = styled.button`
  min-width: 110px;
  background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  color: white;
  border-radius: 5px;
  border: none;
  min-height: 40px;
  max-height: 42px;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
      linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  }
  :focus {
    border: 2px solid #45a5ff;
    border-radius: 7px;
  }
  :active {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
    border: none;
  }
  :disabled {
    background: linear-gradient(0deg, #c4c4c4, #c4c4c4), linear-gradient(180deg, #45a6ff 0%, #0055fb 100%);
  }
`;

const Button: React.FC<IProps> = ({ loading, children, ...props }) => {
  return <BaseButton {...props}>{loading ? <Loader /> : children}</BaseButton>;
};

export default Button;
