import React from 'react';
import styled from 'styled-components';
import { Icon, Text } from '../index';

interface IProps {
  title?: string;
}

const Error: React.FC<IProps> = ({ children, title = 'Вход не вышел' }) => {
  return (
    <Wrapper>
      <RightSide>
        <Icon name="smile" />
      </RightSide>
      <LeftSide>
        <Title>{title}</Title>
        <Text size="small" color="error">
          {children}
        </Text>
      </LeftSide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgba(207, 44, 0, 0.1);
  border-radius: 5px;
  padding: 10px 12px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const LeftSide = styled.div`
  margin-left: 10px;
`;

const RightSide = styled.div`
  padding-top: 5px;
`;

const Title = styled.label`
  font-size: 18px;
  line-height: 30px;
  color: #cf2c00;
`;

export default Error;
