import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'src/components';

const FullScreenButton: React.FC = () => {
  const [isFull, setIsFull] = useState<boolean>(!!document.fullscreenElement);

  const toggle = useCallback(() => {
    isFull ? document.exitFullscreen() : document.documentElement.requestFullscreen();
    setIsFull(!isFull);
  }, [isFull]);

  document.onfullscreenchange = useCallback(() => {
    if (!document.fullscreenElement) {
      setIsFull(false);
    }
  }, []);

  return <Wrapper onClick={toggle}>{isFull ? <Icon name="fullscreen-out" /> : <Icon name="fullscreen" />}</Wrapper>;
};

export default FullScreenButton;

const Wrapper = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
