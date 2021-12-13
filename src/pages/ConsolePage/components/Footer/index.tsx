import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Alert, Button, ButtonText, Icon, Text } from 'src/components';
import { useField } from 'react-final-form';

const Footer: React.FC = () => {
  const {
    input: { value, onChange },
  } = useField('request');

  const [visible, setVisible] = useState(false);

  const onFormat = useCallback(() => {
    try {
      const request = JSON.parse(value.toString());
      if (typeof request === 'object') {
        onChange(JSON.stringify(request, null, 2));
      }
    } catch (e) {
      setVisible(true);
      setTimeout(() => setVisible(false), 1000);
    }
  }, [onChange, value]);

  return (
    <Container>
      <Button type="submit">Отправить</Button>
      <Link target="_blank" href="https://github.com/JonyElya">
        <Text color="secondary" size="medium">
          @JonyElya
        </Text>
      </Link>
      <ButtonText type="button" onClick={onFormat} variant="reverse" icon={<Icon name="format" />}>
        Форматировать
        {visible && <Alert size="big">Невалидный</Alert>}
      </ButtonText>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const Link = styled.a`
  text-decoration: none;
`;
