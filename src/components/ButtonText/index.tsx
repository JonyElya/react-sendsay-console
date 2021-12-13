import React from 'react';
import styled from 'styled-components';

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'ref'
>;

type TVariant = 'default' | 'reverse';

interface IProps extends ButtonProps {
  icon?: React.ReactNode;
  variant?: TVariant;
}

const ButtonText: React.FC<IProps> = ({ children, variant = 'default', icon, ...props }) => {
  return (
    <Button variant={variant} {...props}>
      {children}
      {icon && <IconWrapper variant={variant}>{icon}</IconWrapper>}
    </Button>
  );
};

export default ButtonText;

const Button = styled.button<{ variant?: TVariant }>`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  flex-direction: ${(props) => (props.variant === 'reverse' ? 'row-reverse' : 'inherit')};
  padding: 0;
  position: relative;
`;

const IconWrapper = styled.div<{ variant?: TVariant }>`
  margin-left: ${(props) => (props.variant === 'default' ? '10px' : '0')};
  margin-right: ${(props) => (props.variant === 'reverse' ? '10px' : '0')};
  display: flex;
  align-items: baseline;
`;
