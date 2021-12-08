import { useDispatch, useSelector } from 'react-redux';
import { consoleSlice, createRequest } from 'src/store/slices/console';

interface IUseConsole {
  consoleStore: IConsoleStore;
  create: (values: RequestConsoleData) => void;
  clear: () => void;
  clearItem: (value: number) => void;
}

const useConsole = (): IUseConsole => {
  const dispatch = useDispatch();
  const create = (values: RequestConsoleData) => dispatch(createRequest(values));
  const clear = () => dispatch(consoleSlice.actions.clear());
  const clearItem = (value: number) => dispatch(consoleSlice.actions.removeItem(value));
  const consoleStore = useSelector(({ console }: IStore) => console);

  return {
    consoleStore,
    create,
    clear,
    clearItem,
  };
};

export default useConsole;
