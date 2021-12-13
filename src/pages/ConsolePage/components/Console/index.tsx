import React from 'react';
import styled from 'styled-components';

import { Icon, TextArea } from 'src/components';
import { useConsole } from 'src/hooks';

const Console: React.FC = () => {
  const {
    consoleStore: { hasError },
  } = useConsole();

  return (
    <Container>
      <TextArea name="request" label="Запрос:" />
      <Delimiter name="dots" height={18} />
      <TextArea hasError={hasError} name="response" label="Ответ:" />
    </Container>
  );
};

export default Console;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 15px;
  height: 100%;
`;

const Delimiter = styled(Icon)`
  margin: 0 3px;
`;
