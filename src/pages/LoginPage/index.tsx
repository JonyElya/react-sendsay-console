import React, { useEffect, useMemo } from 'react';
import { Form } from 'react-final-form';
import { withRouter } from 'react-router-dom';

import { Button, Error, Input } from 'src/components';
import styled from 'styled-components';

import useAuth from 'src/hooks/useAuth';
import validate from './validator';
import { LOGIN, PASSWORD, SUB_LOGIN } from './consts';


interface IProps {
  history: any;
}

const Caption = styled.h1`
  font-size: 24px;
  line-height: 30px;
  font-weight: normal;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  width: 520px;
  height: initial;
  left: calc(50% - 520px / 2);
  top: 222px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px 30px;
`;

const LogoStyled = styled.img`
  margin-bottom: 20px;
`;

const LoginPage: React.FC<IProps> = ({ history }) => {
  const { onLogin, loading, isAuth, error } = useAuth();

  const initialValue: IAuthFormValues = useMemo(
    () => ({
      login: '',
      sublogin: '',
      password: '',
    }),
    []
  );

  useEffect(() => {
    if (isAuth) {
      history.push('/console');
    }
  }, [isAuth, history]);

  return (
    <Wrapper>
      <LogoStyled src="/icons/logo.svg" alt="" />
      <Form
        initialValues={initialValue}
        validate={validate}
        onSubmit={onLogin}
        render={({ handleSubmit, hasValidationErrors }) => (
          <form onSubmit={handleSubmit}>
            <FormWrapper>
              <Caption>API-консолька</Caption>
              {error && <Error>{error}</Error>}
              <Input label={LOGIN} required fullWidth name="login" />
              <Input label={SUB_LOGIN} fullWidth name="sublogin" />
              <Input label={PASSWORD} fullWidth required name="password" type="password" />
              <Button disabled={hasValidationErrors} loading={loading} onClick={handleSubmit}>
                Отправить
              </Button>
            </FormWrapper>
          </form>
        )}
      />
    </Wrapper>
  );
};

export default withRouter(LoginPage);
