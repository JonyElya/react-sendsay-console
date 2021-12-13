import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Alert, Icon, MenuItem } from '../index';
import { useConsole } from 'src/hooks';

import styled from 'styled-components';

interface IProps {
  record: IHistory;
}

const actions = {
  run: 'Выполнить',
  copy: 'Скопировать',
  delete: 'Удалить',
};

const convertAction = (values: string) => values.replaceAll('"', '');

const Dropdown: React.FC<IProps> = ({ record }) => {
  const { clearItem, create } = useConsole();
  const targetRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const [isAlert, setIsAlert] = useState<boolean>(false);

  const { status, request, id } = record;
  const req = request as IRequest;

  const toggle = useCallback(() => setVisible(!visible), [visible]);
  const hide = useCallback(() => setVisible(false), []);

  const onDelete = useCallback(() => {
    clearItem(id);
    hide();
  }, [clearItem, id, hide]);
  const onCreate = useCallback(() => create({ request: JSON.stringify(request, null, 2) }), [create, request]);
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(JSON.stringify(request, null, 2));
    setIsAlert(true);
    setTimeout(() => setIsAlert(false), 1000);
    hide();
  }, [request, hide]);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setWidth(targetRef.current.offsetWidth);
    }
  }, [targetRef]);

  return (
    <Wrapper ref={targetRef}>
      <Button onClick={toggle}>
        <Status status={status} />
        {convertAction(JSON.stringify(req.action || req))}
        <IconWrapper>
          <Icon name="dots" />
        </IconWrapper>
        {isAlert && <Alert>Скопировано</Alert>}
      </Button>
      {visible && (
        <List width={width}>
          <MenuItem onClick={onCreate} value={actions.run} hoverColor="blue" />
          <MenuItem onClick={onCopy} value={actions.copy} hoverColor="blue" />
          <Separator />
          <MenuItem onClick={onDelete} value={actions.delete} hoverColor="red" />
        </List>
      )}
      {visible && <BackDrop onClick={hide} />}
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  margin-right: 10px;
  :last-of-type {
    margin-right: 0;
  }
`;

const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;
`;

const Button = styled.button`
  padding: 10px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
  cursor: pointer;
  position: relative;
`;

const Separator = styled.span`
  height: 1px;
  margin: 5px 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const Status = styled.span<{ status: Status }>`
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: ${(props) => (props.status === 'success' ? '#30B800' : '#CF2C00')};
  height: 10px;
  width: 10px;
  margin-right: 5px;
`;

const List = styled.div<{ width?: number }>`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 3;
  min-width: 110px;
  width: ${(props) => `${props.width}px`};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  position: absolute;
`;

const IconWrapper = styled.span`
  margin-left: 11px;
  display: flex;
  align-items: center;
`;
