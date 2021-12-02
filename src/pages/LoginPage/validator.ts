import { LOGIN_VALID_MESSAGE, PASSWORD_VALID_MESSAGE, REQUIRED_MESSAGE } from './consts';

const regexLogin = new RegExp(/^[a-zA-Z](.[a-zA-Z0-9.@_-]*)$/gi);
const cyrillic = new RegExp(/[а-я]/i);

const validate = ({ login, password }: IAuthFormValues) => {
  const errors: any = {};
  if (!login) {
    errors.login = REQUIRED_MESSAGE;
  }
  if (!login?.match(regexLogin)) {
    errors.login = LOGIN_VALID_MESSAGE;
  }
  if (!password) {
    errors.password = REQUIRED_MESSAGE;
  }
  if (password?.match(cyrillic)) {
    errors.password = PASSWORD_VALID_MESSAGE;
  }
  return errors;
};

export default validate;
