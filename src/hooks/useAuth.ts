import { useDispatch, useSelector } from 'react-redux';
import { authenticate, logout } from '../store/slices/auth';

interface IUseAuth {
  onLogin: (values: IAuthFormValues) => void;
  logOut: () => void;
  loading: boolean;
  isAuth: boolean;
  error: string;
  user: IUser;
}

const useAuth = (): IUseAuth => {
  const dispatch = useDispatch();

  const onLogin = (values: IAuthFormValues) => dispatch(authenticate(values));
  const logOut = () => dispatch(logout());
  const loading = useSelector(({ auth }: IStore) => auth.loading);
  const isAuth = useSelector(({ auth }: IStore) => !!auth.sessionKey?.length);
  const error = useSelector(({ auth }: IStore) => auth.error);
  const user = useSelector(({ auth }: IStore) => ({ login: auth.login, sublogin: auth.sublogin }));

  return {
    onLogin,
    logOut,
    loading,
    isAuth,
    error,
    user,
  };
};

export default useAuth;
