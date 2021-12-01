const regexLogin = new RegExp(/^[a-zA-Z](.[a-zA-Z0-9.@_-]*)$/gi);
const cyrillic = new RegExp(/[а-я]/i);

const validate = ({ login, password }: IAuthFormValues) => {
  const errors: any = {};
  if (!login) {
    errors.login = 'Не может быть пустым';
  }
  if (!login.match(regexLogin)) {
    errors.login = 'Только латиснкие буквы, цифры и подчеркивания';
  }
  if (!password) {
    errors.password = 'Не может быть пустым';
  }
  if (password.match(cyrillic)) {
    errors.password = 'Только латинские буквы и спец. символы';
  }
  return errors;
};

export default validate;
