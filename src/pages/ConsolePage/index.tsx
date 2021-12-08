import React, { useCallback, useMemo } from 'react';
import { Form } from 'react-final-form';

import { useConsole } from 'src/hooks';
import Header from './components/Header';
import HistoryTrack from './components/HistoryTrack';
import Console from './components/Console';
import Footer from './components/Footer';
import styled from 'styled-components';
import validate from './validator';

const ConsolePage: React.FC = () => {
  const { create, consoleStore } = useConsole();
  const { request, response } = consoleStore;

  const initialValues = useMemo(() => ({ response, request }), [request, response]);

  const onSubmit = useCallback(
    (values) => {
      create(values);
    },
    [create]
  );

  return (
    <Wrapper>
      <Header />
      <HistoryTrack />
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form style={{ height: 'calc(100% - 171px)' }} onSubmit={handleSubmit}>
            <Console />
            <Footer />
          </form>
        )}
      />
    </Wrapper>
  );
};

export default ConsolePage;

const Wrapper = styled.div`
  background: white;
  width: 100%;
  height: 100%;
`;
