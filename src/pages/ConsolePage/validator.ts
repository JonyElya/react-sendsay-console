const ERROR_TEXT = 'Некорректный запрос';
const REQUIRED_MESSAGE = 'Не может быть пустым';

const validate = ({ request }: RequestConsoleData) => {
  const errors: any = {};
  if (!request) {
    errors.request = REQUIRED_MESSAGE;
  }
  try {
    if (typeof JSON.parse(request.toString()) === 'object') {
      return;
    }
  } catch (e) {
    errors.request = ERROR_TEXT;
  }
  return errors;
};

export default validate;
