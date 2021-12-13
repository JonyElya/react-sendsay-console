import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Dropdown, Icon } from 'src/components';
import { useConsole } from 'src/hooks';

const HistoryTrack: React.FC = () => {
  const { clear, consoleStore } = useConsole();
  const { history } = consoleStore;

  const onCLear = useCallback(
    (event) => {
      event.preventDefault();
      clear();
    },
    [clear]
  );

  if (!history.length) {
    return null;
  }
  return (
    <Container>
      <List>{!!history.length && history.map((item) => <Dropdown key={item.id} record={item} />)}</List>
      <CrossWrapper onClick={onCLear}>
        <Icon name="cross" />
      </CrossWrapper>
    </Container>
  );
};

export default HistoryTrack;

const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 10px 0 10px 15px;
  background: #f6f6f6;
  border-bottom: 1px solid #c4c4c4;
  height: 50px;
  overflow: hidden;
  width: 100%;
  justify-content: space-between;
`;

const List = styled.div`
  overflow-x: auto;
  display: flex;
  width: 100%;
  min-height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CrossWrapper = styled.div`
  border-left: 1px solid #c4c4c4;
  padding: 13px 16px 12px;
  cursor: pointer;
  position: relative;
  :before {
    content: '';
    left: -11px;
    top: 0;
    position: absolute;
    width: 10px;
    height: 100%;
    z-index: 4;
    background: linear-gradient(269.93deg, #f6f6f6 0.06%, rgba(246, 246, 246, 0) 99.93%);
  }
`;
