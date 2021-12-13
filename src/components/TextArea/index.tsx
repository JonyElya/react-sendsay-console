import React from 'react';
import styled from 'styled-components';
import { useField } from 'react-final-form';

type Props = Omit<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>,
  'ref'
>;

interface IProps extends Props {
  label: string;
  hasError?: boolean;
}

const TextArea: React.FC<IProps> = ({ name, label, hasError, ...props }) => {
  const {
    input,
    meta: { submitError, invalid },
  } = useField(name);

  return (
    <Wrapper>
      <Label inValid={!!submitError || invalid || hasError}>{label}</Label>
      <Base inValid={!!submitError || invalid || hasError} {...input} {...props} />
    </Wrapper>
  );
};

export default TextArea;

const Base = styled.textarea<{ inValid?: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-size: 14px;
  padding: 10px;
  border: ${(props) => (props.inValid ? '1px solid #CF2C00' : '1px solid rgba(0, 0, 0, 0.2)')};
  box-shadow: ${({ inValid }) => (inValid ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : '')};
  :hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  :focus {
    outline: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Label = styled.label<{ inValid?: boolean }>`
  font-size: 12px;
  line-height: 20px;
  color: ${({ inValid }) => (inValid ? '#CF2C00' : '#999999')};
`;
