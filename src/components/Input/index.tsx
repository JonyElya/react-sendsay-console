import React from 'react';
import { useField } from 'react-final-form';
import styled from 'styled-components';
import { Text } from '../index';
import { FieldState } from 'final-form';

type inputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'ref' | 'name'
>;

interface IProps extends inputProps {
  fullWidth?: boolean;
  label?: string;
  meta?: Pick<FieldState<any>, 'touched' | 'error' | 'submitError'>;
}

const OPTIONAL_TEXT = 'Опционально';

const Input: React.FC<IProps> = ({
  autoComplete = 'new-password',
  label = 'Поле',
  required,
  fullWidth = false,
  meta: { touched, error, submitError },
  ...props
}) => {
  const hasError = submitError || error;
  return (
    <Wrapper>
      <LabelWrapper>
        <Label inValid={touched && !!hasError}>{label}</Label>
        {!required && (
          <Text size="small" color="secondary">
            {OPTIONAL_TEXT}
          </Text>
        )}
      </LabelWrapper>
      <InputBase
        inValid={touched && !!hasError}
        autoComplete={autoComplete}
        fullWidth={fullWidth}
        required={required}
        {...props}
      />
    </Wrapper>
  );
};

interface IConnectedProps extends IProps {
  name: string;
}

const ConnectedInput: React.FC<IConnectedProps> = ({ name, ...props }) => {
  const { input, meta } = useField(name);
  return <Input meta={meta} {...input} {...props} />;
};

export default ConnectedInput;

const InputBase = styled.input<{ fullWidth: boolean; inValid?: boolean }>`
  height: 40px;
  min-width: 280px;
  width: ${(props) => (props.fullWidth ? '100%' : 'initial')};
  border: ${(props) => (props.inValid ? '1px solid #CF2C00' : '1px solid rgba(0, 0, 0, 0.2)')};
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 18px;
  color: #0d0d0d;
  box-shadow: ${(props) => (props.inValid ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : '')};

  :hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  :focus {
    outline: 1px solid rgba(0, 0, 0, 0.2);
  }
  &[type='password'] {
    font-size: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label<{ inValid?: boolean }>`
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => (props.inValid ? '#CF2C00' : '#0d0d0d')};
`;

const LabelWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;
