import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<IProps> = ({ component: Component, ...rest }) => {
  const { isAuth } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
