import { useDispatch, useSelector } from 'react-redux';
import { authenticate, logout } from '../store/slices/auth';

interface IUseAuth {
  onLogin: (values: IAuthFormValues) => void;
  logOut: () => void;
  loading: boolean;
  isAuth: boolean;
  error: string;
}

const useAuth = (): IUseAuth => {
  const dispatch = useDispatch();

  const onLogin = (values: IAuthFormValues) => dispatch(authenticate(values));
  const logOut = () => dispatch(logout());
  const loading = useSelector(({ auth }: IStore) => auth.loading);
  const isAuth = useSelector(({ auth }: IStore) => !!auth.sessionKey?.length);
  const error = useSelector(({ auth }: IStore) => auth.error);

  return {
    onLogin,
    logOut,
    loading,
    isAuth,
    error,
  };
};

export default useAuth;
