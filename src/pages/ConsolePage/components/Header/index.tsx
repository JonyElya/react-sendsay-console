import React from 'react';
import styled from 'styled-components';
import { ButtonText, Icon, Text } from 'src/components';
import { useAuth } from 'src/hooks';
import FullScreenButton from './components/FullScreenButton';

const Header: React.FC = () => {
  const { user, logOut } = useAuth();
  const { login, sublogin } = user;
  return (
    <Container>
      <RightSide>
        <Logo src="/icons/logo.svg" alt="" />
        <Text lineHeight="medium" size="big">
          API-консолька
        </Text>
      </RightSide>
      <LeftSide>
        <ProfileWrapper>
          <Text lineHeight="small">{login}</Text>
          {sublogin && (
            <SubloginWrapper>
              <Delimiter>:</Delimiter>
              <Text lineHeight="small">{sublogin}</Text>
            </SubloginWrapper>
          )}
        </ProfileWrapper>
        <ButtonText onClick={logOut} icon={<Icon name="logout" />}>
          Выйти
        </ButtonText>
        <FullScreenButton />
      </LeftSide>
    </Container>
  );
};

export default Header;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  max-height: 50px;
  background: #f6f6f6;
  border-bottom: 1px solid #c4c4c4;
`;

const Logo = styled.img`
  margin-right: 20px;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 3.5px 10px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-right: 30px;
`;

const Delimiter = styled.span`
  color: rgba(0, 0, 0, 0.2);
  margin: 0 5px;
  line-height: 125%;
`;

const SubloginWrapper = styled.div`
  display: flex;
`;
